import React from "react";
import Form from "react-bootstrap/Form";

export const Detail = () => {
  return (
    <div className="detailContainer">
      Detalle
      <div>
        <h2>Book Details</h2>
      </div>
      <div className="bookContainer">
        <div>Imagen</div>
        <div className="bookRightContainer">
          Texto Derecha
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
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Deja tu e-mail</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Déjanos tu mensaje</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

