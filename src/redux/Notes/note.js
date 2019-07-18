import {makeAsyncReducer, makeAsyncActionCreator, composeReducers} from 'redux-toolbelt';
import {makeAsyncSaga} from 'redux-toolbelt-saga';
import {FetchNotes} from './service'

//Actions
export const actions = {
    fetchAllNotes : makeAsyncActionCreator('FETCH_NOTES')
}

//reducer
export const reducer =  composeReducers({
    fetchAllNotesReducer : makeAsyncReducer(actions.fetchAllNotes)
})

//sagas

const fetchNotesSagas = makeAsyncSaga(actions.fetchAllNotes,FetchNotes,{
    debug : true
})

export const sagas = [
    fetchNotesSagas()
]