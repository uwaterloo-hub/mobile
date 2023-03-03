import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Text, TouchableRipple } from "react-native-paper";
import { Settings } from "../../settings";


export default function ListMenuButton({ title, subtitle, icon, onPress }) {

    const settings = useContext(Settings);
    const subtitleComponent = subtitle &&
        <Text style={[styles.subtitle, { color: settings.theme.onSurfaceVariant }]}>{subtitle}</Text>;

    return (
        <TouchableRipple onPress={onPress} rippleColor="#ffffff40">
            <View style={styles.item}>
                <Avatar.Icon size={40} icon={icon} color={settings.theme.primary} style={styles.icon} />
                <View style={[styles.textContainer, { marginVertical: subtitle ? 8 : 0 }]}>
                    <Text style={styles.title}>{title}</Text>
                    {subtitleComponent}
                </View>
            </View>
        </TouchableRipple>
    );

}


const styles = StyleSheet.create({

    icon: {
        backgroundColor: "transparent",
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 8,
        marginVertical: 8
    },
    subtitle: {
        fontSize: 12
    },
    textContainer: {
        justifyContent: "center",
        marginLeft: 16,
        marginVertical: 0
    },
    title: {
        fontSize: 16
    }

})
