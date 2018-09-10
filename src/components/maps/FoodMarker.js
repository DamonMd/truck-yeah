
import React from   "react";
import { Marker } from "react-google-maps";
import TruckIcon from './food-truck.png';
import TruckSVG from './food-truck.svg';

const FoodMarker = (props) => {
    const {location} = props;
    // console.log(location)
    return (
        <Marker position={location} icon={TruckIcon}>

        </Marker>
    )
}

export default FoodMarker;