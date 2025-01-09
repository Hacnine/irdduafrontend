// ProjectCard.jsx
import Image from 'next/image';
import React from 'react';

const ProjectCard = ({ title, description, image }) => {
  return (
    <div 
      className="bg-white shadow-lg rounded-lg overflow-hidden p-4 hover:shadow-2xl transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Image src={image} alt={title} className="w-full h-48 object-cover mb-4"    width={24} height={24}/>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default ProjectCard;
