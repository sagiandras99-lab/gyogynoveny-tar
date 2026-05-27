const typeStyles = {
  medical: 'border-rose-200 bg-rose-50 text-rose-900',
  collection: 'border-amber-200 bg-amber-50 text-amber-900',
  legal: 'border-sky-200 bg-sky-50 text-sky-900',
  default: 'border-wood/15 bg-sand/30 text-forest/80'
};

export default function DisclaimerBox({ title, type = 'default', children }) {
  const styles = typeStyles[type] || typeStyles.default;

  return (
    <section className={`rounded-[2rem] border p-6 ${styles}`}>
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="mt-4 space-y-3 text-sm leading-7">{children}</div>
    </section>
  );
}
