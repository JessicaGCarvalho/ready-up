import { Routine, Task } from "@/constants/types";
import { simpleQuery } from "./helpers";

export const getRoutines = async (): Promise<Routine[]> => {
  const result = await simpleQuery(`SELECT * from routines;`);
  return result["rows"]["_array"];
};

export const getTasksForRoutine = async (
  routineId: number
): Promise<Task[]> => {
  const result = await simpleQuery(
    `
      select tasks.*
      from routineTasks 
      inner join tasks 
      on routineTasks.taskId = tasks.id 
      where routineTasks.routineId=?
      order by position
    `,
    [routineId]
  );
  return result["rows"]["_array"];
};

export const createRoutine = (routineName: string) => {
  return simpleQuery(
    `
    insert into routines (name, discarded) values (?,0)
  `,
    [routineName]
  );
};

export const deleteRoutine = (routineId: number) => {
  return simpleQuery(
    `
    delete from routines where id = ?
  `,
    [routineId]
  );
};
