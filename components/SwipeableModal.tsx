import { PropsWithChildren } from "react";
import { Modal, View, StyleSheet } from "react-native";
import { ThemedView, ViewProps } from "./Themed";
import { useSharedValue } from "react-native-reanimated";

type ModalProps = {
  isOpen: boolean;
  onDismiss: () => void;
};
export type SwipeableModalProps = ModalProps & Modal["props"];

export const SwipeableModal = ({
  children,
  isOpen,
  onDismiss,
  ...rest
}: PropsWithChildren<SwipeableModalProps>) => {
  const Y = useSharedValue(0);

  return (
    <Modal {...rest} visible={isOpen} onDismiss={onDismiss}>
      <View style={styles.background}>{children}</View>
    </Modal>
  );
};

SwipeableModal.Foreground = ({
  children,
  style,
  ...rest
}: PropsWithChildren<ViewProps>) => {
  return (
    <ThemedView style={[style]} {...rest}>
      {children}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "rgba(10, 10, 10, 0.5)",
    height: "100%",
  },
});
