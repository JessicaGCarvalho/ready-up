import { SearchBar } from "@/components/SearchBar";
import { Task } from "@/components/Task";
import { ThemedView } from "@/components/Themed";
import { Task as TaskType } from "@/constants/types";
import { createTask, getTasks } from "@/database/tasks";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";

export default function addTaskLayout() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [currentSearch, setCurrentSearch] = useState("");

  useEffect(() => {
    //createTask("get dressed", 40);
    getTasks().then(setTasks);
  }, []);

  return (
    <ThemedView style={styles.container}>
      <SearchBar
        setCurrentSearch={setCurrentSearch}
        placeHolder="Search Tasks"
      />
      <ScrollView contentContainerStyle={styles.tasksContainer}>
        {tasks
          .filter((task) =>
            task.name.toLowerCase().includes(currentSearch.toLowerCase())
          )
          .map((task) => {
            return <Task task={task} />;
          })}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: 16,
    gap: 16,
  },
  text: {
    fontSize: 16,
  },
  tasksContainer: {
    display: "flex",
    gap: 16,
    height: "100%",
  },
});
