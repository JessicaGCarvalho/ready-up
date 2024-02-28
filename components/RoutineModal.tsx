import { Modal, View, TouchableHighlight, StyleSheet } from "react-native";
import { ThemedText } from "./Themed";

export function RoutineModal(props: {
  isVisible: boolean;
  setIsRoutineModalVisible: (isVisible: boolean) => void;
  handleDelete: () => void;
}) {
  const handleClose = () => {
    props.setIsRoutineModalVisible(false);
  };
  return (
    <Modal
      animationType="slide"
      transparent
      visible={props.isVisible}
      onDismiss={handleClose}
    >
      <View style={styles.container}>
        <TouchableHighlight onPress={() => {}}>
          <ThemedText>Edit Routine</ThemedText>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            props.handleDelete();
            handleClose();
          }}
        >
          <ThemedText>Delete Routine</ThemedText>
        </TouchableHighlight>
        <TouchableHighlight onPress={handleClose}>
          <ThemedText>Cancel</ThemedText>
        </TouchableHighlight>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "25%",
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
});
