import React from 'react';

export default function projeto({ params }) {
 return (
   <div>
      <h1>Eu sou o projeto: {params.id}</h1>
   </div>
 );
}