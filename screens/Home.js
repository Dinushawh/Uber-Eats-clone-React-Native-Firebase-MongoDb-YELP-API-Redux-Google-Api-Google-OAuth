import { View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import HeaderTabs from "../components/HeaderTabs";
import GoogleSearchBar from "../components/GoogleSearchBar";
import Categories from "../components/Categories";
import Resturants from "../components/Resturants";

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
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <Resturants />
      </ScrollView>
    </SafeAreaView>
  );
}
