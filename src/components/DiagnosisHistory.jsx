import React, { useState, useEffect } from "react";
import Card from "./Card";
import BloodPressureChart from "./ChartComponent";
import dropdownIcon from "../assets/expand_more_FILL0_wght300_GRAD0_opsz24.svg";
import ArrowUp from "../assets/ArrowUp.svg";
import ArrowDown from "../assets/ArrowDown.svg";

import RRicon from "../assets/respiratory rate.svg";
import TempIcon from "../assets/temperature.svg";
import HeartBPMIcon from "../assets/HeartBPM.svg";

const DiagnosisHistory = ({ diagnosisHistory }) => {
  const [selectedReport, setSelectedReport] = useState(null);
  const [selectedTimeRange, setSelectedTimeRange] = useState(6);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (diagnosisHistory.length > 0) {
      setSelectedReport(diagnosisHistory[0]);
    }
  }, [diagnosisHistory]);

  const timeRanges = [];
  for (let i = 3; i <= diagnosisHistory.length; i += 3) {
    timeRanges.push(i);
  }

  const handleSelectTimeRange = (range) => {
    setSelectedTimeRange(range);
    setIsDropdownOpen(false);
  };

  const getArrowIcon = (level) => {
    if (level.includes("Higher")) return ArrowUp;
    if (level.includes("Lower")) return ArrowDown;
    return null;
  };

  return (
    <div className="diagnosis-history">
      <h2 className="title">Diagnosis History</h2>
      <div className="chart-details">
        <Card className="chart-card">
          <div className="chart-type">
            <h3 className="subtitle">Blood Pressure</h3>

            <div className="dropdown-container">
              <div className="dropdown-header" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <span>{selectedTimeRange} Months</span>
                <img src={dropdownIcon} alt="Dropdown" className="dropdown-icon" />
              </div>
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  {timeRanges.map((range, index) => (
                    <li key={index} onClick={() => handleSelectTimeRange(range)}>
                      {range} Months
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <BloodPressureChart diagnosisHistory={diagnosisHistory} selectedTimeRange={selectedTimeRange} className="bp-chart"/>
        </Card>
        {selectedReport && (
          <Card className="detail-card">
            <div className="bp-detail">
              <h4 className="bp-title"><div className="systolic" /> Systolic</h4>
              <p className="bp-value">{selectedReport.blood_pressure.systolic.value}</p>
              <p className="bp-status">
                {getArrowIcon(selectedReport.blood_pressure.systolic.levels) && (
                  <img src={getArrowIcon(selectedReport.blood_pressure.systolic.levels)} alt="Arrow" />
                )}
                {selectedReport.blood_pressure.systolic.levels}
              </p>
            </div>
            <div className="bp-divider"></div>
            <div className="bp-detail">
              <h4 className="bp-title"><div className="diastolic" />Diastolic</h4>
              <p className="bp-value">{selectedReport.blood_pressure.diastolic.value}</p>
              <p className="bp-status">
                {getArrowIcon(selectedReport.blood_pressure.diastolic.levels) && (
                  <img src={getArrowIcon(selectedReport.blood_pressure.diastolic.levels)} alt="Arrow" />
                )}
                {selectedReport.blood_pressure.diastolic.levels}
              </p>
            </div>
          </Card>
        )}
      </div>

      {selectedReport && (
        <div className="stats-container">
          <Card className="stat-card blue">
            <img src={RRicon} alt="Respiratory Rate" className="stat-card-img" />
            <h3 className="subtitle">Respiratory Rate</h3>
            <p className="stat-value">{selectedReport.respiratory_rate.value} bpm</p>
            <p className="stat-label bp-status">
              {getArrowIcon(selectedReport.respiratory_rate.levels) && (
                <img src={getArrowIcon(selectedReport.respiratory_rate.levels)} alt="Arrow" />
              )}
              {selectedReport.respiratory_rate.levels}</p>
          </Card>
          <Card className="stat-card yellow">
            <img src={TempIcon} alt="Temperature" className="stat-card-img" />
            <h3 className="subtitle">Temperature</h3>
            <p className="stat-value">{selectedReport.temperature.value}°F</p>
            <p className="stat-label bp-status">
              {getArrowIcon(selectedReport.temperature.levels) && (
                <img src={getArrowIcon(selectedReport.temperature.levels)} alt="Arrow" />
              )}
              {selectedReport.temperature.levels}</p>
          </Card>
          <Card className="stat-card red">
            <img src={HeartBPMIcon} alt="Heart Rate" className="stat-card-img" />
            <h3 className="subtitle">Heart Rate</h3>
            <p className="stat-value">{selectedReport.heart_rate.value} bpm</p>
            <p className="stat-label bp-status">
              {getArrowIcon(selectedReport.heart_rate.levels) && (
                <img src={getArrowIcon(selectedReport.heart_rate.levels)} alt="Arrow" />
              )}
              {selectedReport.heart_rate.levels}
            </p>
          </Card>
        </div>
      )}
    </div>
  );
};

export default DiagnosisHistory;
