const router = require('express').Router();

// const AuthController = require('../controllers/auth');
const CustomersController = require('../controllers/customers');
const IndexController = require('../controllers/index');

// rotas
router.get('/', IndexController.index);

// registro
router.get('/register', CustomersController.index)
router.post('/register/add', CustomersController.add)

// listar
router.get('/list', CustomersController.listUsers)

// editar
router.get('/edit', CustomersController.edit)
router.post('/edit/:id', CustomersController.update)

// excluir
router.get('/remove/:id', CustomersController.remove)

module.exports = router;