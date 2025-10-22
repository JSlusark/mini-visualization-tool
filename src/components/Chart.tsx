import { setDistribution } from "../utils/setDistribution";

import {
    LineChart,
    Line,
    Legend,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

function Chart({    data}: {data: {difficulty: string}[]}) {
    const difficulty = setDistribution(data);

    return (
        <>
            <LineChart data={difficulty} width={500} height={200}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="value" /> {/* takes a value - level or category*/}
                <YAxis dataKey="count"/>{/* takes a number - amount of value */}
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="count"
                    strokeWidth={3}
                />
            </LineChart>
        </>
    );
}

export default Chart;
