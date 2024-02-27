import { Routine, Task } from "@/constants/types";
import { simpleQuery } from "./helpers";

export const getRoutines = async (): Promise<Routine[]> => {
  const result = await simpleQuery(`select * from routines;`);
  return result["rows"]["_array"];
};

export const getTasksForRoutine = async (
  routineId: number
): Promise<Task[]> => {
  const result = await simpleQuery(
    `
      select tasks.*
      from routine_tasks 
      inner join tasks 
      on routine_tasks.taskId = tasks.id 
      where routine_tasks.routineId=?
      order by position
    `,
    [routineId]
  );
  return result["rows"]["_array"];
};

export const createRoutine = () => {};
