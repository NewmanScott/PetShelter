const Pets = require('../controllers/pets');

module.exports = function(app) {
    app.get("/api/pets", Pets.getAll);
    app.post("/api/pets", Pets.create);
    app.delete("/api/pets/:_id", Pets.delete);
    app.get("/api/pets/:_id", Pets.getOne);
    app.put("/api/pets/:_id", Pets.update);

}