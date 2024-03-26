import React from 'react';

const CarTypesList: React.FC = () => {
  const carTypes: string[] = ['SUV', 'Sedan', 'Hatchback', 'Convertible'];

  return (
    <div>
      <h2>List of Car Types</h2>
      <ul>
        {carTypes.map((type, index) => (
          <li key={index}>{type}</li>
        ))}
      </ul>
    </div>
  );
};

export default CarTypesList;
