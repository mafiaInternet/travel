import { useReducer } from "react";
import DestinationsReducer from "../../reducers/DetinationsReducer";
import DestinationsContext from "../DestinationsContext";
import {destinations} from "../../data/destinations";
import Cities from "../../data/cities"
const DetinationsProvider = (props) =>{
    const [destinationsData, dispath] = useReducer(DestinationsReducer, {
        destinations,
        details: {},
        cities: Cities,
        fillteredCities: [],
    });

    return (
        <DestinationsContext.Provider value={{destinationsData, dispath}}>
            {props.children}
        </DestinationsContext.Provider>
    )
}

export default DetinationsProvider