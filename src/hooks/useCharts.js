import { useEffect, useState } from 'react';

const useCharts = () => {
    const [chData, setChData] = useState([]);

    useEffect(() => {
        fetch('./fakeData/charts.json')
            .then(res => res.json())
            .then(data => setChData(data));
    }, []);

    return [chData, setChData];
};

export default useCharts;