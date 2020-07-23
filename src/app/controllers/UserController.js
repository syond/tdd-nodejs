import database from "../../database";

class UserController {
  index(request, response) {
    response.json(database);
  }

  store(request, response) {
    const user = request.body;

    if (!user) response.json({ error: "Something went wrong" });

    const checkUser = database.find((u) => u.email == user.email);

    if (checkUser) {
      response.status(400).json({ error: "Email already in use." });
    } else {
      database.push(user);

      response.status(201).json(user);
    }
  }

  update(request, response){
      const user = request.body;

      const checkUser = database.find(u => u.id == user.id);

      if(!checkUser){
        response.status(400).send();
    } else{
        database.push(user);

        response.status(200).json(user);
    }
  }
}

export default new UserController();
