const db = require("../models");
const Application = db.applications;

export const getApplications = (req, res) => {
  Application.findAll()
    .then(data => {
      res.status(200).send(data);
    })
    .catch(error => {
      res.status(400).json("No se encontraron resultados");
    });
};

function isIdUnique(id) {
  return Offers.count({ where: { id: id } }).then(count => {
    return count != 0 ? true : false;
  });
}

export const getApplicationById = (req, res) => {
  const { id } = req.params.id;
  if (isIdUnique) {
    Application.findByPk(id).then(data => {
      res.json(data);
    });
  } else {
    res.status(500).send({ message: "No se encontro registro con id" + id });
  }
};


export const saveApplication = (req, res) => {
  Application.create(req.body)
    .then(daat => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({ message: err.message || "ocurrio un error" });
    });
};

export const updateApplication = (req, res) => {
  const { id } = req.params.id;

  Application.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.json({ message: "Aplicacion actualizada" });
      } else {
        res.json({ message: "No se modifico aplicacion con id" + id });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Error modificando la aplicacion " });
    });
};
