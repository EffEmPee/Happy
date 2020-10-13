import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors'

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler);

app.listen(3333);



// Rota = conjunto
// Recurso = usuario


// Metodos HTTP = GET, POST, PUT, DELETE
// Paramentros

// GET = Buscar uma informacao (lista, item)
// POST = Criando uma informacao
// PUT = Ediando uma informacao
// DELETE = Deletando uma informacao


// Query Params: https://localhost:3333/users?search=felipe
// Route Params: https://localhost:3333/users/1 (identificar um recurso)
// Body: https://localhost:3333/users (identificar um recurso)