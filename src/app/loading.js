import React from 'react';

export default function Loading() {
 return (
   <div className='fixed z-50 top-0 left-0 w-screen h-screen flex items-center justify-center bg-dark dark:bg-light'>
    <h3 className='text-3xl text-light dark:text-dark'>Loading ...</h3>
   </div>
 );
}