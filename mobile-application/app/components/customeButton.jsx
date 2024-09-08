import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomeButton = ({ title, handlePress }) => {
  return (
    <View className="mt-4">
      <TouchableOpacity
        className="border-2 p-2 bg-green-400 border-green-500 rounded-lg"
        onPress={handlePress}
      >
        <Text className="text-xl font-bold">{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomeButton;
