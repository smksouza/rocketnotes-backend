/*
* index - GET para lisitar vários registros.
* show - GET para exibir um registro especifico.
* create - POST para criar um registro.
* update - PUT para atualizar um registro.
* delete - DELETE para remover um registro.
*/

const AppError = require("../utils/AppError");

class UsersController {
    create(request, response) {
        const {name, email, password} = request.body;

        if(!name){
            throw new AppError("O nome é o obrigatório!");
        }

        response.status(201).json({name, email, password});
    }
}

module.exports = UsersController;