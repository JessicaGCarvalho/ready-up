export type Task = {
  id: number;
  name: string;
  duration: number;
  discarded: 0 | 1;
};

export type Routine = {
  id: number;
  name: string;
  discarded: 0 | 1;
};

export type RoutineTask = {
  id: number;
  routineId: number;
  taskId: number;
};
