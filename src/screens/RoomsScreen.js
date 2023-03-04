import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

import Screen from "../components/Screen";
import { titleMap } from "./details/detailMaps";


export default function RoomsScreen({ navigation }) {

    return (
        <Screen navigation={navigation} title={titleMap.Rooms}>
            <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
                <Text>Rooms screen</Text>
            </View>
        </Screen>
    );

}
