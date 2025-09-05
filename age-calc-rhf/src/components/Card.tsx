export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-2xl bg-white shadow-xl p-6 sm:p-10 rounded-2xl sm:rounded-br-[8rem]">
      {children}
      <p className="mt-8 text-center text-xs text-purple-500">
        Created by <span className="font-semibold">Nathalia Ohana</span>
      </p>
    </div>
  );
}
