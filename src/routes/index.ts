import { Router } from "express";
import authRouter from './auth'
import gulidsRouter from './gulids';
const router = Router();

router.use('/auth' ,authRouter )


router.use('/gulids' , gulidsRouter )

export default router;