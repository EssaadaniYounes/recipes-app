import { Image, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import firebaseConfig from "../firebase";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Logout = () => {
  const [showLogout, setShowLogout] = useState(false);

  const handleLogout = async () => {
    auth
      .signOut()
      .then(() => console.log("Logout Done"))
      .catch((er) => console.error(er));
  };

  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.4}
        onPress={() => setShowLogout(!showLogout)}
        className="bg-gray-300 rounded-full overflow-hidden h-12 w-12 items-end justify-end"
      >
        <Image
          source={require("../assets/images/user-64.png")}
          className="object-cover mr-2 h-10 w-10"
        />
      </TouchableOpacity>
      {showLogout && (
        <TouchableOpacity
          onPress={handleLogout}
          className="absolute  min-w-[100px] h-9 -bottom-12 bg-blue-200 px-3 right-2 flex-row items-center justify-center rounded-md"
        >
          <AntDesign name="logout" size={15} color="#374151" />
          <Text className="text-base font-semibold ml-2 text-gray-700">
            Logout
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Logout;
