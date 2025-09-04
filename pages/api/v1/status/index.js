function status(req, res) {
  res.status(200).send({ msg: "Status do Projeto" });
}

export default status;
