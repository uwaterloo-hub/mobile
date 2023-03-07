import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Surface, Text } from "react-native-paper";

import Screen from "../../components/Screen";
import { titleMap } from "../details/detailMaps";


export default function CategoriesScreen({ navigation }) {

    return (
        <Screen navigation={navigation} title={titleMap.Categories} style={{ alignItems: "center" }}>
            <Surface elevation={2} style={styles.container}>
                <Avatar.Icon icon="cloud-outline" size={40} style={styles.icon} />
                <Text style={styles.label}>Weather</Text>
                <View style={{ flex: 1 }} />
                <Avatar.Icon icon="menu-up" size={40} style={styles.icon} />
                <Avatar.Icon icon="menu-down" size={40} style={styles.icon} />
            </Surface>
        </Screen>
    );

}


const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        borderRadius: 12,
        flexDirection: "row",
        padding: 10,
    },
    icon: {
        backgroundColor: "transparent"
    },
    label: {
        fontSize: 16,
        marginLeft: 10
    }
})
