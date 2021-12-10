const CustomersModel = require('../models/customers');
const { crypto } = require('../utils/password');

const defaultTitle = 'Cadastro de Clientes';

async function add(req, res) {
    const {
        name,
        age,
        email,
        password,
    } = req.body;

    const passwordCrypto = await crypto(password);
    
    const register = new CustomersModel({
        name,
        age,
        email,
        password: passwordCrypto,
    });
    
    register.save();
    res.render('register', {
        title: defaultTitle,
        message: 'Cliente cadastrado com sucesso!',
    });
}

function index(req, res) {
    res.render('register', {
    title: 'Cadastro de Clientes'
    })
}

async function listUsers(req, res) {

    const users = await CustomersModel.find();

    res.render('listUsers', {
        title: 'Lista de Clientes',
        users,
    })
}

async function edit(req, res) {
    const { id } = req.query;
    const user = await CustomersModel.findById(id);
    res.render('edit', {
        title: 'Editar Cliente',
        user,
        })
}

async function update(req, res) {
    const {
        name,
        age,
        email,
    } = req.body;

    const { id } = req.params;

    const user = await CustomersModel.findById(id);

    user.name = name;
    user.age = age;
    user.email = email;

    user.save();

    res.render('edit', {
        title: 'Editar Cliente',
        user,
        message: 'Cliente atualizado com sucesso!',})
}

async function remove(req, res) {
    const { id } = req.params;
    const remove = await CustomersModel.deleteOne({ _id: id });
    res.redirect('/list');
}


module.exports = {
    index,
    add,
    listUsers,
    edit,
    update,
    remove
}