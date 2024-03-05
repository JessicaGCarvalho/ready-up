import Colors from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { TextInput, View, useColorScheme, StyleSheet } from "react-native";
import { ThemedView } from "./Themed";

export function SearchBar(props: {
  setCurrentSearch: (currentSearch: string) => void;
  placeHolder: string;
}) {
  const colorScheme = useColorScheme();
  return (
    <ThemedView
      style={[
        {
          backgroundColor: Colors[colorScheme ?? "light"].secondaryBackground,
        },
        styles.searchBar,
      ]}
    >
      <AntDesign
        name="search1"
        size={20}
        color={Colors[colorScheme ?? "light"].accent}
      />
      <TextInput
        placeholder={props.placeHolder}
        placeholderTextColor={Colors[colorScheme ?? "light"].secondaryText}
        style={[
          styles.text,
          { color: Colors[colorScheme ?? "light"].text, width: "100%" },
        ]}
        onChangeText={props.setCurrentSearch}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
  searchBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: 8,
    borderRadius: 4,
  },
});
