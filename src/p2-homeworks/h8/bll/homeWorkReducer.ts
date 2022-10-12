import {UserType} from "../HW8";
type SortType ={
    type: 'sort'
    payload: 'up'| 'down'
}
type CheckType = {
    type: 'check'
    payload: 18
}
type ActionType = SortType | CheckType

export const homeWorkReducer = (state: UserType, action: ActionType): UserType => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
           if (action.payload === 'up') {
               return [...state].sort((a,b)=>a.name > b.name ? 1: -1)
           } else {
               return [...state].sort((a,b)=>b.name > a.name ? 1: -1)
           }
        }
        case 'check': {
            // need to fix
            return state.filter(el => el.age>= 18)
        }
        default: return state
    }
}