import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

import Screen from "../components/Screen";
import { titleMap } from "../screenMaps";


export default function RecreationScreen({ navigation }) {

    return (
        <Screen navigation={navigation} title={titleMap.Recreation}>
            <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
                <Text>Recreation screen</Text>
            </View>
        </Screen>
    );

}
