function status(request, response) {
  //Obs: O send() nao considera o conteudo como JSON automaticamente
  // Pra isso, precisamos usar o metodo json()
  response.status(200).json({ message: "The API is running smoothly." });
}

export default status;
