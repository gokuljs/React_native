import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View>
      <Text
        style={{
          color: "black",
          padding: 100,
          display: "flex",
        }}
      >
        Hi man
      </Text>
      <Link href="/Profile">G0 to profile</Link>
    </View>
  );
}
