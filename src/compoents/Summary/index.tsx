import { Container } from "./styles";
import IncomeImg from "../../assets/income.svg";
import OutcomeImg from "../../assets/outcome.svg";
import Total from "../../assets/total.svg";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={IncomeImg} alt="Entradas" />
        </header>
        <strong>R$1000.00</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={OutcomeImg} alt="Entradas" />
        </header>
        <strong>-R$1000.00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={Total} alt="Entradas" />
        </header>
        <strong>R$1000.00</strong>
      </div>
    </Container>
  );
}
