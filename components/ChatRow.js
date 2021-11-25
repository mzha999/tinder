import React,{useEffect, useState} from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useAuth from "../hooks/useAuth";
import {onSnapshot, query, collection, orderBy} from "@firebase/firestore"
const ChatRow = ({ matchDetails }) => {
  const navigation = useNavigation();
  const { user } = useAuth();
  const [matchedUserInfo, setMatchedUserInfo] = userState();
  const [lastMessage, setLastMessage] = useState("");
  useEffect(() => {
    setMatchedUserInfo(getMatchedUserInfo(matchDetails.users, user.uid));
  }, [matchDetails, user]);
  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "matches", matchDetails.id, "messages").orderBy(
            "timestamp",
            "desc"
          )
        ),
        (snapshot) => setLastMessage(snapshot.docs[0]?.data().message)
      ),
    [matchDetails, db]
  );
  return (
    <TouchableOpacity
      onPress={
        (() => navigation,
        navigator("Message", {
          matchDetails,
        }))
      }
      style={[
        tw("flex-row items-center py-3 px-5 bg-white mx-3 rounded-lg"),
        cardShadow,
      ]}
    >
      <Image
        style={tw("rounded-full h-16 w-16 mr-4")}
        source={{ uri: matchedUserInfo?.photoURL }}
      />
    </TouchableOpacity>
  );
};

export default ChatRow;

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
