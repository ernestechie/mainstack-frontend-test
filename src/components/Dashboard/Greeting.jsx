import React from 'react';

export default function Greeting() {
  return (
    <div className='flex items-center justify-between my-8'>
      <div>
        <p className='text-2xl font-bold mb-2'>Good morning, Ernest ⛅ </p>
        <p className='text-sm'>Check out your dashboard summary</p>
      </div>
      <button className='text-primary font-medium text-sm'>
        View analytics
      </button>
    </div>
  );
}
