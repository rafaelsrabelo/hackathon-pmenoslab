import './styles.css';
export default function CardsHighlights() {
  return (
    <div className="content">
      < div className="container" >
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <div className="assinatura">
              <div className="card-content">
                <small>DESTAQUE</small>
                <h2>Assinatura Pague menos</h2>
                <p>Agende a compra automática dos seus produtos favoritos de forma periódica e receba no conforto da sua casa</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xs-12">
            <div className="fidelidade">
              <div className="card-content">
                <small>DESTAQUE</small>
                <h2>Fidelidade sempre</h2>
                <p>Acompanhe o ranking em tempo real do nosso programa de benefícios exclusivos para clientes Azul e Ouro.</p>
              </div>
            </div>
          </div>
        </div>
      </div >
    </ div>
  )
}