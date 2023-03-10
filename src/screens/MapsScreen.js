import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

import Screen from "../components/Screen";
import { titles } from "./details/texts";


function MapsScreen({ navigation }) {

    return (
        <Screen navigation={navigation} title={titles.Maps}>
            <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
                <Text>Maps screen</Text>
            </View>
        </Screen>
    );
}


export default MapsScreen;
