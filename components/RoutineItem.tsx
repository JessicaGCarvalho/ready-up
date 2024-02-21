import { TouchableOpacity, View, useColorScheme } from "react-native";
import { ThemedAccentButton, ThemedText } from "./Themed";
import { AntDesign } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

export function RoutineItem(props: View["props"]) {
  const colorScheme = useColorScheme();
  return (
    <View
      style={[
        {
          backgroundColor: Colors[colorScheme ?? "light"].secondaryBackground,
        },
        styles.container,
      ]}
    >
      <View style={styles.titleContainer}>
        <ThemedText style={styles.title}>Routine Name</ThemedText>
        <TouchableOpacity>
          <AntDesign
            name="ellipsis1"
            size={26}
            color={Colors[colorScheme ?? "light"].accent}
          />
        </TouchableOpacity>
      </View>

      <ThemedText
        numberOfLines={2}
        ellipsizeMode="tail"
        style={[
          {
            color: Colors[colorScheme ?? "light"].secondaryText,
          },
          styles.text,
        ]}
      >
        Wake Up, Meditate, Water Plants, Brush Teeth, Wash Face, Eat Breakfast,
        Tidy, Get Dressed, Leave
      </ThemedText>
      <ThemedAccentButton>
        <ThemedText style={styles.text}>Add to Schedule</ThemedText>
      </ThemedAccentButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    padding: 16,
    borderRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
  },
});
