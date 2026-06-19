const index = (req, res) => {
    res.render('about/index', {
        page: 'Nosotros'
    });
}

export {
    index
}