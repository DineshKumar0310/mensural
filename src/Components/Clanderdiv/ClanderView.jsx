import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory from react-router-dom
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { DateRange } from 'react-date-range';
import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDroplet } from '@fortawesome/free-solid-svg-icons';

const CalendarView = () => {
  const history = useNavigate(); 
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [flowIntensity, setFlowIntensity] = useState('moderate'); // Default flow intensity
  const [prediction, setPrediction] = useState(null);

  const handleDateRangeChange = (ranges) => {
    setDateRange([ranges.selection]);
  };

  const handleFlowIntensityChange = (e) => {
    setFlowIntensity(e.target.value);
  };

  const handleTrackPeriod = () => {
    const nextMonth = new Date(dateRange[0].endDate);
    nextMonth.setMonth(nextMonth.getMonth() + 1);

    setPrediction({
      startDate: nextMonth,
      endDate: nextMonth,
      flowIntensity
    });

    localStorage.setItem('prediction', JSON.stringify(prediction));
  
   
    history( { state: { prediction: prediction } });
  };

  const handleBackButtonClick = () => {
    setPrediction(null); // Reset prediction when back button is clicked
    history('/home'); // Navigate to home page
  };

  const handleRefreshButtonClick = () => {
    setPrediction(null); // Reset prediction
  };

  return (
    <div>
      <div className="container mx-auto px-4 flex flex-col p-4 relative" style={{ backgroundColor: '#F3F4F6' }}> {/* Added background color */}
        <button
          onClick={handleBackButtonClick}
          className="absolute top-0 left-0 m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Back
        </button>
        {prediction && (
          <button
            onClick={handleRefreshButtonClick}
            className="absolute top-0 right-0 m-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Again
          </button>
        )}
        <h1 className="text-3xl font-bold mb-4 text-center">Period Tracker</h1>
        <div className="mb-4 flex flex-col md:flex-row md:items-center ">
          <label htmlFor="flowIntensity" className="mr-2">Flow Intensity</label>
          <select
            id="flowIntensity"
            value={flowIntensity}
            onChange={handleFlowIntensityChange}
            className="border rounded p-2"
          >
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </select>
        </div>
        <DateRange
          editableDateInputs={true}
          onChange={handleDateRangeChange}
          moveRangeOnFirstSelection={false}
          ranges={dateRange}
          className="mb-4"
        />
        <div className="text-center">
          <button onClick={handleTrackPeriod} className="bg-red-500 hover:bg-black  text-white font-bold py-2 px-4 rounded">
            Track Period
          </button>
        </div>
        {prediction && (
          <div className="mt-4 ">
            <h2 className="text-xl font-bold mb-2"> Next Month's Prediction    : {prediction.startDate.toLocaleDateString()} </h2>
            <p>Flow Intensity: {prediction.flowIntensity} <FontAwesomeIcon icon={faDroplet} style={{color: "#ec0909",}} /></p>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default CalendarView;
