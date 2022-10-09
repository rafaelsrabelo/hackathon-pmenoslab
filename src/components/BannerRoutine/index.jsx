import './styles.css';
import ArrowRight from '../../assets/arrow-right.svg';
import Banner from '../../assets/banner.png'

export default function BannerRoutine() {
  return (
    <div className="container">
      <div className="row">
        <div className="d-flex align-items-center">

          <div className="col-md-6 col-xs-12 banner-component">
            <h2 className='title-banner m-2'>Monte sua rotina!</h2>
            <p className='description-banner m-2'>Crie agora sua Rotina SempreBem e comece a resgatar seus prêmios</p>
            <button className='button-banner d-flex align-items-center mt-4'>
              Monte sua Rotina
              <img className='ms-2' src={ArrowRight} alt="" />
            </button>
          </div>

          <div className="col-md-6 col-xs-12 banner-component d-none d-sm-block">
            <img src={Banner} className="img-fluid w-100" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}