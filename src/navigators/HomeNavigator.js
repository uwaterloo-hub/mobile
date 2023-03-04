import React, { useContext, useEffect } from "react";
import { Pressable } from "react-native";
import { BottomNavigation } from "react-native-paper";

import MoreScreen from "../screens/MoreScreen";
import { Config } from "../config";
import { componentMap, iconMap } from "../screenMaps";


export default function HomeNavigator({ navigation }) {

    const config = useContext(Config);
    useEffect(() => config.setNavigation(navigation), []);

    const [index, setIndex] = React.useState(2);
    const [routes] = React.useState(config.pageOrder.slice(0, 5).map(key => {
        return { key: key, title: key, focusedIcon: iconMap[key].focused, unfocusedIcon: iconMap[key].unfocused };
    }));

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={BottomNavigation.SceneMap({ More: MoreScreen, ...componentMap })}
            renderTouchable={(touchableProps) => <Pressable {...touchableProps}/>}
            sceneAnimationEnabled={true}
        />
    );

}
