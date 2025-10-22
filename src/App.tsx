import "./App.css";
import { loadTriviaData } from "./hooks/loadTriviaData";

function App() {
    const { data, isLoading, error } = loadTriviaData(50);

    const content = () => {
        if (isLoading) {
            return <p>Loading...</p>;
        } else {
            return error ? (
                <p>Error: {error}</p>
            ) : (
                <p>Success: {data.length} questions loaded</p>
            );
        }
    };

    return (
        <>
            <h1>Trivia visualizer</h1>
            {content()}
        </>
    );
}

export default App;
