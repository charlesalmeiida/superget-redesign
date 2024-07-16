import IconCheck from "../assets/svg/icon-check.svg"
import IconMoney from "../assets/svg/icon-money.svg"
import IconCalculator from "../assets/svg/icon-calculator.svg"

export function Benefits() {
  return (
    <section className="s-benefits">
      <div className="container">
        <div className="left">
          <h3>2%</h3>
          <strong>de taxa única</strong>
          <p>crédito à vista e débito</p>
        </div>
        <div className="right">
          <h4>Como aproveitar?</h4>
          <ul>
            <li>
              <div className="icon">
                <img src={IconCalculator} alt="" />
              </div>
              <span>
                Compre e pague sua <strong>SuperGet</strong>
              </span>
            </li>
            <li>
              <div className="icon">
                <img src={IconCheck} alt="" />
              </div>
              <span>
                Faça seu cadastro no site da <strong>Getnet</strong>
              </span>
            </li>
            <li>
              <div className="icon">
                <img src={IconMoney} alt="" />
              </div>
              <span>
                Ative sua maquininha e <strong>comece a vender</strong>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
