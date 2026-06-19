import express from 'express';
import * as TestimonialController from './controllers/TestimonialController.js';
import * as HomeController from './controllers/HomeController.js';
import * as AboutController from './controllers/AboutController.js';
import * as TravelController from './controllers/TravelController.js';

const router = express.Router();

// console.log(router.toString())
// console.log(router.get.toString())
// console.log(router.post.toString())

router.get('/', HomeController.index);
router.get('/about', AboutController.index);

router.get('/travels', TravelController.index);
router.get('/travels/:slug', TravelController.show);

router.get('/testimonials/create', TestimonialController.create);
router.post('/testimonials', TestimonialController.store);

export default router;