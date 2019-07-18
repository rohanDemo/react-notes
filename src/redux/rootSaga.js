import {all} from 'redux-saga/effects';
import {fetchAllsagas} from './Notes'

export default function* saga(){
    yield all({
        ...fetchAllsagas,
    })
}