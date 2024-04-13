import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faExclamationTriangle, faBook, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import './Clander.css'; // Assuming this is your custom CSS file
import Footer from '../Footer/Footer';

const SectionLinks = () => {
  return (
    <div>
      <div className="section-box">
        <Link to="/calendar" className="section-item" style={{ backgroundColor: '#4169E1' }}>
          <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
          <span className="text-lg">Cycle Tracker</span>
        </Link>
        <Link to="/safety" className="section-item" style={{ backgroundColor: '#FF6347' }}>
          <FontAwesomeIcon icon={faExclamationTriangle} className="mr-2" />
          <span className="text-lg">Safety (SOS)</span>
        </Link>
        <Link to="/notes" className="section-item" style={{ backgroundColor: '#2E8B57' }}>
          <FontAwesomeIcon icon={faBook} className="mr-2" />
          <span className="text-lg">Thought for the day</span>
        </Link>
        <Link to="/facts" className="section-item" style={{ backgroundColor: '#FFD720' }}>
          <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
          <span className="text-lg">Facts about body</span>
        </Link>
      </div>
    </div>
  );
};

export default SectionLinks;
