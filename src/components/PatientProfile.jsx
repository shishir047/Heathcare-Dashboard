import React from "react";
import BirthIcon from "../assets/BirthIcon.svg";
import FemaleIcon from "../assets/FemaleIcon.svg";
import MaleIcon from "../assets/MaleIcon.svg";
import PhoneIcon from "../assets/PhoneIcon.svg";
import InsuranceIcon from "../assets/InsuranceIcon.svg";

const PatientProfile = ({ patient }) => {
    if (!patient) {
        return <p className="loading-text">Select a patient to view details.</p>;
    }

    return (
        <div className="right-sidebar">
            <img src={patient.profile_picture} alt={patient.name} className="profile-img" />
            <h2 className="patient-name">{patient.name}</h2>
            <div className="patient-details">
                <div className="patient-detail-list">
                    <img src={BirthIcon} alt="Birth Icon" />
                    <div className="detail-text">
                        <p className="details">Date of Birth:</p>
                        <p className="name">{patient.date_of_birth || "N/A"}</p>
                    </div>
                </div>

                <div className="patient-detail-list">
                    <img src={patient.gender === "Male" ? MaleIcon : FemaleIcon} alt="Gender Icon" />
                    <div className="detail-text">
                        <p className="details">Gender:</p>
                        <p className="name">{patient.gender || "N/A"}</p>
                    </div>
                </div>

                <div className="patient-detail-list">
                    <img src={PhoneIcon} alt="Phone Icon" />
                    <div className="detail-text">
                        <p className="details">Contact:</p>
                        <p className="name">{patient.phone_number || "N/A"}</p>
                    </div>
                </div>

                <div className="patient-detail-list">
                    <img src={PhoneIcon} alt="Emergency Contact Icon" />
                    <div className="detail-text">
                        <p className="details">Emergency:</p>
                        <p className="name">{patient.emergency_contact || "N/A"}</p>
                    </div>
                </div>

                <div className="patient-detail-list">
                    <img src={InsuranceIcon} alt="Insurance Icon" />
                    <div className="detail-text">
                        <p className="details">Insurance:</p>
                        <p className="name">{patient.insurance_type || "N/A"}</p>
                    </div>
                </div>
            </div>
            <button className="show-btn">Show All Information</button>
        </div>
    );
};

export default PatientProfile;
