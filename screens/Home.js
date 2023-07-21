import { View, SafeAreaView, ScrollView, VirtualizedList } from "react-native";
import React from "react";
import HeaderTabs from "../components/HeaderTabs";
import GoogleSearchBar from "../components/GoogleSearchBar";
import Categories from "../components/Categories";
import Resturants from "../components/Resturants";
import BottomTabs from "../components/BottomTabs";
import { Divider } from "react-native-elements";

export default function Home() {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#eee",
        flex: 1,
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          padding: 15,
        }}
      >
        <HeaderTabs />
        <GoogleSearchBar />
        <Categories />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Resturants />
      </ScrollView>
      <Divider
        style={{
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      >
        <BottomTabs />
      </Divider>
    </SafeAreaView>
  );
}
