import { View, Text } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Ionicons, AntDesign } from "react-native-vector-icons/";

export default function GoogleSearchBar() {
  return (
    <View
      style={{
        marginTop: 15,
        flexDirection: "row",
      }}
    >
      <GooglePlacesAutocomplete
        placeholder="Search your city"
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            alignItems: "center",
            borderRadius: 50,
            flexDirection: "row",

            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 20 }}>
            <Ionicons name="location-sharp" size={24} color="black" />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              marginRight: 10,
              flexDirection: "row",
              backgroundColor: "white",
              padding: 9,
              borderRadius: 30,
              alignItems: "center",
            }}
          >
            <AntDesign
              name="clockcircle"
              size={15}
              color="black"
              style={{ marginRight: 8 }}
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
}
