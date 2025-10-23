import "./App.css";
import mockData from "./assets/mockData.json";
import { useState } from "react";

// import { loadTriviaData } from "./hooks/loadTriviaData";
import SelectCategory from "./components/SelectCategory";
import Chart from "./components/Chart";

function App() {
    //      const { data, isLoading, error } = loadTriviaData(50);

    // const content = () => {
    //     if (isLoading) {
    //         return <p>Loading...</p>;
    //     } else {
    //         return error ? (
    //             <p>Error: {error}</p>
    //         ) : (
    //             <>
    //                 <p>Success: {data.length} questions loaded</p>
    //             </>
    //         );
    //     }
    // };

    const data = mockData; /*  to remove once feture implementations are ready */
    const [filterType, setFilterType] = useState<string>("category");
    const [selectedCategory, setSelectedCategory] = useState<string | null>(
        null
    );


    return (
        <>
            <h1>Trivia visualizer</h1>
            {/* {content()} */}
            Toggle view by:
            <button
                onClick={() => {
                    setFilterType("category");
                }}>
                Questions
                {/* not found of calling category filter as category filter for me means selecting on the single category */}
            </button>
            <button
                onClick={() => {
                    setFilterType("difficulty");
                }}>
                Difficulty
            </button>
            <Chart data={data} selectedCategory={selectedCategory} filterType={filterType} />
            {/*
                TODO: decide how to show filters.
                - category selection could be a dropdown menu we can have many different options
                - distribution type could be toggle buttons, i should also makes it clear
                if these filters are applied at the whole data and/or by the chosen category
            */}
            <SelectCategory
                data={data}
                setSelectedCategory={setSelectedCategory}
            />
        </>
    );
}

export default App;
