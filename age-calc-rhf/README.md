# Age Calculator App

Este projeto é a minha solução para o desafio [Age Calculator App](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q) do **Frontend Mentor**.

A aplicação foi desenvolvida utilizando **React + TypeScript + Tailwind CSS + React Hook Form**.

> Obs.: O layout e os textos foram mantidos em **inglês** para garantir fidelidade ao design original do desafio.

---

## ✨ Funcionalidades

- Campos de entrada para **Day / Month / Year**
- **Validação de formulário**:
  - Campos obrigatórios
  - Intervalos válidos (1–31 para dias, 1–12 para meses, ano ≤ ano atual)
  - Verificação de datas inválidas (ex.: 31/04 é rejeitado)
  - Bloqueio de datas futuras
- **Mensagens de erro em inglês**, como no desafio original
- **Componentização**:
  - `Card` → container principal do layout
  - `Input` → inputs com label, placeholder e mensagem de erro
  - `ArrowButton` → botão de envio com ícone em SVG
  - `ClearButton` → botão para limpar o formulário
  - `Results` → exibe a idade em anos, meses e dias
- **Hooks utilizados**:
  - `useState`
  - `useEffect`
  - `useForm` (React Hook Form)
- **Design responsivo**:
  - Mobile (a partir de 320px)
  - Tablet (540px / 768px)
  - Desktop (≥ 1024px)

---

## 📷 Demonstração

![Preview do layout](/age-calc-rhf/src/assets/images/Layout.png)

---

## 🚀 Tecnologias utilizadas

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Hook Form](https://react-hook-form.com/)

---

## ▶️ Como executar localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/age-calculator-app.git
   ```

2. Entre na pasta do projeto:

   ```bash
   cd age-calculator-app
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Execute o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Acesse no navegador:

   ```bash
   http://localhost:5173/
   ```

## 🌐 Deploy

Este projeto está disponível no Vercel: https://age-calculator-react-ts.vercel.app/
