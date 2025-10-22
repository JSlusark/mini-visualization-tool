import "./App.css";
import { loadTriviaData } from "./hooks/loadTriviaData";

function App() {
    const { data, error } = loadTriviaData(50);

    return (
        <>
            <h1>Trivia visualizer</h1>
            {error ? <p>Error: {error}</p> : <p>Success: {data.length} questions loaded</p>}
        </>
    );
}

export default App;
