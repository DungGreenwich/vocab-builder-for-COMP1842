const mongoose = require('mongoose');
const Vocab = mongoose.model('Vocab');

exports.list_all_words = (req, res) => {
    Vocab.find({}, (err, words) => {
        if (err) return res.status(500).send(err);  // return added
        res.json(words);
    });
};

exports.create_a_word = (req, res) => {
    const newWord = new Vocab(req.body);
    newWord.save((err, word) => {
        if (err) return res.status(400).send(err);  // return added
        res.status(201).json(word);
    });
};

exports.read_a_word = (req, res) => {
    Vocab.findById(req.params.wordId, (err, word) => {
        if (err) return res.status(404).send(err);  // return added
        res.json(word);
    });
};

exports.update_a_word = (req, res) => {
    Vocab.findOneAndUpdate(
        { _id: req.params.wordId },
        req.body,
        { new: true },
        (err, word) => {
            if (err) return res.status(400).send(err);  // return added
            res.json(word);
        }
    );
};

exports.delete_a_word = (req, res) => {
    Vocab.deleteOne({ _id: req.params.wordId }, err => {
        if (err) return res.status(400).send(err);  // return added
        res.json({
            message: 'Word successfully deleted',
            _id: req.params.wordId
        });
    });
};