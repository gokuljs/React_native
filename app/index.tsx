import { Image, ScrollView, StatusBar, Text, View } from "react-native";
import { Link, Redirect, router, Router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "@/components/CustomButton";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center h-full px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="w-[380px] h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover endless possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>
          <Text className="text-sm font-pregular text-gray-200 mt-7 text-center">
            Where creativity meets innovation:embark on the journey of limitless
            exploration with Aora
          </Text>
          <CustomButton
            title="Continue with email"
            handlePress={() => router.push("/sign-in")}
            containerStyle="w-full mt-2"
          />
        </View>
        <StatusBar
          backgroundColor={"#161622"}
          barStyle={"light-content"}
        ></StatusBar>
      </ScrollView>
    </SafeAreaView>
  );
}
