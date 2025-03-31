"use client";
import React from "react";
import { createPortal } from "react-dom";
import useCharts from "../Store/useCharts";
import { 
    BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, 
    LineChart, Line, CartesianGrid 
} from "recharts";
import { companies } from "../Market/Components/TS/ArrayForGrid";

export default function ChartsModals() {
    const { Charts, setChartsMode } = useCharts();
    const parseValue = (value: string) => parseFloat(value.replace(/[$B]/g, "")) || 0;
    
    const chartData = companies.map(({ name, realRevenue, projectedRevenue, realExpenses, projectedExpenses, realClients, projectedClients }) => ({
        name,
        realRevenue: parseValue(realRevenue),
        projectedRevenue: parseValue(projectedRevenue),
        realExpenses: parseValue(realExpenses),
        projectedExpenses: parseValue(projectedExpenses),
        realClients: realClients || 0,
        projectedClients: projectedClients || 0,
    }));

    const chartConfigs: Record<string, { key1: string; key2: string; fill1: string; fill2: string; label1: string; label2: string }> = {
        Revenue: {
            key1: "realRevenue",
            key2: "projectedRevenue",
            fill1: "#6B7280",
            fill2: "#9CA3AF",
            label1: "realRevenue",
            label2: "projectedRevenue",
        },
        Expenses: {
            key1: "realExpenses",
            key2: "projectedExpenses",
            fill1: "#D97706",
            fill2: "#FBBF24",
            label1: "realExpenses",
            label2: "projectedExpenses",
        },
        Clients: {
            key1: "realClients",
            key2: "projectedClients",
            fill1: "#2563EB",
            fill2: "#60A5FA",
            label1: "realClients",
            label2: "projectedClients",
        }
    };
    if (!Charts || !chartConfigs[Charts]) return null;
    const { key1, key2, fill1, fill2, label1, label2 } = chartConfigs[Charts];

    return createPortal(
        <section className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="flex flex-col items-center gap-5 border-2 border-gray-600 w-[800px] h-[650px] bg-gradient-to-br from-gray-900 to-gray-700 p-5 rounded-lg shadow-2xl relative">
                <button
                    onClick={() => setChartsMode(null)}
                    className="absolute top-3 right-3 text-white bg-gray-800 px-3 py-1 rounded-lg hover:bg-gray-600"
                >
                    Закрити
                </button>
                <h2 className="text-white text-2xl font-bold tracking-wide">{Charts} Chart</h2>

                <div className="grid grid-cols-2 gap-5 w-full h-[80%]">
                    {/* Стовпчаста діаграма */}
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chartData}>
                            <XAxis dataKey="name" stroke="#EAEAEA" />
                            <YAxis stroke="#EAEAEA" />
                            <Tooltip cursor={{ fill: "#3d3d3d" }} />
                            <Legend />
                            <Bar dataKey={key1} fill={fill1} name={label1} />
                            <Bar dataKey={key2} fill={fill2} name={label2} />
                        </BarChart>
                    </ResponsiveContainer>

                    {/* Лінійний графік */}
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={chartData}>
                            <CartesianGrid stroke="#EAEAEA" strokeDasharray="5 5" />
                            <XAxis dataKey="name" stroke="#EAEAEA" />
                            <YAxis stroke="#EAEAEA" />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey={key1} stroke={fill1} strokeWidth={3} name={label1} />
                            <Line type="monotone" dataKey={key2} stroke={fill2} strokeWidth={3} name={label2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </section>,
        document.body
    );
}
