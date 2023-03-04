import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

import Screen from "../components/Screen";


export default function RoomsScreen({ navigation }) {

    return (
        <Screen navigation={navigation} title="Open classrooms">
            <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
                <Text>Rooms screen</Text>
            </View>
        </Screen>
    );

}
