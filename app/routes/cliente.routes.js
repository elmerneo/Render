module.exports = app => {
    const clientes = require("../controllers/cliente.controller.js");

    var router = require("express").Router();

    // Create a new Client
    router.post("/", clientes.create);

    // Retrieve all Client
    router.get("/", clientes.findAll);

    // Retrieve all published Client
    router.get("/status", clientes.findAllStatus);

    // Retrieve a single Client with id
    router.get("/:id", clientes.findOne);

    // Update a Client with id
    router.put("/:id", clientes.update);

    // Delete a Client with id
    router.delete("/:id", clientes.delete);

    // Delete all Cliente
    router.delete("/", clientes.deleteAll);

    app.use("/api/cliente", router);
};
