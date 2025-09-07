# Age Calculator - React + TypeScript + RHF + Tailwind

Este projeto é a minha solução para o desafio [Age Calculator App](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q) do **Frontend Mentor** com mais alguns incrementos solicitados pelo professor na matéria de Desenvolvimento FullStack.

A aplicação calcula idade em anos, meses e dias a partir de uma data de nascimento.

Projeto construído com React + TypeScript, TailwindCSS e React Hook Form (com Zod para validação).

O layout foi mantido em inglês para garantir fidelidade ao desafio do Frontend Mentor.

---

## 🔗 Deploy

Produção (Vercel): [https://age-calculator.nathaliaohana.dev](https://age-calculator.nathaliaohana.dev)

Subdomínio próprio configurado conforme solicitado na tarefa.

---

## ✅ Funcionalidades Atuais

- O usuário informa dia, mês e ano de nascimento.

- A aplicação calcula automaticamente anos, meses e dias de idade.

- Validação completa de formulário com Zod.

- Mensagens de erro dinâmicas.

- Responsividade testada em múltiplos dispositivos.

- Layout em inglês para manter fidelidade ao desafio original.

---

## ✨ Estrutura da Solução

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
  - `ArrowButton` → botão de envio com ícone de seta em SVG
  - `Results` → exibe a idade em anos, meses e dias
- **Hooks utilizados**:
  - `useState`: Controle de anos/meses/dias calculados.
  - `useEffect`: Para pequenos resets/efeitos.
  - `useForm` (React Hook Form): registro dos inputs, submit, erros.
- **Design responsivo**:
  - Mobile (a partir de 320px)
  - Tablet (540px / 768px)
  - Desktop (≥ 1024px)
- **Acessibilidade**:
  - Campos com **aria-invalid** quando há erro.
  - Mensagens vinculadas via **aria-describedby**.
  - Resultados com região **aria-live** para leitura por leitores de tela.

---

## 📷 Demonstração

![Preview do layout](/age-calc-rhf/src/assets/images/Layout.png)

---

## 🚀 Stack & Bibliotecas

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Hook Form](https://react-hook-form.com/)

---

## ▶️ Como executar localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/Nathalia1234/age-calculator-react-ts/tree/main/age-calc-rhf
   ```

2. Entre na pasta do projeto:

   ```bash
   cd age-calc-rhf
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

Obs.: Se você clonou o projeto, lembre de rodar **npm install** antes de **npm run dev**, pois **node_modules** não vem no Git.
