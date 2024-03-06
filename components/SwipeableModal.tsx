import { PropsWithChildren, useEffect } from "react";
import { Modal, View, StyleSheet } from "react-native";
import { ThemedView, ViewProps } from "./Themed";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

type ModalProps = {
  isOpen: boolean;
  onDismiss: () => void;
};
export type SwipeableModalProps = ModalProps & Modal["props"];

export const SwipeableModal = ({
  children,
  isOpen,
  onDismiss,
  style,
  ...rest
}: PropsWithChildren<SwipeableModalProps>) => {
  const Y = useSharedValue(0);
  const entry = useSharedValue(-100);

  const tap = Gesture.Pan()
    .onChange((event) => {
      Y.value = Math.max(0, event.translationY);
    })
    .onFinalize(() => {
      Y.value = withSpring(0);
    });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: Y.value }],
  }));

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isOpen) {
      timer = setTimeout(() => (entry.value = withSpring(0)), 10);
    }
    return () => {
      entry.value = withSpring(-100);
      clearTimeout(timer);
    };
  }, [isOpen]);

  return (
    <Modal
      {...rest}
      visible={isOpen}
      onDismiss={onDismiss}
      transparent
      animationType="none"
    >
      <GestureDetector gesture={tap}>
        <View style={styles.background}>
          <Animated.View
            style={[
              styles.foreground,
              style,
              animatedStyles,
              { bottom: entry },
            ]}
            {...rest}
          >
            {children}
          </Animated.View>
        </View>
      </GestureDetector>
    </Modal>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "rgba(10, 10, 10, 0.5)",
    height: "100%",
    width: "100%",
    justifyContent: "center",
  },
  foreground: {
    display: "flex",
    alignItems: "center",
    bottom: 0,
    position: "absolute",
    width: "100%",
  },
});
