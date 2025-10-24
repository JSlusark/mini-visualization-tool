export default function EmptyState() {
  return (
    <div className="text-center py-20 text-base-content/70">
      <p className="text-lg font-semibold">No trivia data available</p>
      <p className="text-sm opacity-75 mt-1">Try adjusting your filters or reload.</p>
    </div>
  );
}