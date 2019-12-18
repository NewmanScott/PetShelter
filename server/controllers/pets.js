const mongoose = require("mongoose");
const Pet = mongoose.model("Pet");

class PetController {
    getAll(req, res) {
        Pet.find({})
        .then(pets => res.json(pets))
        .catch(err => res.json(err));
    }

    getOne(req, res) {
        Pet.findOne({_id : req.params._id})
        .then(pet => res.json(pet))
        .catch(err => res.json(err));
    }

    create(req, res){
        let pet = new Pet(req.body);
        pet.save()
        .then(() => res.json({"msg": "pet created"}))
        .catch(err => res.json(err));
    }

    delete(req, res) {
        console.log("deleting...");
        Pet.remove({_id : req.params._id})
        .then(() => console.log({"msg": "pet deleted"}))
        .catch(err => console.log(err));
    }
    update(req, res) {
        let _id = req.params._id;
        Pet.findByIdAndUpdate({_id}, req.body, {runValidators: true, context: 'query'})
            .then( () => res.json({"msg": "pet updated"}))
            .catch(err => res.json(err));
    }
}

module.exports = new PetController();