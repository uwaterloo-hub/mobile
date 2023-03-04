import GRTScreen from "./screens/GRTScreen";
import MapsScreen from "./screens/MapsScreen";
import RecreationScreen from "./screens/RecreationScreen";
import RoomsScreen from "./screens/RoomsScreen";
import ClassesScreen from "./screens/ClassesScreen";
import WeatherScreen from "./screens/WeatherScreen";


// No MoreScreen because of require loop
const componentMap = {
    Classes: ClassesScreen,
    GRT: GRTScreen,
    Maps: MapsScreen,
    Recreation: RecreationScreen,
    Rooms: RoomsScreen,
    Weather: WeatherScreen
};
const iconMap = {
    Classes: { focused: "calendar", unfocused: "calendar-outline" },
    GRT: { focused: "bus", unfocused: "bus" },
    Maps: { focused: "compass", unfocused: "compass-outline" },
    More: { focused: "dots-horizontal", unfocused: "dots-horizontal" },
    Recreation: { focused: "run", unfocused: "run" },
    Rooms: { focused: "map-marker", unfocused: "map-marker-outline" },
    Weather: { focused: "cloud", unfocused: "cloud-outline" }
};
const titleMap = {
    Classes: "Class schedule",
    GRT: "GRT schedule",
    Maps: "Maps",
    More: "More",
    Recreation: "Open recreation schedule",
    Rooms: "Open classrooms",
    Settings: "Settings",
    Weather: "Weather (Waterloo)"
};


export { componentMap, iconMap, titleMap };
