import { call, put, takeEvery } from 'redux-saga/effects';
import { baseAction } from '../actions/baseAction';
import { apiService } from '../../services';
import { baseModel, dataModel } from '../../model';

export function* getBaseList(){
    try{
        const list: baseModel= yield call(apiService.getList);
        yield put(baseAction.GET_LIST.success(list));
    }
    catch(e){
        yield put (baseAction.GET_LIST.failure(e));
    }
}


export function* baseSaga() {
    yield takeEvery(baseAction.GET_LIST.request,getBaseList);
}