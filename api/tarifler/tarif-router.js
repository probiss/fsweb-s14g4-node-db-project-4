const express = require("express");
const router = express.Router();

const mw = require("./tarif-middleware");

router.get("/:id", mw.checkTarifId, async (req, res, next) => {
    try {
        res.json(req.tarif);
    } catch (error) {
        next(error);
    }
});
module.exports = router;