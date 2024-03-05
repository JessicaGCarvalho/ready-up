import { Task } from "@/constants/types";
import { simpleQuery } from "./helpers";

export const getTasks = async (): Promise<Task[]> => {
  const result = await simpleQuery(`SELECT * FROM tasks;`);
  return result["rows"]["_array"];
};

export const createTask = (taskName: string, taskDuration: number) => {
  return simpleQuery(
    `
    INSERT INTO tasks (name, duration, discarded) VALUES (?,?,0)
  `,
    [taskName, taskDuration]
  );
};

export const deleteRoutine = (taskId: number) => {
  return simpleQuery(
    `
    DELETE FROM tasks WHERE id = ?
  `,
    [taskId]
  );
};
