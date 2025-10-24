export default function LoadingSpinner({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <span className="loading loading-spinner loading-lg text-primary mb-3"></span>
      {label && <p className="text-sm text-base-content/60">{label}</p>}
    </div>
  );
}