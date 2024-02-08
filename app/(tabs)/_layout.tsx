import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors[colorScheme ?? "light"].secondaryBackground,
        },
        tabBarActiveBackgroundColor:
          Colors[colorScheme ?? "light"].secondaryBackground,
        tabBarInactiveBackgroundColor:
          Colors[colorScheme ?? "light"].secondaryBackground,
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].accent,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="ScheduleTab"
        options={{
          title: "Schedule",
          tabBarIcon: ({ color }) => (
            <AntDesign name="calendar" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="RoutineTab"
        options={{
          title: "Routines",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="clock-edit-outline"
              size={28}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
