export default function Footer() {
  return (
    <footer className="text-center text-sm text-base-content/60 py-6">
      <p>
        Built by{" "}
        <a
          href="https://github.com/jess-slusark"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium hover:underline"
        >
          Jess Slusark
        </a>{" "}
        ·{" "}
        <a
          href="https://github.com/jess-slusark/mini-visualization-tool"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary font-medium hover:underline"
        >
          View on GitHub
        </a>
      </p>
    </footer>
  );
}