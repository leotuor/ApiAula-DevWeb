import express from 'express';
const router = express.Router();

const clientes = [];

router.get("/", (req, res) => {
    res.json(clientes);
});

router.get('/:id', (req, res) => {
    const cliente = clientes.find(c => c.id === parseInt(req.params.id));

    if (!cliente)
        return res.status(404).json({message: 'Cliente não encontrado'});

    res.json(cliente);
});

router.put('/:id', (req, res) => {
    const cliente = cliente.find(c => c.id === parseInt(req.params.id));

    if (!cliente)
        return res.status(404).json({message: 'Cliente não encontrado'});

    cliente.nome = req.body.nome;
    cliente.email = req.body.email;
    cliente.telefone = req.body.telefone;

    res.json(cliente);
});

router.delete('/:id', (req, res) => {
    const cliente = clientes.find(c => c.id === parseInt(req.params.id));

    if (!cliente)
        return res.status(404).json({message: 'Cliente não encontrado'});

    const clienteRemovido = clientes.splice(cliente, 1);
});

router.post('/', (req, res) => {
    const cliente = {
        id: clientes.length +1,
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone
    }

    clientes.push(cliente);
    res.status(201).json(cliente);
});

export default router;