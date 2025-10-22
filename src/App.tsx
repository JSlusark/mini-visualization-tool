import "./App.css";
import mockData from "./assets/mockData.json";
import { useState } from "react";

// import { loadTriviaData } from "./hooks/loadTriviaData";
import { getDistribution } from "./utils/getDistribution"; // Renamed function
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

    const [distributionType, setDistributionType] = useState<string>("category");
    let chartData = getDistribution(mockData, distributionType);
    let categoryData = getDistribution(mockData, "category");/* momenarily added, need to cleanup logic */
    console.log("Requested distribution type: ", distributionType);
    console.log(chartData);

    return (
        <>
            <h1>Trivia visualizer</h1>
            {/* {content()} */}
            Toggle view by:
            <button
                onClick={() => {
                    setDistributionType("category");
                }}>
                Category
            </button>
            <button
                onClick={() => {
                    setDistributionType("difficulty");
                }}>
                Difficulty
            </button>
            <Chart data={chartData} />
            {/*
                TODO: decide how to show filters.
                - category selection could be a dropdown menu we can have many different options
                - distribution type could be toggle buttons, i should also makes it clear
                if these filters are applied at the whole data and/or by the chosen category
            */}
            <SelectCategory data={categoryData}/> {/* momentarily adding, need cleaner logic */}
        </>
    );
}

export default App;
