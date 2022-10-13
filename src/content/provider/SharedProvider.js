import { useReducer } from "react";
import SharedReducer from "../../reducers/SharedReducer";
import SharedContext from "../SharedContext";
import services from '../../data/services'
import reviews from '../../data/reviews';
const SharedProvider = (props) => {
    const [sharedData, dispath] = useReducer(SharedReducer, {
        servicesData: services,
        reviewsData: reviews
    })
    console.log(sharedData.reviewsData)
    return (
        <SharedContext.Provider value={{sharedData, dispath}}>
            {props.children}
        </SharedContext.Provider>
    )
}

export default SharedProvider