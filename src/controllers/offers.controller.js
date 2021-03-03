const db = require("../models");
const { success, error, validation } = require("../libs/responseApi");
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

export const getOffers = (req, res) => {
  Offers.findAll()
    .then(data => {
      res.status(200).json(success("OK", { data }, res.statusCode));
    })
    .catch(err => {
      res
        .status(500)
        .json(error("No se encontraron registros"+err, res.statusCode));
      /*res.status(500).send({
        message: "No se encontraron resgistros"
      });*/
    });
};

export const getOffersById = (req, res) => {
  const id = req.params.id;

  isIdUnique(id).then(isUnique => {
    if (isUnique) {
      Offers.findByPk(id).then(data => {
        res.json(data);
      });
    } else {
      res.status(500).send({
        message: "No se encontro registro con id" + id
      });
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

export const updateOffer = (req, res) => {
  const id = req.params.id;

  Offers.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.json({
          message: "Oferta con id" + id + " modificada"
        });
      } else {
        res.json({
          message: "Oferta con id" + id + " no fue encontrada"
        });
      }
    })
    .catch(
      res.status(500).json({
        message: "Error updating job offer with id=" + id
      })
    );
};

export const deleteOffer = (req, res) => {
  const id = req.params.id;
  Offers.destroy({
    where: { id: id },
    truncate: false
  })
    .then(nums => {
      res.send({ message: ` Job offer were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).json({
        message:
          err.message || "Some error occurred while removing the job offer."
      });
    });
};
