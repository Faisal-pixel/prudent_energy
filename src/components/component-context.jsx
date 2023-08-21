import { createContext, useReducer } from "react";

export const ComponentContext = createContext({
    createNewBidderModalIsOpen: false,
    setCreateNewBidderModalIsOpen: null
})

const COMPONENT_CONTEXT_INITIAL_STATE = {
    createNewBidderModalIsOpen: false,
}

const COMPONENT_ACTION_TYPES = {
    SET_CREATE_NEW_BIDDER_MODAL_IS_OPEN: "SET_CREATE_NEW_BIDDER_MODAL_IS_OPEN"
}

const componentReducer = (state, action) => {
    const {type} = action;
    switch (type) {
        case COMPONENT_ACTION_TYPES.SET_CREATE_NEW_BIDDER_MODAL_IS_OPEN:
            return {
                ...state,
                createNewBidderModalIsOpen: !state.createNewBidderModalIsOpen
            }
        default:
            throw new Error(`Unhandle type ${type} in userReducer`)
    }
    
}

export const ComponentContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(componentReducer, COMPONENT_CONTEXT_INITIAL_STATE)
    const {createNewBidderModalIsOpen} = state;
    const setCreateNewBidderModalIsOpen = () => {
        dispatch({type: COMPONENT_ACTION_TYPES.SET_CREATE_NEW_BIDDER_MODAL_IS_OPEN})
    }
    const value = {createNewBidderModalIsOpen, setCreateNewBidderModalIsOpen}
    return <ComponentContext.Provider value={value}>{children}</ComponentContext.Provider>
}