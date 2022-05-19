import { ActionType, createAsyncAction } from "typesafe-actions";
import * as actionTypes from '../actionTypes/baseActionTypes'
import { baseModel } from "../../model";

export const baseAction ={
    GET_LIST: createAsyncAction(
        actionTypes.GET_LIST_REQUEST,
        actionTypes.GET_LIST_SUCCESS,
        actionTypes.GET_LIST_FAILURE
    )<any,baseModel,any>(),
};

export type baseActionType = ActionType<typeof baseAction>;