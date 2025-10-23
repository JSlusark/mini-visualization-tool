import type { TriviaQuestion } from "../types"; // Renamed type
import { filterData } from "../utils/filterData"; // Renamed function

import {
    LineChart,
    Line,
    Legend,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

function Chart({
    data,
    selectedCategory,
    filterType,
}: {
    data: TriviaQuestion[];
    selectedCategory: string | null;
    filterType: string;
}) {
    let chartData = filterData(data, selectedCategory, filterType);
    console.log("Filtered data:", chartData);

    return (
        <>
            {/*
            TODO:
            - need to solve category names length overlapping on x axis
            - change to istogram/bar chart for question and difficulty distributions
            - bug?: chart max values on axis change depending on count of single category
            */}
            <LineChart data={chartData} width={500} height={200}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="value" />
                {/* takes a value - level or category*/}
                <YAxis dataKey="count" />
                {/* takes a number - amount of value */}
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="count" strokeWidth={3} />
            </LineChart>
        </>
    );
}

export default Chart;
