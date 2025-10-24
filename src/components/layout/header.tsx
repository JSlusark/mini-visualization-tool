export default function Header() {
  return (
    <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-center md:text-left text-primary">
        Trivia Visualizer
      </h1>
    </header>
  );
}