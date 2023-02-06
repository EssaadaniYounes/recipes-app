import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { getAuth, updateProfile } from "firebase/auth";
import useGetAuth from "../hooks/useGetAuth";
function Profile() {
  const auth = useGetAuth();
  const updateUser = async () => {
    updateProfile(auth.currentUser, {
      displayName: "Jane Q. User",
      photoURL:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    })
      .then(() => {
        // Profile updated!
        // ...
        console.log("USER UPDATED");
      })
      .catch((error) => {
        // An error occurred
        // ...
        console.log(error);
      });
  };
  return (
    <TouchableOpacity onPress={updateUser}>
      <Text>Update Profile</Text>
      <Text>{auth.currentUser?.displayName}</Text>
    </TouchableOpacity>
  );
}

export default Profile;
