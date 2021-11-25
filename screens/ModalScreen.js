import { addDoc, doc, serverTimestamp, setDoc } from "@firebase/firestore";
import { useNavigation } from "@react-navigation/core";
import React, { useLayoutEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-rn";
import { db } from "../firebase";
import useAuth from "../hooks/useAuth";

const ModalScreen = () => {
  const navigation = useNavigation();
  const { user } = useAuth();
  const [image, setImage] = useState(null);
  const [job, setJob] = useState(null);
  const [age, setAge] = useState(null);
  const isFormComplete = !job | !image | !age;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Update your profile",
      headerStyle: {
        backgroundColor: "#FF5864",
      },
      headerTitleStyle: { color: "white" },
    });
  }, []);
  const updateUserProfile = () => {
      setDoc(doc(db, "users", user.uid), {
          id: user.uid,
          displayName: user.displayName,
          photoURL: image,
          job: job,
          age: age,
          timestamp: serverTimestamp()
      }).then(()=> navigation.navigate("Home")).catch(error=>console.log(error))
  };

  return (
    <SafeAreaView style={tw("flex-1 items-center pt-1")}>
      <Image
        style={tw("h-10 w-full")}
        resizeMode="contain"
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/TinderLogo-2017.svg/1280px-TinderLogo-2017.svg.png",
        }}
      />
      <Text style={tw("text-xl text-gray-500 p-2 font-bold")}>
        Welcome {user.displayName}
      </Text>
      <Text style={tw("text-center p-4 font-bold text-red-400")}>
        Step 1: The profile pic
      </Text>
      <TextInput
        value={image}
        onChangeText={setImage}
        placeholder="Enter a Profile Pic URL"
      />
      <Text style={tw("text-center p-4 font-bold text-red-400")}>
        Step 2: The Job
      </Text>
      <TextInput
        value={job}
        onChangeText={setJob}
        placeholder="Enter your occupation"
      />
      <Text style={tw("text-center p-4 font-bold text-red-400")}>
        Step 3: The Age
      </Text>
      <TextInput
        value={age}
        onChangeText={setAge}
        placeholder="Enter your age"
        keyboardType="numeric"
        maxLength={2}
      />
      <TouchableOpacity
        style={[
          tw("w-64 p-3 rounded-xl absolute bottom-0"),
          isFormComplete ? tw("bg-gray-400") : tw("bg-red-400"),
        ]}
        disabled={isFormComplete}
        onPress={updateUserProfile}
      >
        <Text style={tw("text-center text-white text-xl")}>Update profile</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({});
