const { Router } = require('express');
const router = Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const axios = require('axios');

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

router.delete('/users/:id', async (req, res) => {
    const userId = req.params.id;

    try {
        const deletedUser = await User.findByIdAndDelete(userId);

        if (!deletedUser) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        return res.json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar usuario:', error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
});

router.put('/usersUp/:id', async (req, res) => {
    const userId = req.params.id;
    const userData = req.body;
    try {
      const updatedUser = await User.findByIdAndUpdate(userId, userData, { new: true });
      
      if (!updatedUser) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
      
      return res.json(updatedUser);
    } catch (error) {
      console.error('Error al actualizar usuario:', error);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
  });


router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
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


router.get('/subvenciones', async (req, res) => {
    try {
      const response = await axios.get('https://datos.unican.es/gobierno/3228/subvenciones.json');
      res.json(response.data);
    } catch (error) {
      console.error('Error fetching subvenciones:', error);
      res.status(500).json({ error: 'Error fetching subvenciones' });
    }
  });

router.get('/data', verifyToken, async (req, res) => {
    try {
        const user = await User.findOne({ username: req.authData.username });
        res.json({ message: 'Datos protegidos', user: user });
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor' });
    }
});

module.exports = router;
