const db = require("../models");
const Offers = db.offers;
const Op = db.Sequelize.Op;

function isIdUnique(id) {
  return Offers.count({ where: { id: id } }).then(count => {
    if (count != 0) {
      return true;
    }
    return false;
  });
}

export const getOffers = (req, res) => {};
export const getOffersById = (req, res) => {
  const id = req.params.id;

  isIdUnique(id).then(isUnique => {
    if (isUnique) {
      Offers.findByPk(id).then(data=>{
          res.json(data);
      })
    } else {
      res.status(500).send({
          message:"No se encontro registro con id"+id
      })
    }
  });
  
};

export const saveOffer = (req, res) => {
  Offers.create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the job offert."
      });
    });
};
export const updateOffer = (req, res) => {};
export const deletOffer = (req, res) => {};
