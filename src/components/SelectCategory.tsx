import type { DistributionItem } from "../types"; // Renamed type

function SelectCategory({ data }: { data: DistributionItem[] }) {
    return (
        <>
            Filter by category:
            <select name="category" id="category">
                <option value="all">All</option>
                {data.map((item) => (
                    <option key={item.value} value={item.value}>
                        {item.value}
                    </option>
                ))}
            </select>
        </>
    );
}
export default SelectCategory;
