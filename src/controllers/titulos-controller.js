import express from 'express';
const router = express.Router();

const titulos = [];

function validateData(data){
  const separaData = data.split('/');

  const isDate = 
      separaData.length === 3 && 
      separaData[0].length === 2 && 
      separaData[1].length === 2 && 
      separaData[2].length === 4;

  return isDate;
}

router.get("/", (req, res) => {
    res.json(titulos);
});

router.get('/cliente-by-titulo/:id', async (req, res) => {
    const titulo = titulos.find(t => t.id === parseInt(req.params.id));
    if (!titulo) {
      return res.status(404).json({ message: 'Título não encontrado' });
    }

    const response = await fetch(`http://localhost:3000/api/clientes/${titulo.clienteId}`);
    if (!response) {
        return res.status(404).json({ message: 'Cliente não encontrado' });
    }

    const cliente = await response.json();

    console.log(cliente);
    
    titulo.cliente = cliente;
    const data = titulo;

    res.json(data);
});

router.put('/:id', (req, res) => {
    const titulo = titulo.find(c => c.id === parseInt(req.params.id));
    const data = req.body.vencimento;

    if (!titulo)
        return res.status(404).json({message: 'titulo não encontrado'});


    if (!validateData(data)){
      return res.status(400).json({message: 'Data inválida, use o formato dd/mm/aaaa'});
    }

    titulo.vencimento = data;
    titulo.valor = req.body.valor;
    titulo.clienteId = req.body.clienteId;
    res.json(titulo);
});

router.delete('/:id', (req, res) => {
    const titulo = titulos.find(c => c.id === parseInt(req.params.id));

    if (!titulo)
        return res.status(404).json({message: 'titulo não encontrado'});

    const tituloRemovido = titulos.splice(titulo, 1);
});
router.post('/', (req, res) => {
    const data = req.body.vencimento;
    if (!validateData(data)){
      return res.status(400).json({message: 'Data inválida, use o formato dd/mm/aaaa'});
    }

    const titulo = {
        id: titulos.length +1,
        vencimento: data,
        valor: req.body.valor,
        clienteId: req.body.clienteId
    }

    titulos.push(titulo);
    res.status(201).json(titulo);
});

export default router;