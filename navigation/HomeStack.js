import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import Home from "../screens/Home";
import Posts from "../screens/Posts";
import PostDetails from "../screens/PostDetails";

const { Navigator, Screen } = createStackNavigator();

export default function HomeStack() {
  const navigation = useNavigation();

  return (
    <Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "brown" },
        headerTitle: () => (
          <View style={{ flexDirection: "row" }}>
            <Text style={{  color: "white",  fontWeight: "bold", fontSize: 35,  marginLeft: 100 }} >
                 BLOGPOST
            </Text>
          </View>
        ),
      }}
    >
      <Screen name="HOME" component={Home} options={{ headerLeft: () => null,}} />
      <Screen name="Posts" component={Posts} options={{ headerLeft: () => null, }} />
      <Screen name="PostDetails" component={PostDetails}  options={{
          headerTitle: () => (
            <View>
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 35, marginLeft: 20 }}
              >
                Post Info
              </Text>
            </View>
          ),
          headerLeft: () => (
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                <AntDesign name="left" size={20} />
              </Text>
              <Text
                onPress={() => navigation.navigate("Posts")}
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 20,
                  marginRight: 10,
                }}
              >
                Back
              </Text>
            </View>
          ),
        }}
      />
    </Navigator>
  );
}
