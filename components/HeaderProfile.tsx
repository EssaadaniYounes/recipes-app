import { Image, View, TouchableOpacity } from "react-native";
import React from "react";

import useGetAuth from "../hooks/useGetAuth";

const HeaderProfile = ({ navigation }) => {
  const auth = useGetAuth();

  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.4}
        // onPress={() => setShowLogout(!showLogout)}
        onPress={() => navigation.navigate("Profile")}
        className="bg-gray-300 rounded-full overflow-hidden h-12 w-12 items-center justify-center"
      >
        <Image
          source={
            !auth.currentUser?.photoURL
              ? require("../assets/images/user-64.png")
              : { uri: auth.currentUser.photoURL }
          }
          className="object-cover h-12 w-12"
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderProfile;
