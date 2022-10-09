import './styles.css';

// PRODUTOS IMG
import Centrum from '../../assets/products/remedio1.png';
import Cewin from '../../assets/products/remedio2.png';
import Lufta from '../../assets/products/remedio3.png';
import Promax from '../../assets/products/remedio4.png';

export default function Recommendation() {
  return (
    <>
      <div className="header-title">
        <div className="container">
          <h3 className='py-3'>Oi Rafael, pensando nas dificuldades dessa epoca</h3>
        </div>
      </div>

      <div id="carouselExampleControls" className="carousel slide pb-5" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="container">

            <div className="carousel-item active">
              <div className="product text-center">
                <div className="row">
                  <div className="col-md-3">
                    <img src={Centrum} className="img-fluid" alt="" />
                    <h5 className='mt-5'>Centrum Essentials Mulher Com 30 Comprimidos Revestidos</h5>
                    <p>R$ 9,99</p>
                    <button>Saiba mais</button>
                  </div>
                  <div className="col-md-3">
                    <img src={Lufta} className="img-fluid" alt="" />
                    <h5 className='mt-5'>LuftaGastroPro Sachê Líquido - 12 Sachês de 10ml
                    </h5>
                    <p>R$ 28,25</p>
                    <button>Saiba mais</button>
                  </div>
                  <div className="col-md-3">
                    <img src={Cewin} className="img-fluid" alt="" />
                    <h5 className='mt-5'>Cewin 1g Laranja Com 10 Comprimidos Efervescentes
                    </h5>
                    <p>R$ 12,95</p>
                    <button>Saiba mais</button>
                  </div>
                  <div className="col-md-3">
                    <img src={Promax} className="img-fluid" alt="" />
                    <h5 className='mt-5'>Extrato Própolis Propomax Sem Álcool 30ml
                    </h5>
                    <p>R$ 9,99</p>
                    <button>Saiba mais</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item active">
              <div className="product text-center">
                <div className="row">
                  <div className="col-md-3">
                    <img src={Centrum} className="img-fluid" alt="" />
                    <h5 className='mt-5'>Centrum Essentials Mulher Com 30 Comprimidos Revestidos</h5>
                    <p>R$ 9,99</p>
                    <button>Saiba mais</button>
                  </div>
                  <div className="col-md-3">
                    <img src={Lufta} className="img-fluid" alt="" />
                    <h5 className='mt-5'>LuftaGastroPro Sachê Líquido - 12 Sachês de 10ml
                    </h5>
                    <p>R$ 28,25</p>
                    <button>Saiba mais</button>
                  </div>
                  <div className="col-md-3">
                    <img src={Cewin} className="img-fluid" alt="" />
                    <h5 className='mt-5'>Cewin 1g Laranja Com 10 Comprimidos Efervescentes
                    </h5>
                    <p>R$ 12,95</p>
                    <button>Saiba mais</button>
                  </div>
                  <div className="col-md-3">
                    <img src={Promax} className="img-fluid" alt="" />
                    <h5 className='mt-5'>Extrato Própolis Propomax Sem Álcool 30ml
                    </h5>
                    <p>R$ 9,99</p>
                    <button>Saiba mais</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}