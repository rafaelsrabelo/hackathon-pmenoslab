import './styles.css';
import InformationImg from '../../assets/i.svg';
import ArrowRightBlue from '../../assets/arrow-right-right.svg';
import Phone from '../../assets/phone.svg';
import Check from '../../assets/check.svg';

export default function CardsInformations() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-xs-6">
          <div className="content-card d-block">
            <img src={InformationImg} alt="" />
            <h4 className='title-dados'>
              Mantenha seus
              dados atualizados!
            </h4>
            <p className='description-dados'>
              Melhore sua experiência.
            </p>
            <a className='edit-profile d-flex align-items-center'>
              EDITE SEU PERFIL
              <img src={ArrowRightBlue} className="ms-2" alt="" />
            </a>
          </div>
        </div>
        <div className="col-md-3 col-xs-6">
          <div className="content-card d-block">
            <img src={Check} alt="" />
            <h4 className='title-dados'>
              Acompanhe sua rotina
            </h4>
            <p className='description-dados'>
              Veja sua programação detalhada
            </p>
            <a className='edit-profile d-flex align-items-center'>
              FAÇA SEU ACOMPANHAMENTO
              <img src={ArrowRightBlue} className="ms-2" alt="" />
            </a>
          </div>
        </div>
        <div className="col-md-4 col-xs-12">
          <div className="content-card-pamela d-block">
            <img src={Phone} alt="" />
            <h4 className='title-dados-pamela'>
              Fale com a Pamela
            </h4>
            <p className='description-dados-pamela'>
              Tire suas dúvidas com a nossa Farmacêutica Clínica
            </p>
            <a className='edit-profile d-flex align-items-center text-white'>
              ENTRE EM CONTATO
              <img src={ArrowRightBlue} className="ms-2" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}