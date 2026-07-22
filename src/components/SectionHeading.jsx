export default function SectionHeading({ eyebrow, title, action }) {
  return (
    <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
      <div>
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-blueGlow">
            {eyebrow}
          </p>
        )}
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
          {title}
        </h2>
      </div>

      {action ? <div>{action}</div> : null}
    </div>
  );
}
