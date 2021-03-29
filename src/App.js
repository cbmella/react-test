import Parrafo from "./components/Parrafo";
import Evento from "./components/Evento";
import Saludo from "./components/Saludo";
import Contador from "./components/Contador";
import Ternario from "./components/Ternario";
import Lista from "./components/Lista";
import Objectos from "./components/Objectos";
import Form from "./components/Form";
function App() {
  return (
    <div className="app mt-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="accordion" id="accordionExample">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link btn-block text-left"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      Test React parte 1
                    </button>
                  </h2>
                </div>

                <div
                  id="collapseOne"
                  className="collapse"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    {/*  primera parte test react */}
                    <Parrafo />
                    <hr/>
                    <Evento />
                    <hr/>
                    <Saludo message={"Hola desde App.js"} />
                    <hr/>
                    <Contador />
                    <hr/>
                    <Ternario max_temp={20} />
                    {/*  primera parte test react */}
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Test React parte 2
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse show"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <Lista />
                    <hr/>
                    <Objectos />
                    <Form/>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Test React parte 3
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">Empty</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
