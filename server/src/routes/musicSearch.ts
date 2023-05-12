import express from "express";
import * as musicSearchController from '../controllers/musicSearch'

const router = express.Router();

router.post('/', musicSearchController.searchMusic)

export default router;