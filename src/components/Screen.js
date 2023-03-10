import React from "react";
import { StyleSheet, View } from "react-native";
import { Appbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";


function Screen({ actions, navigation, noMargin, style, title, children }) {

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
                <View style={[{ marginHorizontal: noMargin ? 0 : 15 }, style]}>
                    {children}
                </View>
            </View>
        );

    } else {

        return (
            <SafeAreaView style={[{ marginHorizontal: noMargin ? 0 : 15 }, styles.container]}>
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


export default Screen;
