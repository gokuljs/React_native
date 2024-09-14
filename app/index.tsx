import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center h-[100%] border">
      <Text className="text-3xl font-black">Hi man</Text>
      <Link href="/Home">home</Link>
    </View>
  );
}
