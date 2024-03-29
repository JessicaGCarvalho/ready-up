export const SETUP_TASKS_SQL = `
  CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    duration INTEGER NOT NULL,
    discarded BOOLEAN NOT NULL
  );
`;
export const SETUP_ROUTINES_SQL = `
  CREATE TABLE IF NOT EXISTS routines (
    id INTEGER PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    discarded BOOLEAN NOT NULL
  );
`;
export const SETUP_ROUTINE_TASKS_SQL = `
  CREATE TABLE IF NOT EXISTS routineTasks (
    id INTEGER PRIMARY KEY,
    routineId INTEGER REFERENCES Routine(id),
    taskId INTEGER REFERENCES Task(id),
    position INTEGER
  );
`;
