import React from "react";
import { Tabs } from "expo-router";
import { FaHome } from "react-icons/fa";

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          // tabBarIcon: ({ color }) => (
          //   <FaHome name="Home" color={color} size={28} />
          // ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          // tabBarIcon: ({ color }) => (
          //   <FontAwesome size={28} name="profile" color={color} />
          // ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
