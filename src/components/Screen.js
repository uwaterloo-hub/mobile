import React from "react";
import { StyleSheet, View } from "react-native";
import { Appbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Screen({ actions, navigation, style, title, children }) {

    style = style ? { flex: 1, ...style } : { flex: 1 }

    if (title) {

        const actionsComponent = actions &&
            actions.map((icon, onPress) => <Appbar.Action icon={icon} onPress={onPress} key={icon} />);

        return (
            <View style={styles.container}>
                <Appbar.Header mode="small">
                    {navigation && <Appbar.BackAction onPress={navigation.goBack} />}
                    <Appbar.Content title={title} />
                    {actionsComponent}
                </Appbar.Header>
                <View style={style}>
                    {children}
                </View>
            </View>
        );

    } else {

        return (
            <SafeAreaView style={styles.container}>
                {children}
            </SafeAreaView>
        );

    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
