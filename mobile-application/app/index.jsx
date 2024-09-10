import { View, Text, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import image from "../assets/image";
import CustomeButton from "./components/customeButton";
import { router } from "expo-router";

const Index = () => {
  const handleClick = () => {
    console.log("Button Clicked");
    router.replace("/home");
  };
  return (
    <View className="flex-1 items-center justify-center bg-white space-y-4">
      <Text className="text-xl font-bold">
        Medical Entrance Exam Prepearation
      </Text>
      <Image
        source={image.doctor}
        resizeMode="contain"
        className="w-[90%] h-52"
      />
      <CustomeButton title="Continue with email" handlePress={handleClick} />
      <StatusBar style="auto" />
    </View>
  );
};

export default Index;
