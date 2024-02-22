import React, { useState, useEffect } from 'react'; // Importa React, useState y useEffect desde 'react'
import './gallery.css'
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
            <img onClick={() => navigate(`/card/${book.id}`)} className="booksimg" src={book.image} alt={book.model} /> {/* Imagen del libro */}
            <p>{book.model}</p> {/* Título del libro */}
            <div className="gallery-button"> {/* Contenedor de botones de la galería */}
              <button className="edit-button" onClick={() => navigate(`/Edit/${book.id}`)}> {/* Botón de edición */}
                <img src="src\assets\img\Edit.png" alt="" /> {/* Icono de edición */}
              </button>
              <button className="delete-button" onClick={() => {deleteBook(`${book.id}`); navigate(0)}}> {/* Botón de eliminación */}
                <img src="src\assets\img\Delete.png" alt="" /> {/* Icono de eliminación */}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Gallery; // Exporta el componente Gallery