import GRTScreen from "./screens/GRTScreen";
import MapsScreen from "./screens/MapsScreen";
import RecreationScreen from "./screens/RecreationScreen";
import RoomsScreen from "./screens/RoomsScreen";
import ScheduleScreen from "./screens/ScheduleScreen";
import WeatherScreen from "./screens/WeatherScreen";


// No MoreScreen because of require loop
const componentMap = {
    GRT: GRTScreen,
    Maps: MapsScreen,
    Recreation: RecreationScreen,
    Rooms: RoomsScreen,
    Schedule: ScheduleScreen,
    Weather: WeatherScreen
};
const iconMap = {
    GRT: { focused: "bus", unfocused: "bus" },
    Maps: { focused: "compass", unfocused: "compass-outline" },
    More: { focused: "dots-horizontal", unfocused: "dots-horizontal" },
    Recreation: { focused: "run", unfocused: "run" },
    Rooms: { focused: "map-marker", unfocused: "map-marker-outline" },
    Schedule: { focused: "calendar", unfocused: "calendar-outline" },
    Weather: { focused: "cloud", unfocused: "cloud-outline" }
};
const titleMap = {
    GRT: "GRT schedule",
    Maps: "UWaterloo map",
    More: "More",
    Recreation: "Open recreation schedule",
    Rooms: "Open classrooms",
    Schedule: "Class schedule",
    Settings: "Settings",
    Weather: "Weather (Waterloo)"
};


export { componentMap, iconMap, titleMap };
