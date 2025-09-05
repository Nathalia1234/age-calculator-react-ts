export type Age = { years: number; months: number; days: number };

export function daysInMonth(year: number, monthIndex0: number) {
  // monthIndex0: 0..11
  return new Date(year, monthIndex0 + 1, 0).getDate();
}

export function diffYMD(from: Date, to: Date = today()): Age {
  let y = to.getFullYear() - from.getFullYear();
  let m = to.getMonth() - from.getMonth();
  let d = to.getDate() - from.getDate();

  if (d < 0) {
    m -= 1;
    const prevMonthDays = daysInMonth(
      to.getFullYear(),
      (to.getMonth() + 11) % 12
    );
    d += prevMonthDays;
  }
  if (m < 0) {
    y -= 1;
    m += 12;
  }
  return { years: y, months: m, days: d };
}

export function today() {
  const t = new Date();
  return new Date(t.getFullYear(), t.getMonth(), t.getDate());
}

export function isRealPastDate(y: number, m: number, d: number): boolean {
  if (!Number.isInteger(y) || !Number.isInteger(m) || !Number.isInteger(d))
    return false;
  if (m < 1 || m > 12) return false;
  const maxD = daysInMonth(y, m - 1);
  if (d < 1 || d > maxD) return false;
  const dt = new Date(y, m - 1, d);
  return dt.getTime() < today().getTime();
}
