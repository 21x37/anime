const express = require('express');
const router = new express.Router();
const fetchKitsu = require('../kitsu/kitsu');


router.get('/kitsu/api', async (req, res) => {
    const params = req.query;

    const response = await fetchKitsu(params);
    res.send(response);
});

module.exports = router;