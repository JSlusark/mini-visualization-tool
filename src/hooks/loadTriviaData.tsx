import { useEffect, useState } from "react";
import axios from "axios";

interface TriviaQuestion {
    type: string;
    difficulty: string;
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

export const loadTriviaData = (amount: number) => {
    const [data, setData] = useState<TriviaQuestion[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios
            .get(`https://opentdb.com/api.php?amount=${amount}`)
            .then((res) => {
                    console.log(res);
                    setData(res.data.results);
            })
            .catch((err) => {
                setError(err.message);
            })
    }, []);

    return { data, error };
};
