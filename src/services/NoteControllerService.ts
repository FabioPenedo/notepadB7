import { Notepad } from '../models/Notepad';

export const createNote = async (foldername: string, title: string, text: string, notecolor: string) => {
    return await Notepad.create({
        foldername,
        title,
        text,
        notecolor
    });
};

export const thisNote = async (id: number) => {
    return await Notepad.findByPk(id);   
};

export const editNote = async (id: number, foldername: string, title: string, text: string, notecolor: string) => {
    const results = await Notepad.findAll({where: { id }}) 
    
    if(results.length > 0) {
        let edit = results[0]
        edit.foldername = foldername
        edit.title = title
        edit.text = text
        edit.notecolor = notecolor
        return await edit.save()
    }
};

export const deleteNote = async (id: number) => {
    return await Notepad.destroy({where: { id }});   
};

export const all = async () => {
    return await Notepad.findAll();
};
