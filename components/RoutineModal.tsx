import {
  Modal,
  View,
  TouchableHighlight,
  StyleSheet,
  useColorScheme,
  Pressable,
} from "react-native";
import { ThemedText } from "./Themed";
import Colors from "@/constants/Colors";
import { Feather, MaterialIcons } from "@expo/vector-icons";

export function RoutineModal(props: {
  isVisible: boolean;
  setIsRoutineModalVisible: (isVisible: boolean) => void;
  handleDelete: () => void;
}) {
  const colorScheme = useColorScheme();
  const handleClose = () => {
    props.setIsRoutineModalVisible(false);
  };
  return (
    // <Modal
    //   transparent
    //   visible={props.isVisible}
    //   onDismiss={handleClose}
    //   animationType="none"
    // >
    //   <Pressable
    //     style={[
    //       { backgroundColor: Colors[colorScheme ?? "light"].modalBackground },
    //       styles.background,
    //     ]}
    //     onPress={handleClose}
    //   ></Pressable>
    <Modal
      transparent
      visible={props.isVisible}
      onDismiss={handleClose}
      animationType="fade"
    >
      <Pressable
        style={[
          { backgroundColor: Colors[colorScheme ?? "light"].modalBackground },
          styles.background,
        ]}
        //style={styles.background}
        onPress={handleClose}
      >
        <View style={styles.container}>
          <TouchableHighlight
            onPress={() => {}}
            style={[
              {
                backgroundColor:
                  Colors[colorScheme ?? "light"].secondaryBackground,
              },
              styles.modalButton,
              styles.topModalButton,
            ]}
            underlayColor={Colors[colorScheme ?? "light"].highlightBackground}
          >
            <View style={styles.modalButtonContainer}>
              <MaterialIcons
                name="edit"
                size={24}
                color={Colors[colorScheme ?? "light"].text}
              />
              <ThemedText style={styles.text}>Edit Routine</ThemedText>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              props.handleDelete();
              handleClose();
            }}
            style={[
              {
                backgroundColor:
                  Colors[colorScheme ?? "light"].secondaryBackground,
                borderTopColor:
                  Colors[colorScheme ?? "light"].highlightBackground,
                borderTopWidth: 1,
              },
              styles.modalButton,
              styles.deleteModalButton,
            ]}
            underlayColor={Colors[colorScheme ?? "light"].highlightBackground}
          >
            <View style={styles.modalButtonContainer}>
              <Feather
                name="x"
                size={28}
                color={Colors[colorScheme ?? "light"].red}
              />
              <ThemedText
                style={[
                  { color: Colors[colorScheme ?? "light"].red },
                  styles.text,
                ]}
              >
                Delete Routine
              </ThemedText>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={handleClose}
            style={[
              {
                backgroundColor:
                  Colors[colorScheme ?? "light"].secondaryBackground,
              },
              styles.modalButton,
              styles.cancelModalButton,
            ]}
            underlayColor={Colors[colorScheme ?? "light"].highlightBackground}
          >
            <ThemedText style={styles.text}>Cancel</ThemedText>
          </TouchableHighlight>
        </View>
      </Pressable>
    </Modal>
    // </Modal>
  );
}

const styles = StyleSheet.create({
  background: {
    height: "100%",
  },
  container: {
    display: "flex",
    height: "25%",
    width: "100%",
    position: "absolute",
    alignItems: "center",
    bottom: 0,
  },
  text: {
    fontSize: 16,
  },
  modalButton: {
    padding: 16,
    width: "95%",
  },
  modalButtonContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 24,
    alignItems: "center",
    paddingLeft: 8,
  },
  topModalButton: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  deleteModalButton: {
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  cancelModalButton: {
    borderRadius: 12,
    marginTop: 16,
    alignItems: "center",
  },
});
