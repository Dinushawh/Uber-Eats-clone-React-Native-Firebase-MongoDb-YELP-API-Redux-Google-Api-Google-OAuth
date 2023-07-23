import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome5 } from "react-native-vector-icons";

const items = [
  {
    name: "Home",
    icon: "home",
  },
  {
    name: "Browse",
    icon: "search",
  },
  {
    name: "Category",
    icon: "shopping-bag",
  },
  {
    name: "Orders",
    icon: "receipt",
  },
  {
    name: "Account",
    icon: "user",
  },
];

export default function BottomTabs() {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-between",
      }}
    >
      {items.map((item, index) => (
        <BottomButton item={item} index={index} />
      ))}
    </View>
  );
}

const BottomButton = (props) => (
  <>
    <TouchableOpacity
      style={{
        alignItems: "center",
      }}
    >
      <View key={props.index}>
        <FontAwesome5
          name={props.item.icon}
          size={25}
          style={{}}
        ></FontAwesome5>
        <Text>{props.item.name}</Text>
      </View>
    </TouchableOpacity>
  </>
);
