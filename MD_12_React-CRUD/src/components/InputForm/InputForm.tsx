import React, { useState } from 'react';
import "./InputForm.css";

type InputFormProps = {
  onSubmit: (title: string, author: string, year: string, img: string) => void;
};

const InputForm: React.FC<InputFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [img, setImg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit(title, author, year, img);
    
    setTitle('');
    setAuthor('');
    setYear('');
    setImg('');
  };

  return (
    <form className="crud__form js-form" onSubmit={handleSubmit}>
      <p className="crud__form-title">Add new book</p>
      <div className="crud__form-inputs">
        <input
          type="text"
          className="crud__form-input"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          className="crud__form-input"
          value={author}
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <input
          type="text"
          className="crud__form-input"
          value={year}
          placeholder="Year of publication"
          onChange={(e) => setYear(e.target.value)}
          required
        />
        <input
          type="text"
          className="crud__form-input"
          value={img}
          placeholder="Paste the address of the image"
          onChange={(e) => setImg(e.target.value)}
          required
        />
      </div>
      <button className="crud__button js-add-button" type="submit">
        Add
      </button>
    </form>
  );
};

export default InputForm;
