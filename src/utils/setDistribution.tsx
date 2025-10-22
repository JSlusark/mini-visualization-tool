export function setDistribution(data: { difficulty: string }[]) {
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

    console.log(difficulty);
    console.log(difficulty.length);

    return difficulty;
}
