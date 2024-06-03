const express = require("express");
const methodOverride = require("method-override");
const router = express.Router();
const cataloguesController = require("../controllers/catalogues-controller.js");

router.use(express.urlencoded({ extended: true }));
router.use(express.json());
router.use(
  methodOverride((req, res) => {
    if (req.body && typeof req.body === "object" && "_method" in req.body) {
      const method = req.body._method;
      delete req.body._method;
      return method;
    }
  })
);
router.get("/catalogues", cataloguesController.getAllCatalogues);
router.get("/catalogues/add", cataloguesController.getAddCatalogueForm);
router.get("/catalogues/:id", cataloguesController.getCatalogueById);
router.post("/catalogues/add", cataloguesController.addCatalogue);
router.put("/catalogues/:id", cataloguesController.updateCatalogue);
router.delete("/catalogues/delete/:id", cataloguesController.deleteCatalogue);
router.get("/catalogues/edit/:id", cataloguesController.getCatalogueById);
router.put("/catalogues/edit/:id", cataloguesController.updateCatalogue);

module.exports = router;
