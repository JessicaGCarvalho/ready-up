export type RoutineItem = {
  id: string;
  name: string;
  duration: number; //amount of time before leaving or amount of time that item takes
};

export type Routine = {
  id: string;
  name: string;
  items: string[];
};
