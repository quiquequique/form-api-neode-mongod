const notesCtrl = {};

const NoteModel = require('../models/Note');

notesCtrl.getNotes = async (req, res) => {

  const notes = await NoteModel.find();

  res.json(notes);

};

notesCtrl.postNote = async (req, res) => {

  const { title, content, author } = req.body;

  console.log(req.body);

  const newNote = new NoteModel({
    title,
    content,
    author,
  });

  const resNewNote = await newNote.save();

  res.json({ responce: `${resNewNote.title} was saved` });

};

notesCtrl.getOneNote = async (req, res) => {

  const oneNote = await NoteModel.findById(req.params.id);

  res.json({ responce: oneNote });

};

notesCtrl.deleteNote = async (req, res) => {

  const { id } = req.params;

  const deletedNote = await NoteModel.findByIdAndDelete(id);

  res.json({ responce: `${deletedNote.title} was deleted` });

};

notesCtrl.updateNote = async (req, res) => {

  const { id } = req.params;
  const { body } = req;

  const updatedNote = await NoteModel.findByIdAndUpdate(id, body);

  res.json({ responce: `${updatedNote.title} was updated` });

};

module.exports = notesCtrl;
