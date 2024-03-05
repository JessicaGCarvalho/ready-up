import { Routine, Task } from "@/constants/types";
import { simpleQuery } from "./helpers";

export const getRoutines = async (): Promise<Routine[]> => {
  const result = await simpleQuery(`SELECT * FROM routines;`);
  return result["rows"]["_array"];
};

export const getTasksForRoutine = async (
  routineId: number
): Promise<Task[]> => {
  const result = await simpleQuery(
    `
      SELECT tasks.*
      FROM routineTasks 
      INNER JOIN tasks 
      ON routineTasks.taskId = tasks.id 
      WHERE routineTasks.routineId=?
      ORDER BY POSITION
    `,
    [routineId]
  );
  return result["rows"]["_array"];
};

export const createRoutine = (routineName: string) => {
  return simpleQuery(
    `
    INSERT INTO routines (name, discarded) VALUES (?,0)
  `,
    [routineName]
  );
};

export const deleteRoutine = (routineId: number) => {
  return simpleQuery(
    `
    DELETE FROM routines WHERE id = ?
  `,
    [routineId]
  );
};
