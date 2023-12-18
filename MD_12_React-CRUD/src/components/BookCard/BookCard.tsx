import React from 'react';
import "./BookCard.css";

type BookItemProps = {
  id: string | undefined;
  img: string;
  title: string;
  author: string;
  year: string;
  onDelete: (id: string | undefined) => void;
};

const BookItem: React.FC<BookItemProps> = ({ id, img, title, author, year, onDelete }) => {
  return (
    <div className="books__wrapper">
      <div className="book__wrapper">
        <div className="book__img-wrapper">
          <img src={img} className="book__img" alt="Book cover" />
        </div>
        <div className="book__inputs">
          <div className="book__input">{title}</div>
          <div className="book__input">{author}</div>
          <div className="book__input">{year}</div>
          <div className="book-buttons">
            <button
              className="crud__button js-delete-button"
              onClick={() => onDelete(id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookItem;