import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    gap: 16,
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  text: {
    fontSize: 16,
  },
  createRoutineButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  plusButton: {
    borderRadius: 40,
    alignItems: "center",
    position: "absolute",
    padding: 16,
    right: 20,
    bottom: 20,
  },
});
