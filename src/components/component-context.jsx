import { createContext, useReducer } from "react";

export const ComponentContext = createContext({
    createNewBidderModalIsOpen: false,
    setCreateNewBidderModalIsOpen: null,
    generalTemplateToggleIsOpen: {},
    setBidderGeneralTemplateToggleIsOpen: null,
    setOtherGeneralTemplateToggleIsOpen: null,
    bidderRFQResponseTemplateToggleIsOpen: false,
    setBidderRFQResponseTemplateToggleIsOpen: null,
    detailsTemplateToggleIsOpen: false,
    setDetailsTemplateToggleIsOpen: null,
    otherGeneralTemplateRequisitionTypeSelectValue: null,
    setOtherGeneralTemplateRequisitionTypeSelectValue: null,
})

const COMPONENT_CONTEXT_INITIAL_STATE = {
    createNewBidderModalIsOpen: false,
    generalTemplateToggleIsOpen: {
        bidder: false,
        others: false
    },
    bidderRFQResponseTemplateToggleIsOpen: false,
    detailsTemplateToggleIsOpen: false,
    otherGeneralTemplateRequisitionTypeSelectValue: "Services",
}

const COMPONENT_ACTION_TYPES = {
    SET_CREATE_NEW_BIDDER_MODAL_IS_OPEN: "SET_CREATE_NEW_BIDDER_MODAL_IS_OPEN",
    SET_BIDDER_GENERAL_TEMPLATE_TOGGLE_IS_OPEN: "SET_BIDDER_GENERAL_TEMPLATE_TOGGLE_IS_OPEN",
    SET_OTHER_GENERAL_TEMPLATE_TOGGLE_IS_OPEN: "SET_OTHER_GENERAL_TEMPLATE_TOGGLE_IS_OPEN",
    SET_BIDDER_RFQ_RESPONSE_TEMPLATE_TOGGLE_IS_OPEN: "SET_BIDDER_RFQ_RESPONSE_TEMPLATE_TOGGLE_IS_OPEN",
    SET_DETAILS_TEMPLATE_TOGGLE_IS_OPEN: "SET_DETAILS_TEMPLATE_TOGGLE_IS_OPEN",
    SET_OTHER_GENERAL_TEMPLATE_REQUISITION_TYPE_SELECT_VALUE: "SET_OTHER_GENERAL_TEMPLATE_REQUISITION_TYPE_SELECT_VALUE",
}

const componentReducer = (state, action) => {
    const {type, payload} = action;
    switch (type) {
        case COMPONENT_ACTION_TYPES.SET_CREATE_NEW_BIDDER_MODAL_IS_OPEN:
            return {
                ...state,
                createNewBidderModalIsOpen: !state.createNewBidderModalIsOpen
            }
        case COMPONENT_ACTION_TYPES.SET_BIDDER_GENERAL_TEMPLATE_TOGGLE_IS_OPEN:
            return {
                ...state,
                generalTemplateToggleIsOpen: {...state.generalTemplateToggleIsOpen, bidder: !state.generalTemplateToggleIsOpen.bidder}
            }
        case COMPONENT_ACTION_TYPES.SET_OTHER_GENERAL_TEMPLATE_TOGGLE_IS_OPEN:
            return {
                ...state,
                generalTemplateToggleIsOpen: {...state.generalTemplateToggleIsOpen, other: !state.generalTemplateToggleIsOpen.other}
            }
        case COMPONENT_ACTION_TYPES.SET_BIDDER_RFQ_RESPONSE_TEMPLATE_TOGGLE_IS_OPEN:
            return {
                ...state,
                bidderRFQResponseTemplateToggleIsOpen: !state.bidderRFQResponseTemplateToggleIsOpen
            }
        case COMPONENT_ACTION_TYPES.SET_DETAILS_TEMPLATE_TOGGLE_IS_OPEN:
            return {
                ...state,
                detailsTemplateToggleIsOpen: !state.detailsTemplateToggleIsOpen
            }
        case COMPONENT_ACTION_TYPES.SET_OTHER_GENERAL_TEMPLATE_REQUISITION_TYPE_SELECT_VALUE:
            return {
                ...state,
                otherGeneralTemplateRequisitionTypeSelectValue: payload
            }
        default:
            throw new Error(`Unhandle type ${type} in userReducer`)
    }
    
}

export const ComponentContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(componentReducer, COMPONENT_CONTEXT_INITIAL_STATE)
    const {createNewBidderModalIsOpen, generalTemplateToggleIsOpen, bidderRFQResponseTemplateToggleIsOpen, detailsTemplateToggleIsOpen, otherGeneralTemplateRequisitionTypeSelectValue} = state;
    const setCreateNewBidderModalIsOpen = () => {
        dispatch({type: COMPONENT_ACTION_TYPES.SET_CREATE_NEW_BIDDER_MODAL_IS_OPEN})
    }
    const setBidderGeneralTemplateToggleIsOpen = () => {
        dispatch({type: COMPONENT_ACTION_TYPES.SET_BIDDER_GENERAL_TEMPLATE_TOGGLE_IS_OPEN})
    }
    const setOtherGeneralTemplateToggleIsOpen = () => {
        dispatch({type: COMPONENT_ACTION_TYPES.SET_OTHER_GENERAL_TEMPLATE_TOGGLE_IS_OPEN})
    }
    const setBidderRFQResponseTemplateToggleIsOpen = () => {
        dispatch({type: COMPONENT_ACTION_TYPES.SET_BIDDER_RFQ_RESPONSE_TEMPLATE_TOGGLE_IS_OPEN})
    }
    const setDetailsTemplateToggleIsOpen = () => {
        dispatch({type: COMPONENT_ACTION_TYPES.SET_DETAILS_TEMPLATE_TOGGLE_IS_OPEN})
    }
    const setOtherGeneralTemplateRequisitionTypeSelectValue = (value) => {
        dispatch({type: COMPONENT_ACTION_TYPES.SET_OTHER_GENERAL_TEMPLATE_REQUISITION_TYPE_SELECT_VALUE, payload: value})
    }
    const value = {createNewBidderModalIsOpen, setCreateNewBidderModalIsOpen, generalTemplateToggleIsOpen, setBidderGeneralTemplateToggleIsOpen, setOtherGeneralTemplateToggleIsOpen, bidderRFQResponseTemplateToggleIsOpen, setBidderRFQResponseTemplateToggleIsOpen, detailsTemplateToggleIsOpen, setDetailsTemplateToggleIsOpen, otherGeneralTemplateRequisitionTypeSelectValue, setOtherGeneralTemplateRequisitionTypeSelectValue}
    return <ComponentContext.Provider value={value}>{children}</ComponentContext.Provider>
}