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

/*
TODO:
- add local storage caching to reduce API calls and to use when offline
- integration tests with jest to check on API response handling
*/
export const loadTriviaData = (amount: number) => {
    const [data, setData] = useState<TriviaQuestion[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            axios
                .get(`https://opentdb.com/api.php?amount=${amount}`)
                .then((res) => {
                        console.log(res);
                        setData(res.data.results);
                        setIsLoading(false);
                })
                .catch((err) => {
                    setError(err.message);
                });
        }, 5000);

        return () => clearTimeout(timer);
    }, []);



    return { data, isLoading, error };
};
