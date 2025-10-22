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
- 50 is the num of maximum questions per API call, so  could handle a case where i load more
- loading smaller data would be useful when amount in a very high number (1000+)
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
                    // console.log(res);
                    // console.log(res.data.results);
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
