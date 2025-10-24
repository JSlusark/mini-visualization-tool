export default function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="text-center text-error py-20">
      <p className="font-semibold">Error loading data</p>
      <p className="text-sm opacity-80">{message}</p>
    </div>
  );
}