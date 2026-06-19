import { Testimonial } from "../models/Testimonial.js";

const create = async (req, res) => {
    try {
        const testimonials = await Testimonial.findAll({
            order: [['id', 'DESC']],
            limit: 6
        });
        res.render('testimonial/create', {
            page: 'Testimoniales',
            testimonials
        });
    } catch (error) {
        console.log(error);
    }
}

const store = async (req, res) => {

    const { name, email, message } = req.body;

    let errors = {};
    if (name.trim() === '') {
        errors.name = 'El nombre es requerido.';
    }
    if (email.trim() === '') {
        errors.email = 'El correo electrónico es requerido.';
    }
    if (message.trim() === '') {
        errors.message = 'El mensaje es requerido.';
    }

    if (Object.keys(errors).length > 0) {
        try {
            const testimonials = await Testimonial.findAll({
                order: [['id', 'DESC']],
                limit: 6
            });
            res.render('testimonial/create', {
                page: 'Testimoniales',
                testimonials,
                errors,
                name,
                email,
                message
            });
        } catch (error) {
            console.log(error);
        }
        return;
    }

    try {
        await Testimonial.create({
            name, email, message
        });
        res.redirect('testimonials/create')
    } catch (error) {
        console.log(error);
    }
}

export {
    create,
    store
}