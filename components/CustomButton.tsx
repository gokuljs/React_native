import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({
  title,
  handlePress,
  containerStyle,
  textStyles,
  isLoading,
}: any) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[52px] justify-center items-center ${containerStyle} ${
        isLoading ? "0.5" : ""
      }`}
      onPress={handlePress}
      disabled={isLoading}
    >
      <Text
        className={`"text-primary font-semibold text-lg px-2 ${textStyles}`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
