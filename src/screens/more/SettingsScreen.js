import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

import Screen from "../../components/Screen";
import { titleMap } from "../details/detailMaps";


export default function SettingsScreen({ navigation }) {

    return (
        <Screen navigation={navigation} title={titleMap.Settings}>
            <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
                <Text>Settings screen</Text>
            </View>
        </Screen>
    );

}
