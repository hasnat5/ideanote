import express from "express";
import {
    getPostings,
    getPostingById,
    createPosting,
    updatePosting,
    deletePosting
} from "../controllers/Posting.js"
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/postings', verifyUser, getPostings);
router.get('/postings/:id', verifyUser, getPostingById);
router.post('/postings', verifyUser, createPosting);
router.patch('/postings/:id', verifyUser, updatePosting);
router.delete('/postings/:id', verifyUser, deletePosting);

export default router;