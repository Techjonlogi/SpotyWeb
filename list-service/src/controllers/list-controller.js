const List = require('../mongo/models/list.js');

const createList = async (req, res) =>{
    try {
        const { user, name } = req.body;
        if (List.exists({ user: user, name: name })) {
            res.status(409).send({ status: '', message: 'La lista de reproduccion ya existe' });
        } else {
            await List.create({
                user,
                name
            })
            res.send({ status: 'ok', message: 'Lista creada' });
        }

    } catch (ERROR) {
        if (ERROR.name == 'ValidationError') {
            res.status(400).send({ status: 'ERROR', message: 'Valores ingresados invalidos' });
        } else {
            console.log(ERROR);

            res.status(505).send({ status: 'ERROR', message: 'Cancion no creada' });
        }
    }
};

const addSongList = async (req, res) =>{
    try {
        const { listId, songs } = req.body;
        if (List.findById(listId) == null){
            res.status(404).send({ status: 'ERROR', message: 'Lista no encontrada' });
        }else{
            List.findOneAndUpdate({_id: listId},
                {$push: {songs: songs}, function (error, response) {
                    if (error){
                        res.status(403).send({ status: 'ERROR', message: 'Error al agregar las canciones' });
                    }else{
                        res.status(200).send({ status: 'ok', message: 'Canciones agregadas' });
                    }
                }});
        }
    } catch (error) {
        res.status(404).send({ status: 'ERROR', message: 'Lista no encontrada' });
    }
};

const removeSongList = async (req, res) =>{

};

const deleteList = async (req, res) =>{

};

const getLists = async (req, res) =>{
    try {
        const { listId } = req.body;
        const list = await List.findById(listId);
        if (list == null){
            res.status(404).send({ status: 'ERROR', message: 'Lista no encontrada' });
        }else{
            res.send({ status: 'ok', data: song });
        }

    } catch (error) {
        res.status(404).send({ status: 'ERROR', message: 'Lista no encontrada' });
    }
};

module.exports = {createList, addSongList, removeSongList, deleteList, getLists};