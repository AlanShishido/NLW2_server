import express from 'express'

import ClassesControllers from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();

const classesControllers = new ClassesControllers();
const connectionsControllers = new ConnectionsController();


routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.get('/connections', connectionsControllers.index);
routes.post('/connections', connectionsControllers.create);

export default routes;


//localhost:3333/users
//(localhost:3333)/(recursos)

//metodos 
// GET: Buscar ou listar uma informação,
// POST: Criar uma nova informação, 
// PUT: Atualizar uma informação existente, 
// DELETE: Deletar uma informação existente

//Corpo da requisição (request Body): Dados para criação ou atualização de um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletear
// Query Params: Paginação, filtros, ordenação.

