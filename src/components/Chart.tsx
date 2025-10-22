// import { selectedDistribution } from "../utils/selectedDistribution";
import type { DistributionItem } from "../types"; // Renamed type

import {
    LineChart,
    Line,
    Legend,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

function Chart({ data }: { data: DistributionItem[] }) {

    return (
        <>
            {/*
            TODO:
            - need to solve category names length overlapping on x axis
            - some distributions may be better represented in other chart types
            so I am considering adding options to switch between chart types
            or allow the user to do so
        */}
            <LineChart data={data} width={500} height={200}>
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
