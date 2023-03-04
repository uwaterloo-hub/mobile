import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

import Screen from "../components/Screen";


export default function ClassesScreen({ navigation }) {

    return (
        <Screen navigation={navigation} title="Class schedule">
            <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
                <Text>Classes screen</Text>
            </View>
        </Screen>
    );


}
