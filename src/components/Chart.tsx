import { useState, useEffect } from "react";
import { colorScheme, customiseColor } from "../utils/colorUtils";
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
    ResponsiveContainer,
} from "recharts";

function Chart({
    data,
    selectedCategory,
    activeFilter,
}: {
    data: TriviaQuestion[];
    selectedCategory: string | null;
    activeFilter: string;
}) {
    let chartData = filterData(data, selectedCategory, activeFilter);
    console.log("Filtered data:", chartData);

    // Tracks window width to decide if rotating values - might also avoid and use css later in some way
    const [rotateLabels, setRotateLabels] = useState(false);
    const [overBar, setOverBar] = useState(false); // so that tooltip appears only when hovering on the bar unstef

    useEffect(() => {
        const handleResize = () => setRotateLabels(window.innerWidth < 700);
        handleResize(); // runs on ever mount
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="w-full flex justify-center ">
                <ResponsiveContainer className="max-w-4xl" width="100%" height={400}>
                    <BarChart
                        data={chartData}
                        margin={{ top: 20, right: 50, left: 0, bottom: 60 }}
                        >
                        <CartesianGrid
                            strokeDasharray="3 3"
                            stroke={colorScheme.base200}
                        />

                        <XAxis
                            dataKey="value"
                            tick={{
                                fontSize: 12,
                                fill: `${customiseColor(
                                    activeFilter,
                                    "active"
                                )}`,
                            }}
                            interval={0}
                            angle={rotateLabels ? -45 : 0}
                            textAnchor={rotateLabels ? "end" : "middle"}
                        />

                        <YAxis
                            tick={{
                                fontSize: 12,
                                fill: customiseColor(activeFilter, "idle"),
                            }}
                            allowDecimals={false}
                        />

                        <Tooltip
                            wrapperStyle={{
                                visibility: overBar ? "visible" : "hidden",
                            }}
                            cursor={{ fill: "transparent" }}
                            contentStyle={{
                                backgroundColor: colorScheme.base100,
                                borderRadius: "8px",
                                boxShadow: `0 2px 8px ${colorScheme.base300}`,
                                textAlign: "left",
                                fontSize: "0.8rem",
                            }}
                            labelStyle={{
                                color: colorScheme.baseContent,
                                fontWeight: "bold",
                                textAlign: "left",
                                fontSize: "0.85rem",
                            }}
                            formatter={(value: number) => [
                                "Questions: " + value,
                            ]}
                        />

                        <Legend
                            align="center"
                            verticalAlign="top"
                            layout="horizontal"
                            iconSize={10}
                            iconType="circle"
                            wrapperStyle={{
                                paddingBottom: "30px",
                                textAlign: "center",
                                width: "100%",
                            }}
                            formatter={() => {
                                return !selectedCategory
                                    ? `Total questions by ${activeFilter}`
                                    : `Questions ${
                                          activeFilter === "difficulty"
                                              ? `by ${activeFilter}`
                                              : ""
                                      } in ${selectedCategory}`;
                            }}
                        />

                        <Bar
                            dataKey="count"
                            fill={customiseColor(activeFilter, "idle")}
                            activeBar={
                                overBar
                                    ? {
                                          fill: customiseColor(
                                              activeFilter,
                                              "active"
                                          ),
                                      }
                                    : {}
                            }
                            background={false}
                            animationDuration={500}
                            // onMouseOver={}
                            onMouseEnter={() => setOverBar(true)}
                            onMouseLeave={() => setOverBar(false)}
                            radius={[5, 5, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
        </div>
    );
}

export default Chart;
