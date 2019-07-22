import {makeAsyncReducer, makeAsyncActionCreator, composeReducers} from 'redux-toolbelt';
import {makeAsyncSaga} from 'redux-toolbelt-saga';
import {FetchNotes, CreateNote} from './service'

//Actions
export const actions = {
    fetchAllNotes : makeAsyncActionCreator('FETCH_NOTES'),
    createNoteAction : makeAsyncActionCreator('CREATE_NOTE')
}

//reducer
export const reducer =  composeReducers({
    fetchAllNotesReducer : makeAsyncReducer(actions.fetchAllNotes),
    createNoteReducer : makeAsyncReducer(actions.createNoteAction)
})

//sagas

const fetchNotesSagas = makeAsyncSaga(actions.fetchAllNotes,FetchNotes,{
    debug : true
})

const createNoteSagas = makeAsyncSaga(actions.createNoteAction,CreateNote,{
    debug : true
})

export const sagas = [
    fetchNotesSagas(),
    createNoteSagas()
]