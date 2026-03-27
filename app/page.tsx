export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center bg-slate-50 p-8 text-center text-slate-900 dark:bg-slate-900 dark:text-slate-50">
      <div className="max-w-2xl">
        <h1 className="flex items-center gap-3 text-5xl font-bold before:flex before:h-8 before:w-0.5 before:bg-sky-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <p className="mt-4 dark:text-slate-400">
          Commodi eum magni quos, eius rerum reprehenderit accusantium
          voluptates saepe! Voluptas non quaerat, aliquam modi harum neque iste
          repellat nihil quia facere.
        </p>
        <button className="mt-4 rounded-md bg-sky-500 px-4 py-2 font-medium text-white disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-sky-600">
          Sign in
        </button>
      </div>
    </div>
  );
}
