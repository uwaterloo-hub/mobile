import React, { useContext } from "react";
import { Divider as PaperDivider } from "react-native-paper";

import { Settings } from "../settings";


export default function Divider() {

    const settings = useContext(Settings);

    return (
        <PaperDivider style={{ backgroundColor: settings.theme.outline }} />
    );

}
