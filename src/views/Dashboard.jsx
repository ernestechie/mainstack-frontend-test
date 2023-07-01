import React, { useEffect, useState } from 'react';
import BarChart from '../components/Dashboard/BarChart';
import GraphChart from '../components/Dashboard/GraphChart';
import Greeting from '../components/Dashboard/Greeting';
import Loading from '../components/Dashboard/Loading';

import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ArcElement
);

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://fe-task-api.mainstack.io/');
        const DATA = await res.json();

        setData(DATA);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='p-4 sm:px-8 md:px-12 lg:px-16'>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Greeting />
          <GraphChart data={data ? data['graph_data'].views : null} />
          <BarChart
            top_sources={data ? data['top_sources'] : null}
            top_locations={data ? data['top_locations'] : null}
          />
        </>
      )}
    </div>
  );
}
