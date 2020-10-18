import React, {useReducer, createContext, useContext} from 'react'

const AppContext = createContext()


export const useAppState = () => useContext(AppContext)


const appStateReducer = (state, action) => {
    switch(action.type) {
        case 'correct answer':
            return {
                ...state,
                myCorrectQ: state.myCorrectQ + 1
            }
        case 'restart game':
            return {
                ...state,
                myCorrectQ: 0
            }
        default:
            return state
    }
}

const initialState = {
    totalQ: 3,
    myCorrectQ: 0
}

export const AppStateProvider = ({children}) => {
    // [state, dispatch]
    let billie = useReducer(appStateReducer, initialState)

    return (
        <AppContext.Provider value={billie}>
            {children}
        </AppContext.Provider>
    )
}

