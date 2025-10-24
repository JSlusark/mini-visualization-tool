import "./styles/App.css";
import mockData from "./assets/mockData.json";
import { useState } from "react";

// import { loadTriviaData } from "./hooks/loadTriviaData";
import SelectCategory from "./components/SelectCategory";
import Chart from "./components/Chart";
import { OPTION } from "./constants/constants";
import FilterQuestions from "./components/filterQuestions";

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

    const data =
        mockData; /*  to remove once feature implementations are ready */
    const [activeFilter, setActiveFilter] = useState<string>(OPTION.category);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(
        null
    );

    return (
        <div
            className="min-h-screen text-base-content bg-neutral mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-8"
            data-theme="mytheme"
            >

            {/* Header */}
            <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <h1 className=" align-middle text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-center md:text-left">
                    Trivia Visualizer
                </h1>
            </header>

            {/* Main Content Section */}
            <section className="card bg-base-100 shadow-md">
                <div className="card-body flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-between">
                    <SelectCategory
                        data={data}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />
                    <FilterQuestions
                        activeFilter={activeFilter}
                        onChange={setActiveFilter}
                    />
                </div>
                <Chart
                    data={data}
                    selectedCategory={selectedCategory}
                    activeFilter={activeFilter}
                />
            </section>

            <footer className="text-center text-sm text-base-content/60  ">
                    <p>
                        Built by{" "}
                        <a
                            href="https://github.com/jess-slusark"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium hover:underline">
                            Jess Slusark
                        </a>{" "}
                        ·{" "}
                        <a
                            href="https://github.com/jess-slusark/mini-visualization-tool"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary font-medium hover:underline">
                            View on GitHub
                        </a>
                    </p>
                </footer>
        </div>
    );
}

export default App;
