exports.allAccess = (req, res) => {
    res.status(200).send("Conteniod publico.");
  };
  
  exports.userBoard = (req, res) => {
    res.status(200).send("Contenido usuario.");
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("Contenido admin.");
  };
  
  exports.moderatorBoard = (req, res) => {
    res.status(200).send("Contenido moderador.");
  };