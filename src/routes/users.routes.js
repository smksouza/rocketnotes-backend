const { Router } =  require("express")

const UsersController = require("../controllers/UsersController")

const usersRouter = Router()


function myMiddleware(request, response, next) {
    console.log("Você passou pelo middleware")

    next();
}

const usersController = new UsersController();

usersRouter.post("/", myMiddleware, usersController.create)

module.exports = usersRouter