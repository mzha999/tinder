import { useNavigation } from "@react-navigation/core";
import React, { useLayoutEffect } from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import useAuth from "../hooks/useAuth";
import tw from "tailwind-rn";
const LoginScreen = () => {
  const { signInWithGoogle, loading } = useAuth();
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View style={tw("flex-1")}>
      <ImageBackground
        resizeMethod="cover"
        style={tw("flex-1")}
        source={{ uri: "https://tinder.com/static/tinder.png" }}
      >
        <TouchableOpacity
          title="login"
          onPress={signInWithGoogle}
          style={[tw("absolute bottom-40 w-52 bg-white p-4 rounded-2xl"), { marginHorizontal: "25%" }]}
        >
          <Text style={tw("text-center")}>
            {loading ? "loading..." : "Login to the app"}
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
