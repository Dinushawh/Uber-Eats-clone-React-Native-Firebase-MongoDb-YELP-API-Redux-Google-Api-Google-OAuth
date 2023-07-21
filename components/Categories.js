import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

const items = [
  {
    image: require("../assets/icons/delivery.png"),
    text: "Pick-up",
  },
  {
    image: require("../assets/icons/bread.png"),
    text: "Bakery Items",
  },
  {
    image: require("../assets/icons/handshake.png"),
    text: "Deals",
  },
  {
    image: require("../assets/icons/coffee-cup.png"),
    text: "Coffee",
  },
  {
    image: require("../assets/icons/burger.png"),
    text: "Fast Food",
  },
];
export default function Categories() {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: "white",
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View style={{ alignItems: "center", marginRight: 30 }} key={index}>
            <View
              style={{
                width: 100,
                height: 70,
                backgroundColor: "#eee",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
              }}
            >
              <Image
                source={item.image}
                style={{ width: 50, height: 50, resizeMode: "contain" }}
              />
            </View>

            <Text style={{ fontSize: 13, marginTop: 10 }}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
