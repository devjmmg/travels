import { Travel } from "../models/Travel.js";
import { Testimonial } from "../models/Testimonial.js";

const index = async (req, res) => {
    try {
        const [travels, testimonials] = await Promise.all([
            Travel.findAll({
                limit: 3
            }),
            Testimonial.findAll({
                order: [['id', 'DESC']],
                limit: 3
            })
        ]);
        res.render('home/index',{
            page: 'Inicio',
            pageClass: 'home',
            travels,
            testimonials
        });
    } catch (error) {
        console.log(error);
    }
}

export {
    index
}