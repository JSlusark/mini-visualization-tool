import type { TriviaQuestion } from "../types";

export function filterData(
    data: TriviaQuestion[],
    selectedCategory: string | null,
    filterType: string
) {
    let funnel = data;
    if (selectedCategory) {
        funnel = data.filter((q) => q.category === selectedCategory);
    }

    console.log(`Filtered data by: ${filterType} | Active Category:${selectedCategory ? selectedCategory : "all"}`);
    return filterByField(funnel, filterType);
}

function filterByField(data: TriviaQuestion[], filterType: string) {
    const funnel: { value: string; count: number }[] = [];

    data.forEach((question) => {
        const newfield = question[filterType as keyof TriviaQuestion] as string;
        const existing = funnel.find((f) => f.value === newfield);
        if (existing) {
            existing.count++;
        } else {
            funnel.push({ value: newfield, count: 1 });
        }
    });

    return funnel;
}
