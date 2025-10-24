import type { FilterQuestionsProps } from "../types";
import { OPTION } from "../constants/constants";

const viewOptions = [
    { key: OPTION.category, label: "Category" },
    { key: OPTION.difficulty, label: "Difficulty" },
];

const FilterQuestions: React.FC<FilterQuestionsProps> = ({
    activeFilter,
    onChange,
}) => (
    <div className="flex flex-col items-start gap-2 px-3 py-3">
        <span className="label-text text-sm text-base-content/70">
            View questions by:
        </span>

        <div className="join flex flex-row flex-wrap items-center gap-2">
            {viewOptions.map((option) => (
            <label
                key={option.key}
                className="flex items-center gap-2 join-item  py-2 cursor-pointer rounded-md transition-colors duration-150  ">
                <input
                    type="radio"
                    name="radio-5"
                    className={`radio radio-sm ${
                        activeFilter === option.key
                            ? "radio-base-content"
                            : "radio-base-300"
                    }`}
                    checked={activeFilter === option.key}
                    onChange={() => {
                        onChange(option.key);
                    }}
                />
                <p className="text-sm font-medium text-base-content/80">
                    {option.label}
                </p>
            </label>
        ))}
        </div>
    </div>
);

export default FilterQuestions;
