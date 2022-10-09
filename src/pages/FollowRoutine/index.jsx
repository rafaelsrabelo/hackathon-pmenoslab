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
            ROTINAS EM ANDAMENTO (1)
          </span>
          <button className="ms-auto new-routine">
            + NOVA ROTINA
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
                <label className="form-check-label" for="flexSwitchCheckChecked">DESATIVAR NOTIFICAÇÃO</label>
              </div>
            </div>
            <hr />
            <div className="footer-card">
              <div className="d-flex align-items-center">
                <div className="d-block me-2">
                  <p>QUANTIDADE</p>
                  <p>1 caixa</p>
                </div>
                <div className="d-block me-2">
                  <p>QUANTIDADE</p>
                  <p>1 caixa</p>
                </div>
                <div className="d-block me-2">
                  <p>QUANTIDADE</p>
                  <p>1 caixa</p>
                </div>
                <div className="d-block me-auto">
                  <p>QUANTIDADE</p>
                  <p>1 caixa</p>
                </div>
                <button className="finished-routine">FINALIZAR ROTINA</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>

  )
}