import { useEffect, useState } from "react"; // useEffect para focar no primeiro campo com erro
import { useForm } from "react-hook-form"; // useForm para gerenciar o formulário
import Card from "./components/Card"; // Card para estilizar o contêiner do formulário
import Input from "./components/ui/Input"; // Input para os campos do formulário
import ArrowButton from "./components/ArrowButton"; // ArrowButton para o botão de envio
import Results from "./components/Results"; // Results para exibir os resultados
import { diffYMD, isRealPastDate } from "./lib/diff"; // funções auxiliares para cálculo de idade

// Tipagem do formulário (todos como string porque vêm de <input>).
type FormData = { day: string; month: string; year: string };

// Componente principal da aplicação
export default function App() {
  // Hook 1: useForm para gerenciar o formulário
  // Configurações: validação ao enviar, valores padrão vazios
  // Desestruturação para obter funções e estados necessários
  // Inicializa o RHF: register, submit, setError, errors, watch, reset.
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    watch,
    reset,
  } = useForm<FormData>({
    mode: "onSubmit", // validação ao enviar
    reValidateMode: "onSubmit", // revalida ao enviar
    defaultValues: { day: "", month: "", year: "" }, // inicia vazio
  });

  // Hook 2: useState para armazenar os resultados do cálculo de idade
  // Inicialmente vazio, será preenchido após o cálculo
  const [age, setAge] = useState<{
    years?: number; // anos, meses e dias são opcionais
    months?: number;
    days?: number;
  }>({});

  // Verifica se todos os campos estão preenchidos
  // Usado para exibir mensagem de preenchimento obrigatório
  const [day, month, year] = watch(["day", "month", "year"]);
  const filled = Boolean(day && month && year);

  // useEffect – foca no primeiro campo com erro a cada submit (acessibilidade).
  useEffect(() => {
    // se houver erros, foca no primeiro campo com erro
    if (Object.keys(errors).length === 0) return;
    // querySelector para encontrar o primeiro campo com aria-invalid="true"
    // e foca nele
    const first = document.querySelector(
      "[aria-invalid='true']"
    ) as HTMLInputElement | null;
    if (first) first.focus();
  }, [errors]);

  // Função chamada ao enviar o formulário
  // Recebe os dados do formulário, valida a data e calcula a idade
  // Se a data for inválida ou futura, define um erro manualmente
  // Caso contrário, calcula a diferença e atualiza o estado 'age'
  const onSubmit = (data: FormData) => {
    const d = Number(data.day), // converte strings para números
      m = Number(data.month), // meses em JS são 0-11, mas aqui usamos 1-12
      y = Number(data.year); // então subtraímos 1 ao criar a Date

    // Valida data real e no passado. Se inválida, zera resultado e marca erro.
    if (!isRealPastDate(y, m, d)) {
      // define erro manualmente no campo "day"
      setError("day", {
        type: "manual", // erro manual
        message: "Invalid date or in the future", // mensagem de erro
      });
      // limpa resultados anteriores
      setAge({});
      return;
    }
    // se válido, calcula a diferença entre a data informada e hoje.
    const res = diffYMD(new Date(y, m - 1, d));
    // atualiza o estado com os resultados
    setAge(res);
  };

  return (
    <div
      // Plano de fundo neutro e centralização vertical.
      className="min-h-screen grid place-items-center bg-gradient-to-b from-gray-100 to-gray-50 p-4"
    >
      <Card>
        {/* Formulário em grid: 1 coluna no mobile, 3 em telas >= sm */}
        <form
          // formulário com id para associar ao botão
          id="age-form"
          // associa o botão de envio ao formulário
          onSubmit={handleSubmit(onSubmit)}
          // grid responsivo: 1 coluna no mobile, 3 em telas maiores
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end"
        >
          <Input
            // campo de entrada para o dia
            label="Day"
            placeholder="DD"
            inputMode="numeric"
            // permite apenas números
            maxLength={2}
            // registra o campo no RHF com validações
            {...register("day", {
              // campo obrigatório
              required: "This field is required",
              // validação personalizada: apenas números
              validate: (v) =>
                /^\d+$/.test(v) ? true : "Only numbers are allowed",
              min: { value: 1, message: "Invalid day" },
              max: { value: 31, message: "Invalid day" },
            })}
            error={errors.day?.message}
          />
          <Input
            // campo de entrada para o mês
            label="Month"
            placeholder="MM"
            inputMode="numeric"
            maxLength={2}
            // registra o campo no RHF com validações
            {...register("month", {
              // campo obrigatório
              required: "This field is required",
              // validação personalizada: apenas números
              validate: (v) =>
                /^\d+$/.test(v) ? true : "Only numbers are allowed",
              min: { value: 1, message: "Invalid month" },
              max: { value: 12, message: "Invalid month" },
            })}
            // passa a mensagem de erro, se houver
            error={errors.month?.message}
          />
          <div
            // wrapper relativo para posicionar elementos filhos se necessário
            className="relative"
          >
            <Input
              // campo de entrada para o ano
              label="Year"
              placeholder="AAAA"
              inputMode="numeric"
              maxLength={4}
              {...register("year", {
                required: "This field is required",
                validate: (v) =>
                  /^\d+$/.test(v) ? true : "Only numbers are allowed",
                min: { value: 1, message: "Invalid year" },
                max: {
                  value: new Date().getFullYear(),
                  message: "Invalid year",
                },
              })}
              // passa a mensagem de erro, se houver
              error={errors.year?.message}
            />
          </div>
        </form>
        {/* Mensagem geral logo abaixo do form — só aparece se faltar preencher. */}
        {!filled && (
          <p className="mt-2 text-sm text-red-500 font-medium">
            Fill in day, month, and year
          </p>
        )}
        {/* Divisor com linha contínua e botões sobrepostos (não quebra no mobile). */}
        <div className="relative my-6">
          {/* linha ocupa toda a largura */}
          <div className="h-px bg-gray-200"></div>

          {/* Botões posicionados por cima da linha, colados à direita */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex gap-3">
            {/* Botão de calcular envia o form pelo id (mesmo fora do form). */}
            <ArrowButton
              // botão de envio
              form="age-form"
              // associa ao formulário pelo id
              className="h-12 w-12 sm:h-16 sm:w-16"
            />
            {/* Botão para limpar o formulário (usa reset do RHF). */}
            <button
              type="button"
              // limpa os campos do formulário
              onClick={() => reset()}
              // estilo do botão
              className="h-12 w-12 sm:h-16 sm:w-16 rounded-full grid place-items-center
                 bg-[#854DFF] text-white shadow-md
                 hover:bg-neutral-900 focus:outline-none focus:ring-4 focus:ring-purple-200
                 active:translate-y-px transition"
              // acessibilidade
              aria-label="Clear form"
              title="Clear"
            >
              {/* Ícone Unicode simples de "reset" */}↺
            </button>
          </div>
        </div>

        {/* Hook 3: useState nos resultados; e usamos useMemo/useEffect acima */}
        {/* Resultados (anos, meses, dias) */}
        <Results years={age.years} months={age.months} days={age.days} />
      </Card>
    </div>
  );
}
