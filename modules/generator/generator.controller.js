const express = require("express");
const router = express.Router();
const generatorService = require("./generator.service");

module.exports = router;

router.get("/adjectif", adjectif);
router.get("/adverbe", adverbe);
router.get("/determinant", determinant);
router.get("/infinitif", infinitif);
router.get("/participe", participe);
router.get("/pronom", pronom);
router.get("/substantif", substantif);
router.get("/verbe", verbe);

router.get("/groupe-nominal", groupeNominal);

function adjectif(req, res, next) {
  generatorService.adjectif(req.query)
    .then(word => res.json(word))
    .catch(err => next(err));
}

function adverbe(req, res, next) {
  generatorService.adverbe()
    .then(word => res.json(word))
    .catch(err => next(err));
}

function determinant(req, res, next) {
  generatorService.determinant(req.query)
    .then(word => res.json(word))
    .catch(err => next(err));
}

function infinitif(req, res, next) {
  generatorService.infinitif()
    .then(word => res.json(word))
    .catch(err => next(err));
}

function participe(req, res, next) {
  generatorService.participe(req.query)
    .then(word => res.json(word))
    .catch(err => next(err));
}

function pronom(req, res, next) {
  generatorService.pronom(req.query)
    .then(word => res.json(word))
    .catch(err => next(err));
}

function substantif(req, res, next) {
  generatorService.substantif(req.query)
    .then(word => res.json(word))
    .catch(err => next(err));
}

function verbe(req, res, next) {
  generatorService.verbe(req.query)
    .then(word => res.json(word))
    .catch(err => next(err));
}

function groupeNominal(req, res, next) {
  generatorService.groupeNominal(req.query)
    .then(words => res.json(words))
    .catch(err => next(err));
}