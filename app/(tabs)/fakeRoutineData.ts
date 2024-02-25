import { Routine, RoutineItem } from "@/constants/types";

export const routineItemList: RoutineItem[] = [
  {
    id: "1",
    name: "wake up",
    duration: 60,
  },
  {
    id: "2",
    name: "get dressed",
    duration: 60,
  },
  {
    id: "3",
    name: "eat breakfast",
    duration: 60,
  },
  {
    id: "4",
    name: "leave",
    duration: 60,
  },
];
export const routineList: Routine[] = [
  {
    id: "1",
    name: "work",
    items: ["1", "2", "3", "4"],
  },
  {
    id: "2",
    name: "gym",
    items: ["3", "4"],
  },
];
