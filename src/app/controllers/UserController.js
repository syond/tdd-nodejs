class UserController {
  store(request, response) {
    const user = request.body;

    if (!user) {
      response.json({ error: "Something wrong" });
    } else {
      response.status(201).json(user);
    }
  }
}

export default new UserController();
