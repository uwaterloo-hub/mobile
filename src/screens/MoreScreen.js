import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { Text } from "react-native-paper";


export default function MoreScreen({ navigation }) {

    return (

        <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
            <Text>More screen</Text>
            <Button mode="contained" onPress={() => navigation.navigate("Settings")} >Settings</Button>
        </View>

    );

}
