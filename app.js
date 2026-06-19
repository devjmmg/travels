import express from 'express';
import router from './router.js';
import db from './config/db.js';

const app = express();

// Leer datos de un formulario
app.use(express.urlencoded({
    extended: true
}));

// db.authenticate()
//     .then(() => console.log('base de datos conectada'))
//     .catch(error => console.log(error));

// Definir la carpeta public
app.use(express.static('public'));

// Definir puerto
const port = process.env.PORT || 3000;

// Habilitar pug
app.set('view engine', 'pug');

// Obtner año actual
app.use( (req, res, next) => {
    res.locals.year = new Date().getFullYear();
    res.locals.site = 'Agencia de viajes';
    next();
});

// Agregar router
app.use('/', router);

app.listen(port, () => {
    console.log(`Servidor en el puerto ${port}`);
});