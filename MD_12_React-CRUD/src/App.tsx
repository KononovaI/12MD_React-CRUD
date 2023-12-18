import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookItem from './components/BookCard/BookCard';
import InputForm from './components/InputForm/InputForm';
import { Book } from './components/BookType';

const App: React.FC = () => {
  const [bookData, setBookData] = useState<Book[]>([]);

  useEffect(() => {
    fetchBook();
  }, []);

  const fetchBook = async () => {
    try {
      const response = await axios.get<Book[]>('http://localhost:3004/books');
      setBookData(response.data);
    } catch (error) {
      console.error('Error fetching book:', error);
    }
  };

  const addBook = async (title: string, author: string, year: string, img: string) => {
    try {
      const newBook: Book = { title, author, year, img };
      await axios.post('http://localhost:3004/books', newBook);
      fetchBook();
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  const deleteBook = async (id: number) => {
    try {
      if (id) {
        await axios.delete(`http://localhost:3004/books/${id}`);
        fetchBook();
      }
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <>
      <InputForm onSubmit={addBook} />

      <div className="js-cards">
        {bookData.map((bookItem) => (
          <BookItem
            key={bookItem.id}
            id={bookItem.id}
            img={bookItem.img}
            title={bookItem.title}
            author={bookItem.author}
            year={bookItem.year}
            onDelete={deleteBook}
          />
        ))}
      </div>
    </>
  );
};

export default App;
