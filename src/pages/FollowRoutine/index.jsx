import Header from "../../components/Header"
import './styles.css';

export function FollowRoutine() {
  return (
    <>
      <Header />

      {/* BANNER DA PAGINA */}
      <div className="container">

        <div className="banner">
          <div className="container">
            <div className="row">
              <div className="col-md-6">

                <h2 className="title-banner2">
                  Ative as notificações pra lembrar seus horários da rotina SempreBem
                </h2>
                <p className="subtitle-banner">
                  Receba as notificações para seguir o cronograma da sua medicação e
                  acumule pontos para destravar promoções e recompensas exclusivas.
                </p>
              </div>
              <div className="col-md-6">

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CABECALHO PAGINA */}
      <div className="container">
        <div className="header-follow-routine d-flex">
          <span>
            Rotinas em andamento (1)
          </span>
          <button className="ms-auto new-routine">
            + Nova rotina
          </button>
        </div>
      </div>


      {/* CARD DE REMEDIO */}
      <div className="container">
        <div className="row">
          <div className="card-routine">

            <div className="header-card d-flex align-items-center">
              <h4>DORFLEX</h4>
              <div className="form-check form-switch ms-auto">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                <label className="form-check-label" for="flexSwitchCheckChecked">Desativar notificação</label>
              </div>
            </div>
            <hr />
            <div className="footer-card">
              <div className="d-flex align-items-center">
                <div className="d-block me-auto p-3 rounded">
                  <div>Quantidade</div>
                  <strong>1 caixa</strong>
                </div>
                <div className="me-auto p-3 rounded">
                  <div>Término do tratamento</div>
                  <strong>1 caixa</strong>
                </div>
                <div className="d-block me-2 d-block me-auto p-3 rounded">
                  <div>Horário</div>
                  <strong>7:00 | 19:00</strong>
                </div>
                <div className="d-block me-auto p-3 rounded">
                  <div>Quantidade</div>
                  <strong className="">5 caixas </strong>
                </div>
                <div className="d-flex flex-column text-center">
                  <a href="" className="mb-2">Mostrar detalhes </a>
                  <button className="finished-routine">Finalizar rotinhas</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>

  )
}