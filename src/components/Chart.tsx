import { useState, useEffect } from "react";
import type { TriviaQuestion } from "../types";
import { filterData } from "../utils/filterData";
import {
    BarChart,
    Bar,
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


    // Tracks window width to decide if rotating values - might also avoid and use css later in some way
    const [rotateLabels, setRotateLabels] = useState(false);
    useEffect(() => {
        const handleResize = () => setRotateLabels(window.innerWidth < 700);
        handleResize(); // runs on ever mount
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div
            style={{
                width: "100%",
                height: 400,
                padding: "20px",
            }}>
            <BarChart
                style={{
                    width: "100%",
                    maxWidth: "700px",
                    maxHeight: "70vh",
                    aspectRatio: 1.618,
                }}
                responsive
                data={chartData}
                margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                <CartesianGrid strokeDasharray="0 0" stroke="#cccccc27" />

                <XAxis
                    dataKey="value"
                    tick={{ fontSize: 13, fill: "#cac7feff" }}
                    interval={0}
                    angle={rotateLabels ? -45 : 0}
                    textAnchor={rotateLabels ? "end" : "middle"}
                />

                <YAxis
                    tick={{ fontSize: 12, fill: "#ffffffff" }}
                    tickFormatter={(v) => String(v)}
                />

                <Tooltip
                    cursor={{ fill: "transparent" }}
                    contentStyle={{
                        backgroundColor: "#fff",
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    }}
                    labelStyle={{ color: "#333", fontWeight: "bold" }}
                />

                <Legend
                    width={100}
                    wrapperStyle={{
                        top: 30,
                        right: 40,
                        backgroundColor: "#f5f5f5",
                        fontSize: 10,
                        padding: 10,
                        borderRadius: 3,
                    }}
                />

                <Bar
                    dataKey="count"
                    fill="#8884d8"
                    name={filterType}
                    activeBar={{ fill: "#cac7feff" }}
                    animationDuration={500}
                />
            </BarChart>
        </div>
    );
}

export default Chart;
