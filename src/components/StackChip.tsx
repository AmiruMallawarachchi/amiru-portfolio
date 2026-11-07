// Captions are CSS-only (hover + focus-within), so they work with the keyboard
// and with JavaScript disabled. The note is also mirrored into data attributes
// for devtools and into a screen-reader-only span for assistive tech.
export default function StackChip({ name, note }: { name: string; note: string }) {
  return (
    <span
      tabIndex={0}
      className="stack-chip rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-xs outline-offset-4 transition-colors hover:border-accent/40 hover:text-accent focus-visible:border-accent/40"
      data-tech={name}
      data-note={note}
    >
      {name}
      <span role="tooltip" aria-hidden="true" className="stack-chip-note">
        {note}
      </span>
      <span className="sr-only">: {note}</span>
    </span>
  );
}
