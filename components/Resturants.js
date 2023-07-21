import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "react-native-vector-icons";

const items = [
  {
    image: require("../assets/images/2.jpg"),
    text: "Burger",
  },
  {
    image: require("../assets/images/1.jpg"),
    text: "Pizza",
  },
  {
    image: require("../assets/images/1.jpg"),
    text: "Pizza1",
  },
];

export default function Resturants() {
  return (
    <>
      {items.map((item, index) => (
        <View
          style={{
            backgroundColor: "white",
            padding: 15,
            marginTop: 10,
          }}
        >
          <ResturantImage index={item} />
          <ResturantInfo />
        </View>
      ))}
    </>
  );
}

const ResturantImage = (props) => (
  <>
    <Image
      source={props.index.image}
      style={{ width: "100%", height: 175, borderRadius: 10 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 30, top: 25 }}>
      <MaterialCommunityIcons name="heart-outline" size={24} color="white" />
    </TouchableOpacity>
  </>
);

const ResturantInfo = () => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    <View>
      <Text
        style={{
          fontSize: 15,
          fontWeight: "bold",
        }}
      >
        Dindigul Thalappakatti Resturant - Kandy
      </Text>
      <Text
        style={{
          fontSize: 13,
          color: "gray",
        }}
      >
        30-45min
      </Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        borderRadius: 40,
        height: 40,
        width: 40,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>4.5</Text>
    </View>
  </View>
);
