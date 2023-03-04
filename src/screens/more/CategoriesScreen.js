import React from "react";
import { View } from "react-native";

import Screen from "../../components/Screen";
import { Text } from "react-native-paper";


export default function CategoriesScreen({ navigation }) {

    return (
        <Screen navigation={navigation} title="Categories">
            <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
                <Text>Categories screen</Text>
            </View>
        </Screen>
    );

}
