import type { TriviaQuestion } from "../types";


function distributeByCategory(data: TriviaQuestion[]) {
    const category: { value: string; count: number }[] = [];

    data.forEach((question) => {
        const newCategory = question.category;
        const existing = category.find((c) => c.value === newCategory);
        if (existing) {
            existing.count++;
        } else {
            category.push({ value: newCategory, count: 1 });
        }
    });
    return category;
}

function distributeByDifficulty(data: TriviaQuestion[]) {

    let difficulty = [
        { value: "easy", count: 0 },
        { value: "medium", count: 0 },
        { value: "hard", count: 0 },
    ];

    data.forEach((question) => {
        if (question.difficulty === "easy") {
            difficulty[0].count++;
        } else if (question.difficulty === "medium") {
            difficulty[1].count++;
        } else if (question.difficulty === "hard") {
            difficulty[2].count++;
        }
    });
    return difficulty;
}

export function getDistribution(data: TriviaQuestion[], distributionType: string){
    return distributionType === "category" ? distributeByCategory(data) : distributeByDifficulty(data);
}
