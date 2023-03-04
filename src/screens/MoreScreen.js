import React, { useContext } from "react";
import { Image, StyleSheet, View } from "react-native";

import Divider from "../components/Divider";
import Screen from "../components/Screen";
import ListMenuButton from "../components/ListMenu/ListMenuButton";
import { Config } from "../config";
import { iconMap, titleMap } from "../screenMaps";


export default function MoreScreen() {

    const config = useContext(Config);
    const otherScreens = ["Categories", "Settings"]

    return (
        <Screen>
            <View style={styles.logoContainer}>
                <Image source={require("../../assets/logos/base-white.png")} style={styles.logo} />
            </View>

            <Divider />
            {config.pageOrder.slice(5).map(key => (
                <ListMenuButton title={titleMap[key]} icon={iconMap[key].focused} key={key}
                                onPress={() => config.navigation.navigate(key)} />
            ))}

            <Divider />
            {otherScreens.map(key => (
                <ListMenuButton title={key} icon={iconMap[key].unfocused} key={key}
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

})

