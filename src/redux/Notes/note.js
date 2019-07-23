import {makeAsyncReducer, makeAsyncActionCreator, composeReducers} from 'redux-toolbelt';
import {makeAsyncSaga} from 'redux-toolbelt-saga';
import {FetchNotes, CreateNote, InitialState, DeleteNote} from './service'

//Actions
export const actions = {
    initialStateAction : makeAsyncActionCreator('INITIAL_STATE'),
    fetchAllNotes : makeAsyncActionCreator('FETCH_NOTES'),
    createNoteAction : makeAsyncActionCreator('CREATE_NOTE'),
    deleteNoteAction :  makeAsyncActionCreator('DELETE_NOTE')
}

//reducer
export const reducer =  composeReducers({
    InitialStateReducer :makeAsyncReducer(actions.initialStateAction),
    fetchAllNotesReducer : makeAsyncReducer(actions.fetchAllNotes),
    createNoteReducer : makeAsyncReducer(actions.createNoteAction),
    deleteNoteReducer : makeAsyncReducer(actions.deleteNoteAction)
})

//sagas
const initialStateSagas = makeAsyncSaga(actions.initialStateAction,InitialState,{
    debug : true
})

const fetchNotesSagas = makeAsyncSaga(actions.fetchAllNotes,FetchNotes,{
    debug : true
})

const createNoteSagas = makeAsyncSaga(actions.createNoteAction,CreateNote,{
    debug : true
})
const deleteNoteSagas = makeAsyncSaga(actions.deleteNoteAction,DeleteNote,{
    debug :true
})

export const sagas = [
    initialStateSagas(),
    fetchNotesSagas(),
    createNoteSagas(),
    deleteNoteSagas()
]