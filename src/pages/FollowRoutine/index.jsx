import Header from "../../components/Header";
import './styles.css';
import Notificacao from '../../assets/img/notificacao.svg';

export function FollowRoutine() {
  return (
    <>
      <Header />

      {/* BANNER DA PAGINA */}
      <div className="container">

        <div className="banner">
          <div className="container">
            <div className="row d-flex align-items-center">
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
                <img src={Notificacao} className="img-fluid notificacao" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CABECALHO PAGINA */}
      {/* <div className="container">
        <div className="header-follow-routine">
          <span>
            Rotinas em andamento (1)
          </span>
          <button className="new-routine">
            + Nova rotina
          </button>
        </div>
      </div> */}
      <div className="container">
        <p className="text-end mt-5">Rotinas em andamento (1)</p>
      </div>


      {/* CARD DE REMEDIO */}
      <div className="container">
        <div className="row">
          <div className="card-routine mb-5">

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
                {/* <div className="d-flex flex-column text-center">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Mostrar detalhes
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>

                </div> */}
                {/* <button className="finished-routine">Finalizar rotinhas</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>

    </>

  )
}


<script>
</script>