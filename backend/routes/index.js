const { Router } = require('express');
const router = Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
    res.send('hello')
});

router.post('/signup', async (req, res) => {
    const { correo, contrasena, nombre, cedula, edad } = req.body;
    const newUser = new User({ correo, contrasena, nombre, cedula, edad });
    await newUser.save();
    const token = await jwt.sign({ _id: newUser._id }, 'secretkey');
    res.status(200).json({ token });
});

router.post('/signin', async (req, res) => {
    const { correo, contrasena } = req.body;

    const user = await User.findOne({ correo });
    if (!user) return res.status(401).send('The email doen\' exists');
    if (user.contrasena !== contrasena) return res.status(401).send('Wrong Password');

    const token = jwt.sign({ _id: user._id }, 'secretkey');

    return res.status(200).json({ token });
});

router.delete('users/:id', (req, res) => {
    const userId = req.params.id;

    db.collection(collectionName).deleteOne({ _id: new ObjectID(userId) }, (err, result) => {
        if (err) {
            console.error('Error al eliminar el usuario:', err);
            res.status(500).send('Error interno del servidor');
            return;
        }
        if (result.deletedCount === 0) {
            res.status(404).send('Usuario no encontrado');
            return;
        }
        res.send('Usuario eliminado correctamente');
    });
});


router.get('/usuarios/:id', async (req, res) => {
     const userId = req.params.id;
    try {
        const usuario = await User.findById(userId)

        if (usuario) {
            res.json(usuario);
        } else {
            res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
    } catch (error) {
        console.error('Error al buscar usuario en MongoDB:', error);
        res.status(500).json({ mensaje: 'Error al buscar ' });
    }

});

router.get('/tasks', (req, res) => {
    res.json([
        {
            _id: '1',
            name: "task one",
            description: 'asdadasd',
            date: "2019-11-06T15:50:18.921Z"
        },
        {
            _id: '2',
            name: "task two",
            description: 'asdadasd',
            date: "2019-11-06T15:50:18.921Z"
        },
        {
            _id: '3',
            name: "task three",
            description: 'asdadasd',
            date: "2019-11-06T15:50:18.921Z"
        },
    ])
});

router.get('/private-tasks', verifyToken, (req, res) => {
    res.json([
        {
            _id: '1',
            name: "task one",
            description: 'Private Task/1',
            date: "2019-11-06T15:50:18.921Z"
        },
        {
            _id: '2',
            name: "task two",
            description: 'asdadasd',
            date: "2019-11-06T15:50:18.921Z"
        },
        {
            _id: '3',
            name: "task three",
            description: 'asdadasd',
            date: "2019-11-06T15:50:18.921Z"
        },
    ])
});



async function verifyToken(req, res, next) {
    try {
        if (!req.headers.authorization) {
            return res.status(401).send('Unauhtorized Request');
        }
        let token = req.headers.authorization.split(' ')[1];
        if (token === 'null') {
            return res.status(401).send('Unauhtorized Request');
        }

        const payload = await jwt.verify(token, 'secretkey');
        if (!payload) {
            return res.status(401).send('Unauhtorized Request');
        }
        req.userId = payload._id;
        next();
    } catch (e) {
        //console.log(e)
        return res.status(401).send('Unauhtorized Request');
    }
}

module.exports = router;
