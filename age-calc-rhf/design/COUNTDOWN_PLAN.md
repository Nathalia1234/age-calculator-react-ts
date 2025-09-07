# Pergunta:

Como adicionar a aba /countdown reaproveitando o formulário?

---

# Resposta:

1. Não duplicar o formulário e sim extrair para um componente reutilizável (AgeForm).

2. Adicionar rotas → criar **AppRoutes.tsx** com **React Router v7** na pasta **routes** dentro do **src**

3. Criar nova página **/countdown** e reaproveitar o mesmo formulário, trocando apenas a função de cálculo.

4. Manter **Results.tsx** para já renderizar anos/meses/dias, seja para idade ou tempo futuro.

---

## Exemplo de Rotas:

```tsx
// src/routes/AppRoutes.tsx
// ------------------------------------------------------------
// 1) Importa utilitários de rota do React Router v7
import { Routes, Route } from "react-router-dom";

// 2) Importa as páginas
import App from "../App"; // Página atual: calcula idade
import Countdown from "../Countdown"; // Nova página: calcula tempo restante

// 3) Define as rotas da aplicação
export default function AppRoutes() {
  return (
    <Routes>
      {/* Rota raiz: mantém o comportamento atual */}
      <Route path="/" element={<App />} />
      {/* Nova rota: reaproveita o MESMO formulário, muda só a função */}
      <Route path="/countdown" element={<Countdown />} />
    </Routes>
  );
}
```

## Exemplo da Página /countdown:

```tsx
// src/Countdown.tsx
// ------------------------------------------------
// Esta página demonstra como eu reaproveitaria o MESMO formulário
// e trocaria apenas a função de cálculo para "tempo restante".

import Card from "./components/ui/Card";
import Results from "./components/ui/Results";
// import AgeForm from "./components/ui/AgeForm"; // quando for extrair

export default function Countdown() {
  // Função específica para "quanto falta até a data futura"
  function calculateCountdown(day: number, month: number, year: number) {
    const today = new Date(); // data atual
    const future = new Date(year, month - 1, day); // data alvo (mês 0-based)

    // Se a data já passou (<= hoje), retorno zeros (ou exibiria uma mensagem)
    if (future <= today) return { years: 0, months: 0, days: 0 };

    // Diferença bruta em milissegundos
    const diffMs = future.getTime() - today.getTime();

    // Converte para dias inteiros
    const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    // Aproximação simples: 365 dias/ano e 30 dias/mês
    const years = Math.floor(totalDays / 365);
    const months = Math.floor((totalDays % 365) / 30);
    const days = (totalDays % 365) % 30;

    // Retorna no mesmo formato esperado por <Results />
    return { years, months, days };
  }

  return (
    <Card>
      {/* Reaproveito o MESMO formulário usado na home:
          <AgeForm onCalculate={calculateCountdown} />
          <Results years={res.years} months={res.months} days={res.days} />
         (mantido comentado para não interferir no build atual) */}
      <p className="text-sm text-gray-600">
        Nesta rota eu reaproveitaria o mesmo formulário, mudando somente a
        função para calcular tempo restante. Sem duplicar código.
      </p>
    </Card>
  );
}
```
