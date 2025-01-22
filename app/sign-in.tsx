import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import { login } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/global-provider";
import { Redirect } from "expo-router";

const SignIn = () => {
  const { refetch } = useGlobalContext();

  const handleLogin = async () => {
    // Implement Google Sign-In
    const result = await login();
    if (result) {
      refetch();
    } else {
      Alert.alert("Error", "Failed to login");
    }
  };

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="h-4/6 w-full"
          resizeMode="contain"
        />

        <View className="px-10">
          <Text className="text-center font-rubik text-base uppercase text-black-200">
            Welcome to ReState
          </Text>
          <Text className="mt-2 text-center font-rubik-bold text-2xl text-black-300">
            Let's Get You Closer to{"\n"}
            <Text className="text-primary-300">Your Ideal Home</Text>
          </Text>
          <Text className="mt-12 text-center font-rubik text-lg text-black-200">
            Login to ReState with Google
          </Text>

          <TouchableOpacity
            className="mt-5 w-full rounded-full bg-white py-4 shadow-md shadow-zinc-300"
            onPress={handleLogin}
          >
            <View className="flex flex-row items-center justify-center">
              <Image
                resizeMode="contain"
                source={icons.google}
                className="h-5 w-5"
              />
              <Text className="ml-2 font-rubik-medium text-lg text-black-300">
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
