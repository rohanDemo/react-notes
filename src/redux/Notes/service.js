import APIService from '../../utils/apiServices';
import {NOTES_CRUD} from '../../config'

export const FetchNotes = async()=> {
    const res = await APIService.get(NOTES_CRUD)
    return res.data;
}