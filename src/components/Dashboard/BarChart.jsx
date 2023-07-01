import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import finland from '../../assets/countries/finland.jpg';
import germany from '../../assets/countries/germany.png';
import ghana from '../../assets/countries/ghana.png';
import nigeria from '../../assets/countries/nigeria.svg';
import uk from '../../assets/countries/uk.jpg';
//
import facebook from '../../assets/socials/facebook.svg';
import google from '../../assets/socials/google.png';
import instagram from '../../assets/socials/instagram.svg';
import linkedin from '../../assets/socials/linkedin.svg';
import { options } from '../../chart.config';

const flags = [
  {
    country: 'nigeria',
    image: nigeria,
  },
  {
    country: 'germany',
    image: germany,
  },
  {
    country: 'ghana',
    image: ghana,
  },
  {
    country: 'finland',
    image: finland,
  },
  {
    country: 'united kingdom',
    image: uk,
  },
];

const socials = [
  {
    name: 'google',
    image: google,
  },
  {
    name: 'instagram',
    image: instagram,
  },
  {
    name: 'facebook',
    image: facebook,
  },
  {
    name: 'linkedin',
    image: linkedin,
  },
];

const colors = ['#599EEA', '#844FF6', '#0FB77A', '#FAB70A', '#F09468'];

const BarChart = (props) => {
  const [countryData, setCountryData] = useState([]);
  const [sourcesData, setSourcesData] = useState([]);

  useEffect(() => {
    const { top_locations, top_sources } = props;

    if (top_locations) {
      const COUNTRY_DATA = [];

      top_locations.forEach((location) => {
        COUNTRY_DATA.push(location.percent);
      });

      setCountryData(COUNTRY_DATA);
    }
    if (top_sources) {
      console.log(top_sources);

      const SOURCES_DATA = [];

      top_sources.forEach((source) => {
        SOURCES_DATA.push(source.percent);
      });

      setSourcesData(SOURCES_DATA);
    }
  }, []);

  const getCountryFlag = (country) => {
    const current = flags.find(
      (flag) => flag.country.toLowerCase() === country.toLowerCase()
    );
    if (current) {
      return current.image;
    } else return '';
  };

  const getSourceIcon = (source) => {
    const current = socials.find(
      (icon) => icon.name.toLowerCase() === source.toLowerCase()
    );
    if (current) {
      return current.image;
    } else return '';
  };

  const country_data = {
    labels: [],
    datasets: [
      {
        label: 'Percentage',
        data: countryData,
        backgroundColor: colors,
        hoverOffset: 4,
      },
    ],
  };

  const source_data = {
    labels: [],
    datasets: [
      {
        label: 'Percentage',
        data: sourcesData,
        backgroundColor: colors,
        hoverOffset: 4,
      },
    ],
  };

  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-8'>
      <div className='p-6 border-[1px] border-gray-100 rounded-lg'>
        <div className='flex items-center justify-between'>
          <p className='font-bold'>Top Locations</p>
          <button className='text-primary font-medium text-sm'>
            View full reports
          </button>
        </div>

        {props.top_locations && (
          <div className='mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2'>
            <div>
              {props.top_locations.map((location, index) => (
                <div
                  key={location.country}
                  className='flex items-center gap-2 mb-6'
                >
                  <img
                    src={getCountryFlag(location.country)}
                    alt={`${location.country} flag`}
                    className='w-5 rounded-sm'
                  />
                  <p className='font-medium text-sm'>{location.country}</p>
                  <p className='font-bold text-sm'>{location.percent}%</p>
                  <div
                    className={`h-3 w-3 rounded-full`}
                    style={{ background: colors[index] }}
                  ></div>
                </div>
              ))}
            </div>
            <div>
              <Doughnut options={options} data={country_data} />
            </div>
          </div>
        )}

        {!props.top_locations && (
          <p className='text-2xl py-16 text-center text-red-400'>
            Error fetching data
          </p>
        )}
      </div>
      <div className='p-6 border-[1px] border-gray-100 rounded-lg'>
        <div className='flex items-center justify-between'>
          <p className='font-bold'>Top Referral Source</p>
          <button className='text-primary font-medium text-sm'>
            View full reports
          </button>
        </div>

        {props.top_sources && (
          <div className='mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2'>
            <div>
              {props.top_sources.map((source, index) => (
                <div
                  key={source.source}
                  className='flex items-center gap-2 mb-6'
                >
                  <img
                    src={getSourceIcon(source.source)}
                    alt={`${source.country} flag`}
                    className='w-5 rounded-sm'
                  />
                  <p className='font-medium text-sm'>{source.source}</p>
                  <p className='font-bold text-sm'>{source.percent}%</p>
                  <div
                    className={`h-3 w-3 rounded-full`}
                    style={{ background: colors[index] }}
                  ></div>
                </div>
              ))}
            </div>
            <div>
              <Doughnut options={options} data={source_data} />
            </div>
          </div>
        )}

        {!props.top_sources && (
          <p className='text-2xl py-16 text-center text-red-400'>
            Error fetching data
          </p>
        )}
      </div>
    </section>
  );
};

export default BarChart;
