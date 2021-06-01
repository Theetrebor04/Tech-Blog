const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('hompage');
});

module.exports = router;