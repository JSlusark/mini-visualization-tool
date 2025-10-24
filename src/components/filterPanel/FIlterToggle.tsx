import type { FilterToggleProps } from "../../types";
import { OPTION } from "../../constants/constants";

const viewOptions = [
    { key: OPTION.category, label: "Category" },
    { key: OPTION.difficulty, label: "Difficulty" },
];

const FilterToggle: React.FC<FilterToggleProps> = ({
    activeFilter,
    onChange,
}) => (
    <div className="flex flex-col items-start gap-2 px-3 py-3">
        <span className="label-text text-sm text-base-content/70 font-medium">
            View questions by:
        </span>

        <div className="join flex flex-row flex-wrap items-center gap-2">
            {viewOptions.map((option) => (
            <label
                key={option.key}
                className={`flex items-center gap-2  py-2 cursor-pointer rounded-lg `}>
                <input
                    type="radio"
                    name="radio-5"
                    className={`radio radio-sm ${
                        activeFilter === option.key
                            ? "radio-primary duration-500"
                            : "radio-base-300"
                    }`}
                    checked={activeFilter === option.key}
                    onChange={() => {
                        onChange(option.key);
                    }}
                />
                <p className={`text-sm font-medium transition-colors duration-500 ${
                    activeFilter === option.key
                        ? "text-primary"
                        : "text-base-300"
                }`}>
                    {option.label}
                </p>
            </label>
        ))}
        </div>
    </div>
);

export default FilterToggle;
