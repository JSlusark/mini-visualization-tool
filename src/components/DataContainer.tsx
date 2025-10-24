import { loadTriviaData } from "../hooks/loadTriviaData";
import LoadingSpinner from "./loading/LoadingSpinner";
import ErrorMessage from "./loading/ErrorMessage";
import EmptyState from "./loading/EmptyState";
import Chart from "./chart/Chart";
import FilterPanel from "./filterPanel/FilterPanel";
import { OPTION } from "../constants/constants";
import { useState } from "react";

export default function DataContainer() {
  const { data, isLoading, error } = loadTriviaData(50);
  const [activeFilter, setActiveFilter] = useState(OPTION.category);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  if (isLoading) return <LoadingSpinner label="Loading trivia data..." />;
  if (error) return <ErrorMessage message={error} />;
  if (!data || data.length === 0) return <EmptyState />;

  return (
    <section className="card bg-base-100 shadow-md max-w-[80%] mx-auto py-6">
      <FilterPanel
        data={data}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <Chart
        data={data}
        selectedCategory={selectedCategory}
        activeFilter={activeFilter}
      />
    </section>
  );
}