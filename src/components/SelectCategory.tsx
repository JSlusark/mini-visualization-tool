import { useState } from "react";
import type { TriviaQuestion } from "../types";

function SelectCategory({
    data,
    selectedCategory,
    setSelectedCategory,
}: {
    data: TriviaQuestion[];
    selectedCategory: string | null;
    setSelectedCategory: (category: string | null) => void;
}) {
    const categories = Array.from(new Set(data.map((i) => i.category)));
    categories.sort();
    categories.unshift("All categories");

    return (
           <div className=" dropdown dropdown-hover w-full sm:w-64 max-w-xs md:max-w-sm">
            <p className="label-text mb-1 text-left w-full text-sm text-base-content/70">
                Category:
            </p>

            {/* Trigger button */}
            <button
                tabIndex={0}
                className="btn btn-sm w-full h-10 bg-base-100 text-base-content border border-base-200  hover:shadow-sm transition-all duration-150 focus:outline-none text-sm">
                    {selectedCategory ? selectedCategory : "All categories"}
            </button>
                <ul
                tabIndex={0}
                className="dropdown-content bg-base-100 z-10 w-full max-h-60 overflow-auto border border-base-200 shadow-md rounded-md">
                    {categories.map((item) => {
                        if (
                            selectedCategory === item ||
                            (item === "All categories" && selectedCategory === null)
                        )
                            return null;

                        return (
                            <li key={item} value={item}>
                                <button
                                    className="w-full text-left px-3 py-2 text-sm text-base-content/80 hover:bg-accent/10 hover:text-accent active:bg-accent/70 active:text-primary-content rounded transition-colors duration-150"
                                    onClick={() => {
                                        item === "All categories"
                                            ? setSelectedCategory(null)
                                            : setSelectedCategory(item);
                                        console.log(`ACTIVATED category filter`);
                                    }}
                                >
                                    {item}
                                </button>
                            </li>
                        );
                    })}
                </ul>
        </div>
    );
}
export default SelectCategory;