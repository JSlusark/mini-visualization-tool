import type { TriviaQuestion } from "../types";

export function filterData(
    data: TriviaQuestion[],
    selectedCategory: string | null,
    activeFilter: string
) {
    let funnel = data;
    if (selectedCategory) {
        funnel = data.filter((q) => q.category === selectedCategory);
    }

    console.log(`Filtered data by: ${activeFilter} | Active Category:${selectedCategory ? selectedCategory : "all"}`);
    return filterByField(funnel, activeFilter);
}

function filterByField(data: TriviaQuestion[], activeFilter: string) {
    const funnel: { value: string; count: number }[] = [];

    data.forEach((question) => {
        const newfield = question[activeFilter as keyof TriviaQuestion] as string;
        const existing = funnel.find((f) => f.value === newfield);
        if (existing) {
            existing.count++;
        } else {
            funnel.push({ value: newfield, count: 1 });
        }
    });

    const sortedFunnel = funnel.sort((a, b) =>
        a.value.localeCompare(b.value, undefined, { sensitivity: "base" })
    );

    return sortedFunnel;
}
