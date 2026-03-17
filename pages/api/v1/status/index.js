function status(request, response) {
  response.status(200).json({ chave: "Tudo certo por aqui" });
}

export default status;
