export type Task = {
  id: number;
  name: string;
  duration: number;
  discarded: boolean;
};

export type Routine = {
  id: number;
  name: string;
  discarded: boolean;
};

export type RoutineTask = {
  id: number;
  routineId: number;
  taskId: number;
};
