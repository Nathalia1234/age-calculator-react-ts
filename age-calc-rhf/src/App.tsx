import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Card from "./components/card";
import Input from "./components/ui/Input";
import ArrowButton from "./components/ArrowButton";
import Results from "./components/Results";
import { diffYMD, isRealPastDate } from "./lib/diff";

type FormData = { day: string; month: string; year: string };

export default function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    watch,
    reset,
  } = useForm<FormData>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: { day: "", month: "", year: "" },
  });

  const [age, setAge] = useState<{
    years?: number;
    months?: number;
    days?: number;
  }>({});

  const [day, month, year] = watch(["day", "month", "year"]);
  const filled = Boolean(day && month && year);

  // useEffect – foca no primeiro campo com erro a cada submit
  useEffect(() => {
    const first = document.querySelector(
      "[aria-invalid='true']"
    ) as HTMLInputElement | null;
    if (first) first.focus();
  }, [errors]);

  // submit
  const onSubmit = (data: FormData) => {
    const d = Number(data.day),
      m = Number(data.month),
      y = Number(data.year);

    if (!isRealPastDate(y, m, d)) {
      setError("day", {
        type: "manual",
        message: "Invalid date or in the future",
      });
      setAge({});
      return;
    }
    const res = diffYMD(new Date(y, m - 1, d));
    setAge(res);
  };

  return (
    <div className="min-h-screen grid place-items-center bg-gradient-to-b from-gray-100 to-gray-50 p-4">
      <Card>
        <form
          id="age-form"
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end"
        >
          <Input
            label="Day"
            placeholder="DD"
            inputMode="numeric"
            maxLength={2}
            {...register("day", {
              required: "This field is required",
              validate: (v) =>
                /^\d+$/.test(v) ? true : "Only numbers are allowed",
              min: { value: 1, message: "Invalid day" },
              max: { value: 31, message: "Invalid day" },
            })}
            error={errors.day?.message}
          />
          <Input
            label="Month"
            placeholder="MM"
            inputMode="numeric"
            maxLength={2}
            {...register("month", {
              required: "This field is required",
              validate: (v) =>
                /^\d+$/.test(v) ? true : "Only numbers are allowed",
              min: { value: 1, message: "Invalid month" },
              max: { value: 12, message: "Invalid month" },
            })}
            error={errors.month?.message}
          />
          <div className="relative">
            <Input
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
              error={errors.year?.message}
            />
          </div>
        </form>

        {!filled && (
          <p className="mt-2 text-sm text-red-500 font-medium">
            Fill in day, month, and year
          </p>
        )}
        {/* divisor com botão sobreposto, estilo do mock */}
        <div className="relative my-6 flex items-center justify-between">
          <hr className="flex-1 border-t border-gray-200" />

          <div className="flex gap-3">
            <ArrowButton form="age-form" />
            <button
              type="button"
              onClick={() => reset()} // reset vem do React Hook Form
              className="h-16 w-16 rounded-full grid place-items-center
             bg-[#854DFF] text-white shadow-md
             hover:bg-neutral-900 focus:outline-none focus:ring-4 focus:ring-purple-200
             active:translate-y-px transition"
            >
              ↺
            </button>
          </div>
        </div>

        {/* Hook 3: useState nos resultados; e usamos useMemo/useEffect acima */}
        <Results years={age.years} months={age.months} days={age.days} />
      </Card>
    </div>
  );
}
