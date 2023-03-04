import React, { useContext } from "react";
import { Image, StyleSheet, View } from "react-native";

import Divider from "../components/Divider";
import Screen from "../components/Screen";
import ListMenuButton from "../components/ListMenu/ListMenuButton";
import { Config } from "../config";
import { iconMap, titleMap } from "../screenMaps";


export default function MoreScreen() {

    const config = useContext(Config);

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
            <ListMenuButton title="Categories" icon="label-outline" />
            <ListMenuButton title="Settings" icon="cog-outline"
                            onPress={() => config.navigation.navigate("Settings")} />
            <ListMenuButton title="About" icon="information-outline" />
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

