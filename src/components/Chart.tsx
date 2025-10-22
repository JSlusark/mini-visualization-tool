import { setDistribution } from "../utils/setDistribution";
import type { TriviaQuestion } from "../types";

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
    viewType,
}: {
    data: TriviaQuestion[];
    viewType: string;
}) {
    let filteredData = setDistribution(data, viewType);
    console.log("Requested graph type: ", viewType);
    console.log(filteredData);

    return (
        <>
            <LineChart data={filteredData} width={500} height={200}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="value" />{" "}
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
