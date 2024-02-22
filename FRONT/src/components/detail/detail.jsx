import React from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import '../detail/detail.css'

export default function Detail()  {
  return (
<>
    <div>
        <h2>Book Details</h2>
      </div>
    <div className="detailContainer"> 
      <div className="bookContainer">
        <div></div>
        <div className="bookRightContainer">
         
          <div>
            <p>Título</p>
            <p>Autor</p>
            <p>Género</p>
            <p>Páginas</p>
            <p>Sinopsis</p>
          </div>
          <div>
            <p>Contacta con el vendedor</p>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1" >
                <Form.Label>Deja tu e-mail</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1" >
                <Form.Label>Déjanos tu mensaje</Form.Label>
                <Form.Control as="textarea" rows={2} />
              </Form.Group>
              <Button variant="info">Enviar</Button>{' '}
            </Form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

