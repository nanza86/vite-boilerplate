import { Card } from "../../components/Card";
import "./styles.css";

export default function Home() {
  return (
    <div className="container">
      <h1>Lista de Presença</h1>
      <input type="text" placeholder="Digite o nome" />
      <button type="button">Adicionar</button>

      <Card/>
    </div>
  );
}
