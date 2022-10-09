import "./styles.css";
import Header from "../../components/Header";

export function CreateRoutine() {
  return (
    <>
      <Header />
      <div className="container">
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputText">Remédio</label>
              <input
                type="text" className="form-control" id="inputText" placeholder="Insira o remédio"
              />
            </div>
          </div>
          
          
          <div className="form-row">
            
            <div className="form-group col-md-4">
              <label for="inputState">Remedio</label>
              <select id="inputState" className="form-control">
                <option selected>Selecione o remédio...</option>
                <option>dorflex</option>
                <option>dipirona</option>
                <option>nimesulida</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <div className="form-group col-md-4">
              <label for="inputState">Tomar quantas vezes ao dia?</label>
              <select id="inputState" className="form-control">
                <option selected>...</option>
                <option>Uma vez</option>
                <option>Duas vezes</option>
                <option>Três vezes</option>
                <option>Quatro vezes</option>
              </select>
            </div>
          <div className="form-check">
            
            <p>Esse medicamente é de uso contínuo?</p>
            <input
              className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
            />
            <label className="form-check-label" for="flexRadioDefault1">
              Não
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked
            />
            <label className="form-check-label" for="flexRadioDefault2">
              Sim
            </label>
            </div>
            <div className="form-group col-md-4">
              <label for="inputState">Durante quanto tempo?</label>
              <select id="inputState" className="form-control">
                <option selected>...</option>
                <option>Um mês</option>
                <option>Dois meses</option>
                <option>Três meses</option>
                <option>Seis meses</option>
                <option>01 ano</option>
                <option>02 anos</option>
                <option>Tempo indefinido</option>
                <option>Outro... (especifique)</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
