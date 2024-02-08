import { StyleSheet } from "react-native";
import { styles } from "./styles";
import { ThemedText, ThemedView, ThemedButton } from "@/components/Themed";

export default function TabTwoScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedButton>
        <ThemedText>Create New Routine</ThemedText>
      </ThemedButton>
      <ThemedView style={styles.separator} />
    </ThemedView>
  );
}
