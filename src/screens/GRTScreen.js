import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

import Screen from "../components/Screen";
import { titleMap } from "./details/detailMaps";


export default function GRTScreen({ navigation }) {

    return (
        <Screen navigation={navigation} title={titleMap.GRT}>
            <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
                <Text>GRT screen</Text>
            </View>
        </Screen>
    );

}
