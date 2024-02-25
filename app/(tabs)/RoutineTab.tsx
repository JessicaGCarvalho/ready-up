import { Routine } from "@/components/Routine";
import { styles } from "./styles";
import { ThemedText, ThemedView, ThemedButton } from "@/components/Themed";
import Colors from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { useColorScheme } from "react-native";
import { routineList, routineItemList } from "./fakeRoutineData";
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
      {routineList.map((routine) => {
        return <Routine routine={routine} routineItems={routineItemList} />;
      })}
    </ThemedView>
  );
}
