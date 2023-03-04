import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

import Screen from "../components/Screen";


export default function WeatherScreen({ navigation }) {

    return (
        <Screen navigation={navigation} title="Weather (Waterloo)">
            <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
                <Text>Weather screen</Text>
            </View>
        </Screen>
    );

}
