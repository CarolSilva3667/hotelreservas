const prisma = require("../data/prisma");

const cadastrar = async (req, res) => {
    const { hospede, data_entrada, data_saida, quarto_id } = req.body;

    const item = await prisma.reservas.create({
        data: {
            hospede,
            data_entrada: new Date(data_entrada),
            data_saida: new Date(data_saida),
            quarto_id: Number(quarto_id)
        }
    });

    res.json(item).status(200).end();
};

const listar = async (req, res) => {
    const lista = await prisma.reservas.findMany();

    res.json(lista).status(200).end();
};

const excluir = async (req, res) => {
    const { id } = req.params;
    
    const item = await prisma.reservas.delete({
        where: { id : Number(id) }
    });

    res.json(item).status(200).end();
};

module.exports = {
    cadastrar,
    listar,
    excluir
}
