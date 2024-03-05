import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

export default function Test() {
  const pressed = useSharedValue(false);
  const offset = useSharedValue({ x: 0, y: 0 });
  const currentOffset = useSharedValue({ x: 0, y: 0 });

  const tap = Gesture.Pan()
    .onBegin(() => {
      pressed.value = true;
    })
    .onChange((event) => {
      offset.value = {
        x: currentOffset.value.x + event.translationX,
        y: currentOffset.value.y + event.translationY,
      };
    })
    .onFinalize(() => {
      pressed.value = false;
      currentOffset.value = { ...offset.value };
    });

  const animatedStyles = useAnimatedStyle(() => ({
    backgroundColor: pressed.value ? "#FFE04B" : "#B58DF1",
    transform: [
      { translateX: offset.value.x },
      { translateY: offset.value.y },
      { scale: withTiming(pressed.value ? 1.2 : 1) },
    ],
  }));

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.container}>
        <GestureDetector gesture={tap}>
          <Animated.View style={[styles.circle, animatedStyles]} />
        </GestureDetector>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    height: 120,
    width: 120,
    borderRadius: 500,
  },
});
