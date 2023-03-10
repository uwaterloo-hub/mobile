import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

import Screen from "../components/Screen";
import { titles } from "./details/texts";


function RoomsScreen({ navigation }) {

    return (
        <Screen navigation={navigation} title={titles.Rooms}>
            <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
                <Text>Rooms screen</Text>
            </View>
        </Screen>
    );
}


export default RoomsScreen;
