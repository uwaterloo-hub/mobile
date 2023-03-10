import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Surface, Text, TouchableRipple } from "react-native-paper";

import Screen from "../../components/Screen";
import { titles } from "../details/texts";


function IconButton({ icon, onPress }) {

    return (
        <View style={styles.buttonParent}>
            <TouchableRipple onPress={onPress} rippleColor="#ffffff40">
                <Avatar.Icon icon={icon} size={40} style={styles.icon} />
            </TouchableRipple>
        </View>
    );

}

function CategoriesScreen({ navigation }) {

    return (
        <Screen navigation={navigation} title={titles.Categories} style={{ alignItems: "center" }}>
            <Surface elevation={2} style={styles.container}>
                <Avatar.Icon icon="cloud-outline" size={40} style={styles.icon} />
                <Text style={styles.label}>Weather</Text>
                <View style={{ flex: 1 }} />
                <IconButton icon="menu-up" onPress={() => console.log("up")} />
                <IconButton icon="menu-down" onPress={() => console.log("down")} />
            </Surface>
        </Screen>
    );
}

const styles = StyleSheet.create({

    buttonParent: {
        alignItems: "center",
        backgroundColor: "transparent",
        borderRadius: 20,
        justifyContent: "center",
        marginRight: 8,
        overflow: "hidden"
    },
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

});


export default CategoriesScreen;
