import { Travel } from "../models/Travel.js";

const index = async (req, res) => {
    try {
        const travels = await Travel.findAll()
        res.render('travel/index', {
            page: 'Viajes',
            travels
        });
    } catch (error) {
        console.log(error);
    }
}

const show = async (req, res) => {
    const { slug } = req.params;
    const travel = await Travel.findOne({
        where: {
            slug
        }
    });
    try {
        res.render('travel/show', {
            page: 'Información del viaje',
            travel
        })
    } catch (error) {
        console.log(error);
    }
}

export {
    index,
    show
}