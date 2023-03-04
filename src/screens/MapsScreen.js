import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

import Screen from "../components/Screen";


export default function MapsScreen({ navigation }) {

    return (
        <Screen navigation={navigation} title="Maps">
            <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
                <Text>Maps screen</Text>
            </View>
        </Screen>
    );

}
