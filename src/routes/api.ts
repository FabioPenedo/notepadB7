import { Router } from 'express';

import * as NoteController from '../controllers/noteController';


const router = Router();

router.get('/note/all', NoteController.all)
router.get('/note/:id', NoteController.noteX)
router.post('/note/create', NoteController.note)
router.put('/note/edit/:id', NoteController.edit)
router.delete('/note/delete/:id', NoteController.deleteN)

export default router;