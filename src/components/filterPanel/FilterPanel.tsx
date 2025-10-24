import CategorySelect from "./CategorySelect";
import FilterToggle from "./FIlterToggle";
import type { TriviaQuestion } from "../../types";

interface FilterToolsProps {
  data: TriviaQuestion[];
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

export default function FilterTools({
  data,
  selectedCategory,
  setSelectedCategory,
  activeFilter,
  setActiveFilter,
}: FilterToolsProps) {
  return (
    <div className="card-body py-0 px-8 flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-between">
      <CategorySelect
        data={data}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <FilterToggle
        activeFilter={activeFilter}
        onChange={setActiveFilter}
      />
    </div>
  );
}