import React, { useState, useEffect } from "react";
import Ellipsis from "../assets/more_horiz_FILL0_wght300_GRAD0_opsz24.svg";
import Search from "../assets/search_FILL0_wght300_GRAD0_opsz24.svg";
import CustomScrollbar from "./CustomScrollbar";

const PatientList = ({ patients, onSelectPatient }) => {
    const [selected, setSelected] = useState(3);

    useEffect(() => {
        if (patients.length > 3) {
            onSelectPatient(patients[3]);
        }
    }, [patients, onSelectPatient]);

    return (
        <div className="sidebar">
            <div className="header">
                <h2>Patients</h2>
                <img src={Search} alt="Search" className="search icon" />
            </div>
            <CustomScrollbar height="85%">
                <ul className="patient-list">
                    {patients.length > 0 ? (
                        patients.map((patient, index) => (
                            <li
                                key={index}
                                className={`patient-item ${selected === index ? "selected" : ""}`}
                                onClick={() => {
                                    setSelected(index);
                                    onSelectPatient(patient);
                                }}
                            >
                                <img
                                    src={patient.profile_picture}
                                    alt={patient.name}
                                    className="avatar"
                                />
                                <div className="patient-info">
                                    <p className="name">{patient.name}</p>
                                    <p className="details">{patient.gender}, {patient.age}</p>
                                </div>
                                <img src={Ellipsis} alt="Profile" className="settings icon" />
                            </li>
                        ))
                    ) : (
                        <p className="loading-text">Loading patients...</p>
                    )}
                </ul>
            </CustomScrollbar>
        </div>
    );
};

export default PatientList;
