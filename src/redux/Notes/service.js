import APIService from '../../services/apiServices';

// const tempObj = {
//     title: 'temp data',
//     content: 'kai pn tu '
//   };
export const FetchNotes = async(NOTES_CRUD)=> {
    const res = await APIService.get(NOTES_CRUD)
    return res.data;
}

export const CreateNote = async(params)=> {
    let formData = {
        title: params.title ,
        content: params.content,
    }
    const res = await APIService.post(params.url, formData)
    return res.status;
}

export const DeleteNote = async(NOTES_CRUD)=> {
    const res = await APIService.delete(NOTES_CRUD)
    return res.data;
}

export const InitialState = () =>{

    return null
}