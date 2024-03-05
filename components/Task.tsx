import { useColorScheme } from "react-native";
import { ThemedButton, ThemedText } from "./Themed";
import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";
import type { Task } from "@/constants/types";

export function Task(props: { task: Task }) {
  const colorScheme = useColorScheme();

  return (
    <ThemedButton
      style={[
        {
          backgroundColor: Colors[colorScheme ?? "light"].secondaryBackground,
        },
        styles.container,
      ]}
    >
      <ThemedText style={styles.title}>{props.task.name}</ThemedText>
      <ThemedText
        style={[
          {
            color: Colors[colorScheme ?? "light"].secondaryText,
          },
          styles.text,
        ]}
      >
        {props.task.duration} s
      </ThemedText>
    </ThemedButton>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    padding: 16,
    borderRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  text: {
    fontSize: 16,
  },
});
