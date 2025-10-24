import "./styles/App.css";
import Footer from "./components/layout/footer";
import DataContainer from "./components/DataContainer";
import Header from "./components/layout/header";
function App() {
    return (
        <div
            className="min-h-screen text-base-content bg-neutral mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-8"
            data-theme="mytheme">
            <Header />
            <DataContainer />
            <Footer />
        </div>
    );
}

export default App;
