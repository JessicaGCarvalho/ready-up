import { ThemedAccentButton, ThemedText } from "@/components/Themed";
import Colors from "@/constants/Colors";
import { router } from "expo-router";
import { TextInput, View, useColorScheme, StyleSheet } from "react-native";

export default function CreateRoutineLayout() {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Routine Title"
        placeholderTextColor={Colors[colorScheme ?? "light"].secondaryText}
        style={[
          styles.routineName,
          {
            color: Colors[colorScheme ?? "light"].text,
            borderBottomColor: Colors[colorScheme ?? "light"].secondaryText,
          },
        ]}
      />
      {/* <ThemedText
        style={{
          color: Colors[colorScheme ?? "light"].secondaryText,
        }}
      >
        Get started by adding a task to your routine.
      </ThemedText> */}
      <ThemedAccentButton onPress={() => router.push("/createTask/")}>
        <ThemedText style={styles.text}>+ Add Task</ThemedText>
      </ThemedAccentButton>
    </View>
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
  routineName: {
    fontSize: 20,
    fontWeight: "600",
    width: "100%",
    borderBottomWidth: 0.5,
    paddingBottom: 16,
  },
});
