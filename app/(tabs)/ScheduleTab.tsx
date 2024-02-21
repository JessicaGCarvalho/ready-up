import { ThemedButton, ThemedText, ThemedView } from "@/components/Themed";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { useColorScheme } from "react-native";
import Colors from "@/constants/Colors";

export default function TabOneScreen() {
  const colorScheme = useColorScheme();

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Schedule</ThemedText>
      <ThemedButton style={styles.plusButton}>
        <AntDesign
          name="plus"
          size={36}
          color={Colors[colorScheme ?? "light"].accent}
        />
      </ThemedButton>
    </ThemedView>
  );
}
