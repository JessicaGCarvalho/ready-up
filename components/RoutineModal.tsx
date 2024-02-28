import { Modal, TouchableOpacity, View } from "react-native";

export function RoutineModal(isVisible: boolean) {
  return (
    <Modal animationType="slide" visible={isVisible}>
      <View>
        <TouchableOpacity>Edit Routine</TouchableOpacity>
        <TouchableOpacity>Delete Routine</TouchableOpacity>
        <TouchableOpacity>Cancel</TouchableOpacity>
      </View>
    </Modal>
  );
}
