import {Router} from 'express';
const router = Router();

router.get('/users/signin', (_req, res) => {
    res.render('users/signin');
})

router.get('/users/signup', (_req, res) => {
    res.render('users/signup');
})

export default router;