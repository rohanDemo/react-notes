import APIService from '../../services/apiServices';

export const FetchNotes = async(NOTES_CRUD)=> {
    const res = await APIService.get(NOTES_CRUD)
    return res.data;
}

export const CreateNote = async(NOTES_CRUD, params)=> {
    const res = await APIService.post(NOTES_CRUD, params)
    return res.data;
}