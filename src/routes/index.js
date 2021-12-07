const router = require('express').Router();

// rotas
router.get('/', (req, res) => {
    res.render('index', {
    title: 'Página Inicial'
    })
})

module.exports = router;