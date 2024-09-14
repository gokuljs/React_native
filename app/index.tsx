import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex items-center justify-center h-[100%]">
      <Text>Hi man</Text>
      <Link href="/Profile">G0 to profile</Link>
    </View>
  );
}
