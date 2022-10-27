const initState = {
    isLoading: false
}
type LoadingType ={

    type: 'loading true'
    isLoading: boolean
}
export type StateType = {
    isLoading: boolean
}
export const loadingReducer = (state :StateType= initState, action: LoadingType): {isLoading: boolean} => { // fix any
    debugger
    switch (action.type) {

        case 'loading true': {
            debugger
            return {...state, isLoading: action.isLoading}
        }
        default: return state
    }
}

export const loadingAC = (isLoading: boolean):LoadingType  => {
    return {type: "loading true", isLoading: isLoading}
}