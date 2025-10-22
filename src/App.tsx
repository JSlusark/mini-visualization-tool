import "./App.css";
import { loadTriviaData } from "./hooks/loadTriviaData";
import Chart from "./components/Chart";
import mockData from "./assets/mockData.json";
import { useState } from "react";

function App() {
    /*  const { data, isLoading, error } = loadTriviaData(50);

    const content = () => {
        if (isLoading) {
            return <p>Loading...</p>;
        } else {
            return error ? (
                <p>Error: {error}</p>
            ) : (
                <>
                    <p>Success: {data.length} questions loaded</p>
                </>
            );
        }
    };
 */

    const [filteredView, setFilteredView] = useState<string>("questions");
    return (
        <>
            <h1>Trivia visualizer</h1>
            {/* {content()} */}
            Toggle view by:
            <button
                onClick={() => {
                    setFilteredView("questions");
                }}>
                questions
            </button>{" "}
            {/* can show this by default, if we filter by */}
            <button
                onClick={() => {
                    setFilteredView("difficulty");
                }}>
                difficulty
            </button>
            <Chart data={mockData} viewType={filteredView} />
            {/*
                TODO: decide how to show filters.
                - category selection could be a dropdown menu we can have many different options
                - distribution type could be toggle buttons, i should also makes it clear
                if these filters are applied at the whole data and/or by the chosen category
            */}
            Filter by category:
            <select name="category" id="category">
                <option value="option">None</option>
                <option value="option">category1</option>
                <option value="option">category2</option>
                <option value="option">category3</option>
            </select>
        </>
    );
}

export default App;
