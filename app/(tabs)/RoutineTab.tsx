import { styles } from "./styles";
import { ThemedText, ThemedView, ThemedButton } from "@/components/Themed";
import Colors from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { useColorScheme } from "react-native";

export default function TabTwoScreen() {
  const colorScheme = useColorScheme();

  return (
    <ThemedView style={styles.container}>
      <ThemedButton style={styles.createRoutineButton}>
        <AntDesign
          name="plus"
          size={20}
          color={Colors[colorScheme ?? "light"].accent}
        />
        <ThemedText style={styles.text}>Create New Routine</ThemedText>
      </ThemedButton>
      <ThemedText style={styles.title}>Routines</ThemedText>
    </ThemedView>
  );
}
