import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './NotesPage.css';

const NotesPage = () => {
  const history = useNavigate(); // Hook for navigation
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  // Load notes from localStorage on initial render
  useEffect(() => {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  // Save notes to localStorage whenever 'notes' state changes
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleNoteChange = (e) => {
    setNewNote(e.target.value);
  };

  const handleSaveNote = () => {
    if (newNote.trim() !== '') {
      const date = new Date();
      const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
      const updatedNotes = [...notes, { text: newNote, date: formattedDate }];
      setNotes(updatedNotes);
      setNewNote('');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center" style={{ backgroundColor: '#F3F4F6' }}> {/* Added background color */}
      {/* Back button */}
      <button
        onClick={() => history('/home')}
        className="absolute top-0 left-0 m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
        Back
      </button>
      <h1 className="text-3xl font-bold mb-4 text-center">Notes Page</h1>
      <div className="mb-8 w-full max-w-md"> {/* Increase margin and set max-width for responsiveness */}
        <textarea
          value={newNote}
          onChange={handleNoteChange}
          placeholder="What's on your mind...?"
          className="w-full h-40 border rounded p-2 text-lg resize-none" 
        />
      </div>
      <div className="text-center mb-8">
        <button onClick={handleSaveNote} className="bg-green-500 hover:bg-black text-white font-bold py-3 px-6 rounded-lg btn-save">
          <FontAwesomeIcon icon={faSave} className="mr-2" />
          Save Note
        </button>
      </div>
      <div className="w-full max-w-md"> 
        <div className="saved-notes">
          <h2 className="text-xl font-bold mb-4 ">Saved Notes:</h2>
          {notes.length > 0 ? (
            <ul>
              {notes.map((note, index) => (
                <li key={index} className="mb-4 border border-gray-200 p-4 rounded-lg bg-gray-100">
                  <div className="font-bold mb-2">{note.date}</div>
                  <div>{note.text}</div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-lg">No notes saved yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotesPage;
