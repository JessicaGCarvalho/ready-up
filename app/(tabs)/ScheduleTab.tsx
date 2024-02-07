import { ThemedText, ThemedView } from "@/components/Themed";
import { styles } from "./styles";

export default function TabOneScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Schedule</ThemedText>
      <ThemedView
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </ThemedView>
  );
}
