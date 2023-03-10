import ClassesScreen from "../ClassesScreen";
import GRTScreen from "../GRTScreen";
import MapsScreen from "../MapsScreen";
import RecreationScreen from "../RecreationScreen";
import RoomsScreen from "../RoomsScreen";
import WeatherScreen from "../WeatherScreen";


// No MoreScreen because of require loop
const components = {
    Classes: ClassesScreen,
    GRT: GRTScreen,
    Maps: MapsScreen,
    Recreation: RecreationScreen,
    Rooms: RoomsScreen,
    Weather: WeatherScreen
};


export { components };
