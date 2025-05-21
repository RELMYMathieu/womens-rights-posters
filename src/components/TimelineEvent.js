import React from 'react';

const TimelineEvent = ({ year, title, description, color }) => (
  <div className="flex mb-4">
    <div className={`flex-shrink-0 w-20 h-20 ${color} text-white rounded-full flex items-center justify-center font-bold text-lg`}>
      {year}
    </div>
    <div className="ml-4 flex-grow">
      <h4 className="font-bold text-lg" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>{title}</h4>
      <p className="text-gray-700" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>{description}</p>
    </div>
  </div>
);

export default TimelineEvent;