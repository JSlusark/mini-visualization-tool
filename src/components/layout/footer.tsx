export default function Footer() {
  return (
    <footer className="text-center text-sm text-base-content/60 py-0">
      <p>
        Built by{" "}
        <a
          href="https://github.com/jess-slusark"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium hover:underline"
        >
          Jessica Slusark
        </a>{" "}
        ·{" "}
        <a
          href="https://github.com/JSlusark/mini-visualization-tool"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-medium hover:underline"
        >
          View on GitHub
        </a>
      </p>
    </footer>
  );
}