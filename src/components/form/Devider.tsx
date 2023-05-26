import React from 'react';

const Devider: React.FC<{
  deviderText?: string;
  deviderColor?: 'light' | 'dark';
}> = ({ deviderText, deviderColor = 'dark' }) => {
  return (
    <div className='flex text-gray-900 justify-center items-center gap-3'>
      <div className='w-full h-[1px] bg-slate-900' />
      {deviderText && (
        <>
          <div className='text-base'>{deviderText}</div>
          <div className='w-full h-[1px] bg-slate-900' />
        </>
      )}
    </div>
  );
};

export default Devider;
