// Exibe os resultados formatados. Se não houver número, mostra "--".
export default function Results({
  // Props opcionais para anos, meses e dias
  years,
  months,
  days,
}: {
  // Cada prop pode ser um número ou indefinida
  years?: number;
  months?: number;
  days?: number;
}) {
  // Função auxiliar para formatar os valores
  const fmt = (v?: number) => (typeof v === "number" ? String(v) : "--");
  return (
    <div
      // Estilização para o contêiner dos resultados
      className="mt-6 text-6xl sm:text-8xl
font-extrabold leading-tight"
    >
      <p>
        <span
          // Estilização para o valor dos anos
          className="text-[var(--accent)] font-extrabold"
        >
          {fmt(years)}
        </span>{" "}
        <span
          // Estilização para o texto "years"
          className="italic font-extrabold"
        >
          years
        </span>
      </p>
      <p>
        <span
          // Estilização para o valor dos meses
          className="text-[var(--accent)] font-extrabold"
        >
          {fmt(months)}
        </span>{" "}
        <span
          // Estilização para o texto "months"
          className="italic font-extrabold"
        >
          months
        </span>
      </p>
      <p>
        <span
          // Estilização para o valor dos dias
          className="text-[var(--accent)] font-extrabold"
        >
          {fmt(days)}
        </span>{" "}
        <span
          // Estilização para o texto "days"
          className="italic font-extrabold"
        >
          days
        </span>
      </p>
    </div>
  );
}
