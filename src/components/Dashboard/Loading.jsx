import React from 'react';

const Loading = () => {
  return (
    <div>
      <span
        className='mb-4 rounded-lg inline-block h-40 animate-pulse w-full bg-gray-50'
        style={{
          animationDelay: 0.5,
          animationDuration: '1s',
        }}
      ></span>
      <span
        className='mb-4 rounded-lg inline-block h-72 animate-pulse w-full bg-gray-50'
        style={{
          animationDelay: 0.75,
          animationDuration: '1s',
        }}
      ></span>

      <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <span
          className='mb-8 rounded-lg inline-block h-52 animate-pulse w-full bg-gray-50'
          style={{
            animationDelay: 1,
            animationDuration: '1s',
          }}
        ></span>
        <span
          className='mb-8 rounded-lg inline-block h-52 animate-pulse w-full bg-gray-50'
          style={{
            animationDelay: 1.5,
            animationDuration: '1s',
          }}
        ></span>
      </section>
    </div>
  );
};

export default Loading;
