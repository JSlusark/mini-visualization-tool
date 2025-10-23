import type { TriviaQuestion } from "../types"; // Renamed type

/*
    TODO:
    - select category to filter active filter by one single category
    - or select category to show total property distribution per category?
*/
function SelectCategory({
    data,
    setSelectedCategory,
}: {
    data: TriviaQuestion[];
    setSelectedCategory: (category: string | null) => void;
}) {
    const categories = Array.from(new Set(data.map((item) => item.category)));
    return (
        <>
            <p>
                Categories:
                <button
                    onClick={() => {
                        setSelectedCategory(null);
                        console.log(`DEACTIVATED category filter`);
                    }}>
                    All categories
                </button>
            </p>
            {/* <div name="category" id="category"> */}
            {/* <option value="all">All</option> */}
            {categories.map((item) => (
                <button
                    key={item}
                    value={item}
                    onClick={() => {
                        setSelectedCategory(item);
                        console.log(`ACTIVATED category filter`);
                    }}>
                    {/*  check for each button if a filter is active */}
                    {item}
                </button>
            ))}
            {/* </div> */}
        </>
    );
}
export default SelectCategory;
