import React from "react";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerTintColor: Colors[colorScheme ?? "light"].text,
        headerStyle: {
          backgroundColor: Colors[colorScheme ?? "light"].secondaryBackground,
          borderBottomWidth: 0,
          shadowOpacity: 0,
        },
        tabBarStyle: {
          backgroundColor: Colors[colorScheme ?? "light"].secondaryBackground,
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].accent,
        tabBarInactiveTintColor: Colors[colorScheme ?? "light"].secondaryText,
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
