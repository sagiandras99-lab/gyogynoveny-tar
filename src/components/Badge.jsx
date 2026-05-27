export default function Badge({ children, variant = 'neutral' }) {
  const classes = {
    neutral: 'bg-mintleaf/40 text-forest',
    success: 'bg-forest text-softcream',
    warning: 'bg-wood text-softcream',
    info: 'bg-sand/70 text-forest'
  };

  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] ${classes[variant] || classes.neutral}`}>
      {children}
    </span>
  );
}
