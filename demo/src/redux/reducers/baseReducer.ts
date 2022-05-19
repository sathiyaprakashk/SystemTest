import { getType } from "typesafe-actions";
import { baseModel } from "../../model";
import { baseAction,baseActionType } from "../actions/baseAction";

export interface baseState{
    list: baseModel[];
}

const intialState: baseState = {
    list : [],
}

export const baseReducer = (state =intialState,action: baseActionType) =>{
    switch(action.type){
        case getType(baseAction.GET_LIST.request):
            return {
                ...state,
            }
        case getType(baseAction.GET_LIST.success):
            return {
                ...state,
                list: action.payload,
            }
        case getType(baseAction.GET_LIST.failure):
            return {
                ...state,
                error: action.payload.error,
            }
        default:
            return state;

    }
}