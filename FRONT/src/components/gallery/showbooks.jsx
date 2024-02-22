import React, { useState, useEffect } from 'react'; // Importa React, useState y useEffect desde 'react'
import './showbooks.css'
import { useNavigate } from "react-router-dom"; // Importa useNavigate para la navegación
import { getBooks } from '../services/service'; // Importa funciones para obtener y eliminar libros desde el servicio

const Gallery = () => { // Define un componente funcional para la galería de libros
  const [books, setBooks] = useState([]); // Define el estado de los libros
  const navigate = useNavigate(); // Obtiene la función de navegación de react-router-dom

  useEffect(() => { // Efecto que se ejecuta cuando el componente se monta
    const fetchData = async () => { // Función asíncrona para obtener datos de los libros
      const data = await getBooks(); // Obtiene datos de los libros
      console.log(data); // Muestra los datos en la consola
      setBooks(data); // Actualiza el estado de los libros con los datos obtenidos
    }
    fetchData(); // Llama a la función fetchData
  }, []); // El efecto se ejecuta solo en el montaje inicial

  return ( // Devuelve el contenido del componente
    <>
      <div className='gallery'> {/* Div que contiene la galería de libros */}
        {books.map((book) => ( // Mapea cada libro y renderiza una tarjeta para cada uno
          <div className='gallerygrid' key={book.id}> {/* Tarjeta de libro individual */}
            <img onClick={() => navigate(`/card/${book.id}`)} className="booksimg" src={book.photo} alt={book.title} /> {/* Imagen del libro */}
            <p>{book.title}</p> {/* Título del libro */}
          </div>
        ))}
      </div>
    </>
  );
}

export default Gallery; // Exporta el componente Gallery