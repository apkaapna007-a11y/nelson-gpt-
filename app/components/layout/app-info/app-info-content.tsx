export function AppInfoContent() {
  return (
    <div className="space-y-4">
      <p className="text-foreground leading-relaxed">
        <span className="font-medium">NelsonGPT</span> is a Smart Pediatric Assistant.
        <br />
        Clinical mode for on-the-go answers; Academic mode for deep dives.
        <br />
        Evidence-backed with citations to Nelson’s Textbook of Pediatrics.
        <br />
      </p>
      <p className="text-foreground leading-relaxed">
        The code is available on{" "}
        <a
          href="https://github.com/apkaapna007-a11y/nelson-gpt-"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          GitHub
        </a>
        .
      </p>
    </div>
  )
}
