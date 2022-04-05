import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useCharts from '../../hooks/useCharts';

const Dashboard = () => {
    const [data] = useCharts();

    return (
        <div className='gap-12 grid grid-cols-2 p-8'>
            <div className='bg-cyan-100 h-96 px-8 pt-8 pb-4 rounded-lg'>
                <ResponsiveContainer width='100%' height='100%'>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="sell" fill="#818cf8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className='bg-cyan-100 h-96 px-8 pt-8 pb-4 rounded-lg'>
                <ResponsiveContainer width='100%' height='100%'>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="investment" stroke="#818cf8" />
                        <Line type="monotone" dataKey="revenue" stroke="#06b6d4" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Dashboard;