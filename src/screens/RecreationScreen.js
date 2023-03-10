import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

import Screen from "../components/Screen";
import { titles } from "./details/texts";


function RecreationScreen({ navigation }) {

    return (
        <Screen navigation={navigation} title={titles.Recreation}>
            <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
                <Text>Recreation screen</Text>
            </View>
        </Screen>
    );
}


export default RecreationScreen;
