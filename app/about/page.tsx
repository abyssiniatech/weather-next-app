export default function AboutPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-xl bg-white/10 backdrop-blur p-6 rounded-xl">
        <h1 className="text-2xl font-bold mb-4">About This App</h1>
        <p className="text-gray-200 leading-relaxed">
          This Weather App is built using Next.js 16, TypeScript, Tailwind CSS,
          and Axios. It demonstrates modern frontend architecture, clean
          component design, and real-world API integration.
        </p>
      </div>
    </main>
  );
}
