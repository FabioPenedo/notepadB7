import { Request, Response } from 'express';
import * as NoteService from '../services/NoteControllerService';

export const note = async (req: Request, res: Response) => {
    if(req.body.foldername && req.body.title && req.body.text && req.body.notecolor) {
        let { foldername, title, text, notecolor } = req.body;
        const newNote = await NoteService.createNote(foldername, title, text, notecolor)

        res.status(201);
        res.json({ id: newNote.id });
        return;
    }

    res.json({ error: 'Nome da pasta, título ou texto não preenchidos!' });
};

export const noteX = async (req: Request, res: Response) => {
    const id = parseInt( req.params.id )
    let note = await NoteService.thisNote(id)
    res.json({ note });
};

export const edit = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id) 
    let thisNote = await NoteService.thisNote(id)

    if(thisNote) {
        if(req.body.foldername && req.body.title && req.body.text && req.body.notecolor) {
            let { foldername, title, text, notecolor } = req.body;
            const note = await NoteService.editNote(id, foldername, title, text, notecolor)
            res.json({ note })
            return;
        } else {
            res.json({ error: 'Nome da pasta, título ou texto não preenchidos!' });
            return;
        }
    }

    res.json({ note: null })
};

export const deleteN = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    let note = await NoteService.deleteNote(id)
    if(note) {
        res.json({ note: true })
        return;
    }
    res.json({ note: null })
};

export const all = async (req: Request, res: Response) => {
    let note = await NoteService.all()
    res.json({ note });
};


