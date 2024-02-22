import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.css";

const Form = () => {
  return (
    <form>
      <h1>Contactanos</h1>
      <div className="col">
        <div className="col">
          <label>
            <b>Name</b>
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Nombre"
          />
        </div>
        <div className="col">
          <label>
            <b>Email</b>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="col">
          <label>
            <b>Mensaje</b>
          </label>
          <textarea
            type="text"
            className="form-control"
            id="mensaje"
            name="mensaje"
          ></textarea>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Enviar Correo
      </button>
    </form>
  );
};

export default Form;
