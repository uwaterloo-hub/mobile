import React, { useContext } from "react";
import { Image, StyleSheet, View } from "react-native";

import Divider from "../components/Divider";
import Screen from "../components/Screen";
import ListMenuButton from "../components/ListMenu/ListMenuButton";
import { Settings } from "../settings";


export default function MoreScreen() {

    const settings = useContext(Settings);

    return (
        <Screen>
            <View style={styles.logoContainer}>
                <Image source={require("../../assets/logos/base-white.png")} style={styles.logo} />
            </View>

            <Divider />

            <ListMenuButton title="GRT schedule" icon="bus" />
            <ListMenuButton title="Open recreation schedule" icon="run" />

            <Divider />

            <ListMenuButton title="Categories" icon="label-outline" />
            <ListMenuButton title="Settings" icon="cog-outline"
                            onPress={() => settings.navigator.navigate("Settings")} />
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

