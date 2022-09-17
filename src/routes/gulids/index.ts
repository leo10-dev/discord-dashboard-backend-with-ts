import { Router } from "express";
import {isAuthenticated} from '../../utils/middlewares'
import {getGulidsController} from '../../controllers/gulids'
const router = Router();

router.get('/' , isAuthenticated , getGulidsController)

export default router;
