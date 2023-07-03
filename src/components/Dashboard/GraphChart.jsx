import { options } from '../../chart.config';

import React, { useEffect, useState } from 'react';
import { Line, Pie } from 'react-chartjs-2';
import { MdInfoOutline } from 'react-icons/md';

const filters = [
  { value: '1 day' },
  { value: '3 days' },
  { value: '7 days' },
  { value: '30 days' },
  { value: 'all time' },
  { value: 'custom date' },
];

const GraphChart = (props) => {
  const [current, setCurrent] = useState('all time');
  const [labels, setLabels] = useState([]);
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    const data = props.data;

    if (data) {
      console.log(data);
      const LABELS = [];
      const GRAPH_DATA = [];

      for (const key in data) {
        LABELS.push(
          `${new Date(key).toLocaleDateString('default', {
            month: 'short',
          })} ${new Date(key).getDate()}`
        );

        GRAPH_DATA.push(data[key]);

        setLabels(LABELS);
        setGraphData(GRAPH_DATA);
      }
    }
  }, []);

  const chartData = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Page Views',
        lineTension: 0.1,
        borderColor: 'rgba(255, 84, 3, 1)',
        backgroundColor: 'rgba(255, 84, 3, 0.1)',
        data: graphData,
      },
    ],
  };

  return (
    <section>
      <div className='grid grid-cols-12 gap-4'>
        {filters.map((filter) => (
          <button
            role={
              current === filter.value ? 'active-button' : 'inactive-button'
            }
            title='filter-button'
            key={filter.value}
            className={`col-span-4 sm:col-span-3 lg:col-span-2 font-semibold duration-300 capitalize text-sm p-2 border-[1px] rounded-full ${
              current === filter.value
                ? 'border-primary bg-orange-100 text-primary'
                : 'border-gray-100 bg-white text-_gray_'
            }`}
            onClick={() => setCurrent(filter.value)}
          >
            {filter.value}
          </button>
        ))}
      </div>

      <div className='max-w-[800px] my-8 py-8 px-6 border-[1px] border-gray-100 rounded-lg'>
        <div className='flex items-start justify-between'>
          <div>
            <p className='font-bold mb-2'>Page Views </p>
            <p className='text-sm capitalize'>{current}</p>
          </div>
          <button className='text-_gray_'>
            <MdInfoOutline className='w-5 h-5' />
          </button>
        </div>

        <p className='my-8 text-3xl font-bold'>
          {graphData.sort((a, b) => a - b)[graphData.length - 1]}
        </p>

        {/* Chart */}
        {props.data && (
          <div className='mt-8'>
            <Line options={options} data={chartData} />
          </div>
        )}

        {!props.data && (
          <p
            role='error-component'
            className='text-3xl py-16 text-center text-red-400'
          >
            Error fetching data
          </p>
        )}
      </div>
    </section>
  );
};

export default GraphChart;
