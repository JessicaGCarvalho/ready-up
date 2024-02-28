import * as SQLite from "expo-sqlite";
import {
  SETUP_ROUTINES_SQL,
  SETUP_ROUTINE_TASKS_SQL,
  SETUP_TASKS_SQL,
} from "./tables";

export const db = SQLite.openDatabase("readyUp.db");

export const setupDb = () => {
  simpleQuery(SETUP_ROUTINES_SQL);
  simpleQuery(SETUP_TASKS_SQL);
  simpleQuery(SETUP_ROUTINE_TASKS_SQL);
};

export const simpleQuery = (
  query: string,
  args: SQLite.SQLStatementArg[] = []
) => {
  return new Promise<SQLite.SQLResultSet>((resolve, reject) => {
    db.transaction(
      (tx) => tx.executeSql(query, args, (_, results) => resolve(results)),
      reject
    );
  });
};

export const dropEverything = () => {
  simpleQuery("DROP TABLE routine_tasks");
  simpleQuery("DROP TABLE routines");
  simpleQuery("DROP TABLE tasks");
};
