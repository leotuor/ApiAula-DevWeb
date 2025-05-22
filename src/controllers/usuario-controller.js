import express from 'express';
const router = express.Router();

const usuarios = [];

router.get("/", (req, res) => {
    res.json(usuarios);
});

router.get('/:id', (req, res) => {
    const usuario = usuarios.find(c => c.id === parseInt(req.params.id));

    if (!usuario)
        return res.status(404).json({message: 'usuario não encontrado'});

    res.json(usuario);
});

router.put('/:id', (req, res) => {
    const usuario = usuario.find(c => c.id === parseInt(req.params.id));

    if (!usuario)
        return res.status(404).json({message: 'usuario não encontrado'});

    usuario.nome = req.body.nome;
    usuario.email = req.body.email;
    usuario.telefone = req.body.telefone;

    res.json(usuario);
});

router.delete('/:id', (req, res) => {
    const usuario = usuarios.find(c => c.id === parseInt(req.params.id));

    if (!usuario)
        return res.status(404).json({message: 'usuario não encontrado'});

    const usuarioRemovido = usuarios.splice(usuario, 1);
});

router.post('/', (req, res) => {
    const usuario = {
        id: usuarios.length +1,
        username: req.body.username,
        email: req.body.email,
        senha: req.body.senha,    
      }

    usuarios.push(usuario);
    res.status(201).json(usuario);
});

export default router;