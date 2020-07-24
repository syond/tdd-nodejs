import database from "../../database";

class UserController {
  index(request, response) {
    response.json(database);
  }

  store(request, response) {
    const user = request.body;

    const checkUser = database.find((u) => u.email == user.email);

    if (checkUser) {
      response.status(400).json({ error: "Email already in use." });
    } else {
      database.push(user);

      response.status(201).json(user);
    }
  }

  show(request, response) {
    const user = request.body;

    const checkUser = database.find((u) => u.id == user.id);

    if (!checkUser) {
      response.status(400).send();
    } else {
      const userFound = checkUser;

      response.status(200).json(userFound);
    }
  }

  update(request, response) {
    const user = request.body;

    const checkUser = database.find((u) => u.id == user.id);

    if (!checkUser) {
      response.status(400).send();
    } else {
      database.push(user);

      response.status(200).json(user);
    }
  }

  delete(request, response) {
    const user = request.body;

    const checkUser = database.findIndex((u) => u.id == user.id);

    if (checkUser == -1) {
      response.status(400).send();
    } else {
      database = database.filter((u) => u.id != user.id);
      response.status(200).send();
    }
  }
}

export default new UserController();
