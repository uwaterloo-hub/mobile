import React from "react";
import { Pressable } from "react-native";
import { BottomNavigation } from "react-native-paper";

import MapsScreen from "../screens/MapsScreen";
import MoreScreen from "../screens/MoreScreen";
import RoomsScreen from "../screens/RoomsScreen";
import ScheduleScreen from "../screens/ScheduleScreen";
import WeatherScreen from "../screens/WeatherScreen";


export default function HomeNavigator({ navigation }) {

    const [index, setIndex] = React.useState(2);
    const [routes] = React.useState([
        { key: "weather", title: "Weather", focusedIcon: "cloud", unfocusedIcon: "cloud-outline"},
        { key: "maps", title: "Maps", focusedIcon: "compass", unfocusedIcon: "compass-outline" },
        { key: "schedule", title: "Schedule", focusedIcon: "calendar" },
        { key: "rooms", title: "Rooms", focusedIcon: "map-marker", unfocusedIcon: "map-marker-outline" },
        { key: "more", title: "More", focusedIcon: "dots-horizontal", unfocusedIcon: "dots-horizontal" }
    ]);

    const renderScene = BottomNavigation.SceneMap({
        weather: WeatherScreen,
        maps: MapsScreen,
        schedule: ScheduleScreen,
        rooms: RoomsScreen,
        more: () => <MoreScreen navigation={navigation}/>
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
            renderTouchable={(touchableProps) => <Pressable {...touchableProps}/>}
            sceneAnimationEnabled={true}
        />
    );

}
