export default function Home() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-col items-center mt-24">
        <img src="/logo.svg" alt="Lost on Purpose logo" className="w-32 h-32" />
        <h1 className="text-3xl font-bold mt-8 text-gray-900">
          Lost on Purpose
        </h1>
        <p className="text-base text-gray-600 mt-2">
          Learn a city by getting lost on purpose.
        </p>
      </div>

      <div className="flex flex-col gap-4 mt-auto mb-4">
        <button className="bg-orange-700 text-white font-semibold p-4 rounded-xl">
          Start a Challenge
        </button>
        <button className="border-2 font-semibold p-4 rounded-xl">
          How It Works
        </button>
      </div>
    </div>
  );
}
