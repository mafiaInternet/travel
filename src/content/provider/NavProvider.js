import { useReducer } from "react";
import NavContext from "../NavContext";
import NavReducer from "../../reducers/NavReducer";

const NavProvider = (props) => {
    const [state, dispath] = useReducer(NavReducer, false);
    return (<NavContext.Provider value={{
        state,
        dispath
    }}>
        {props.children}
    </NavContext.Provider>
    )
}

export default NavProvider;
