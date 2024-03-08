import { ThemedAccentButton, ThemedText } from "@/components/Themed";
import Colors from "@/constants/Colors";
import { TextInput, View, useColorScheme, StyleSheet } from "react-native";

export default function CreateTaskLayout() {
  const colorScheme = useColorScheme();
  return (
    <View>
      <TextInput
        placeholder="Task Name"
        placeholderTextColor={Colors[colorScheme ?? "light"].secondaryText}
        style={[
          styles.text,
          { color: Colors[colorScheme ?? "light"].text, width: "100%" },
        ]}
      />
      <ThemedAccentButton>
        <ThemedText>Create Task</ThemedText>
      </ThemedAccentButton>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});
