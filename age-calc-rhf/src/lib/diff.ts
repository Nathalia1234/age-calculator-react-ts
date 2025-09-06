// Define o formato do resultado do cálculo de idade.
export type Age = { years: number; months: number; days: number };

// Retorna quantos dias existem em um mês específico.
// monthIndex0 usa base 0 (0 = jan .. 11 = dez), igual ao Date do JS.
export function daysInMonth(year: number, monthIndex0: number) {
  // Truque: dia 0 do mês seguinte = último dia do mês atual.
  return new Date(year, monthIndex0 + 1, 0).getDate();
}

// Calcula diferença em anos/meses/dias entre duas datas.
// from = data de nascimento; to = data de referência (padrão: hoje).
export function diffYMD(from: Date, to: Date = today()): Age {
  // Começa com difs brutas de Y/M/D.
  let y = to.getFullYear() - from.getFullYear();
  let m = to.getMonth() - from.getMonth();
  let d = to.getDate() - from.getDate();

  // Se o dia ficou negativo, "empresta" 1 mês e soma os dias do mês anterior.
  if (d < 0) {
    m -= 1;
    const prevMonthDays = daysInMonth(
      to.getFullYear(),
      // (mês atual - 1) com wrap usando +11 % 12
      (to.getMonth() + 11) % 12
    );
    d += prevMonthDays;
  }
  // Se o mês ficou negativo, "empresta" 1 ano e normaliza para faixa 0..11.
  if (m < 0) {
    y -= 1;
    m += 12;
  }
  // Retorna idade normalizada.
  return { years: y, months: m, days: d };
}

// Normaliza "hoje" zerando horas/minutos/segundos (evita bugs de fuso).
export function today() {
  const t = new Date();
  return new Date(t.getFullYear(), t.getMonth(), t.getDate());
}

// Valida se (y,m,d) formam uma data real e que esteja no passado.
export function isRealPastDate(y: number, m: number, d: number): boolean {
  // Checa se são inteiros.
  if (!Number.isInteger(y) || !Number.isInteger(m) || !Number.isInteger(d))
    return false;
  // Mês válido 1..12.
  if (m < 1 || m > 12) return false;
  // Dia válido para o mês (considera ano bissexto).
  const maxD = daysInMonth(y, m - 1);
  // Dia válido 1..max do mês/ano.
  if (d < 1 || d > maxD) return false;
  // Data deve ser menor que hoje.
  // (m-1 porque Date usa meses base 0).
  const dt = new Date(y, m - 1, d);
  // Compara em ms desde 1970.
  return dt.getTime() < today().getTime();
}
