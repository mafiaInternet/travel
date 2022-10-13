const NavReducer = (state, action) => {
    if(action.type === 'open'){
        return !state;
    }
    return state;
}

export default NavReducer;