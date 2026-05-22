import express from 'express';
import { getPembicara, createPembicara, deletePembicara, updatePembicara, showPembicara } from '../controllers/pembicaraController.js';

const router = express.Router();

router.get('/', getPembicara);
router.post('/', createPembicara);
router.get('/:id', showPembicara);
router.put('/:id', updatePembicara);
router.delete('/:id', deletePembicara);

export default router;