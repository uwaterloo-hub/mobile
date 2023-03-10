import React, { useContext } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Divider } from "react-native-paper";

import ListMenuButton from "../components/ListMenu/ListMenuButton";
import Screen from "../components/Screen";
import { Config } from "../config";
import { icons, titles } from "./details/texts";


function MoreScreen() {

    const config = useContext(Config);
    const otherScreens = ["Categories", "Settings"]

    return (
        <Screen noMargin={true}>
            <View style={styles.logoContainer}>
                <Image source={require("../../assets/logos/base-white.png")} style={styles.logo} />
            </View>

            <Divider bold={true} />
            {config.pageOrder.slice(5).map(key => (
                <ListMenuButton title={titles[key]} icon={icons[key].focused} key={key}
                                onPress={() => config.navigation.navigate(key)} />
            ))}

            <Divider bold={true} />
            {otherScreens.map(key => (
                <ListMenuButton title={key} icon={icons[key].unfocused} key={key}
                                onPress={() => config.navigation.navigate(key)} />
            ))}
        </Screen>
    );
}

const styles = StyleSheet.create({

    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        alignItems: "center",
        marginVertical: 50,
    }

});


export default MoreScreen;
