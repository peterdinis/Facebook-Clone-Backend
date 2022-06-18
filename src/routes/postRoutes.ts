import express, {Router} from 'express';
import {createPost, getPost} from "../controllers/postController";

const router: Router = express.Router();

router.post("/", createPost);
router.get("/:id", getPost);

export default router;