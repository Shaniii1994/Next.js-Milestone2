import React from 'react';  

interface PropsType {
  title: string;
}

const Heading: React.FC<PropsType> = ({ title }) => {
  return (
    <div className='text-center text-4xl pb-8'>
      <p className='border-b-4 border-yellow-400 inline-block pb-2 text-4xl text-orange-600 hover:text-yellow-500'>
        {"title"}
      </p>
    </div>
  );
};

export default Heading;
