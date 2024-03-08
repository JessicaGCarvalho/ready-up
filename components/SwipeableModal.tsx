import { PropsWithChildren, useEffect } from "react";
import { Modal, StyleSheet, Pressable } from "react-native";
import { ThemedView, ViewProps } from "./Themed";
import Animated, {
  Easing,
  interpolate,
  interpolateColor,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

type ModalProps = {
  isOpen: boolean;
  onDismiss: () => void;
  animationHeight: number;
};
export type SwipeableModalProps = ModalProps & Modal["props"];

const FINAL_POSITION = 0;
const INITIAL_COLOR = "rgba(10, 10, 10, 0)";
const FINAL_COLOR = "rgba(10, 10, 10, 0.75)";

export const SwipeableModal = ({
  children,
  isOpen,
  onDismiss,
  style,
  animationHeight,
  ...rest
}: PropsWithChildren<SwipeableModalProps>) => {
  const Y = useSharedValue(0);
  const progress = useSharedValue(0);

  const tap = Gesture.Pan()
    .onChange((event) => {
      Y.value = Math.max(0, event.translationY);
    })
    .onFinalize(() => {
      if (Y.value > animationHeight / 3) {
        progress.value = withTiming(0, {}, () => {
          runOnJS(onDismiss)();
          Y.value = 0;
        });
      } else {
        Y.value = withSpring(0);
      }
    });

  const animatedGestureStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: Y.value }],
  }));

  const animatedBackground = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      progress.value,
      [0, 1],
      [INITIAL_COLOR, FINAL_COLOR]
    ),
  }));
  const animatedForeground = useAnimatedStyle(() => ({
    bottom: interpolate(
      progress.value,
      [0, 1],
      [-animationHeight, FINAL_POSITION]
    ),
  }));

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isOpen) {
      setTimeout(() => {
        progress.value = withTiming(1, { easing: Easing.inOut(Easing.quad) });
      }, 0);
    }
    return () => {
      progress.value = 0;
      clearTimeout(timer);
    };
  }, [isOpen]);

  const closeModal = () => {
    progress.value = withTiming(0, {}, () => runOnJS(onDismiss)());
  };

  return (
    <Modal
      {...rest}
      visible={isOpen}
      onDismiss={closeModal}
      transparent
      animationType="none"
    >
      <GestureDetector gesture={tap}>
        <Animated.View style={[styles.background, animatedBackground]}>
          <Pressable style={styles.background} onPress={closeModal}>
            <Animated.View
              style={[
                styles.foreground,
                style,
                animatedGestureStyles,
                animatedForeground,
              ]}
              {...rest}
            >
              {children}
            </Animated.View>
          </Pressable>
        </Animated.View>
      </GestureDetector>
    </Modal>
  );
};

const styles = StyleSheet.create({
  background: {
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
