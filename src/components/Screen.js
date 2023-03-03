import React from "react";
import { View } from "react-native";
import { Appbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Screen({ actions, title, children }) {

    if (title) {

        const actionsComponent = actions &&
            actions.map((icon, onPress) => <Appbar.Action icon={icon} onPress={onPress} key={icon} />);

        return (
            <View style={{ flex: 1 }}>
                <Appbar.Header mode="small">
                    <Appbar.Content title={title} />
                    {actionsComponent}
                </Appbar.Header>
                {children}
            </View>
        );

    } else {

        return (
            <SafeAreaView style={{ flex: 1 }}>
                {children}
            </SafeAreaView>
        );

    }

}


