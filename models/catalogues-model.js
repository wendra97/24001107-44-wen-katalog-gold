const db = require("../config/database.js");

const getAllCatalogues = async () => {
  const catalogues = await db("catalogues").select("*");
  return catalogues;
};

const getCatalogueById = async (id) => {
  const catalogue = await db("catalogues")
    .select("*")
    .where({ catalogue_id: id })
    .first();
  return catalogue;
};

const addCatalogue = async (name, price, category) => {
  const catalogue = await db("catalogues").insert(
    {
      name: name,
      price: price,
      category: category,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    ["name", "price", "category"]
  );
  return catalogue;
};

const updateCatalogue = async (id, name, price, category) => {
  const catalogue = await db("catalogues").where({ catalogue_id: id }).update(
    {
      name: name,
      price: price,
      category: category,
      updated_at: new Date().toISOString(),
    },
    ["name", "price", "category"]
  );
  return catalogue;
};

const deleteCatalogue = async (id) => {
  const catalogue = await db("catalogues").where({ catalogue_id: id }).del();
  return catalogue;
};

module.exports = {
  getAllCatalogues,
  getCatalogueById,
  addCatalogue,
  updateCatalogue,
  deleteCatalogue,
};
