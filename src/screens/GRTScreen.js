import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

import Screen from "../components/Screen";
import { titles } from "./details/texts";


function GRTScreen({ navigation }) {

    return (
        <Screen navigation={navigation} title={titles.GRT}>
            <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
                <Text>GRT screen</Text>
            </View>
        </Screen>
    );
}


export default GRTScreen;
