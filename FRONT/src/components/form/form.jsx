
import "bootstrap/dist/css/bootstrap.min.css";
import "../form/form.css"
// import "bootstrap/dist/js/bootstrap.bundle.css";
const Form = () => {
  return (
    <div className="container">
      <form>
        <h1 className="text-center">Contactanos</h1>
        <div className=" form-container   ">
          <div className="col-6 ">
            <div className="form-group">
              <label htmlFor="name"></label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Nombre"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <label htmlFor="email"></label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <label htmlFor="mensaje"></label>
              <textarea
                className="form-control"
                id="mensaje"
                name="mensaje"
                placeholder="Escribe tu mensaje"
                rows="4"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary button-form">
            Enviar Correo
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
