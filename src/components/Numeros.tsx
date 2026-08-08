import { stats } from "@/data/site";

export default function Numeros() {
  return (
    <section className="numeros" aria-label="A cooperativa em números">
      <div className="numeros-grade">
        {stats.map((item) => (
          <div key={item.label} className="numero">
            <div className="numero-valor">{item.value}</div>
            <div className="numero-label">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
