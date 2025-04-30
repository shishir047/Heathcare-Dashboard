import React, { useEffect, useState } from "react";
import axios from "axios";
import PatientList from "./components/PatientList";
import Header from "./components/Header";
import PatientProfile from "./components/PatientProfile";
import DiagnosisHistory from "./components/DiagnosisHistory";
import DiagnosticList from "./components/DiagnosticList";
import LabResults from "./components/LabResults";
import "./index.css";

const API_URL = import.meta.env.VITE_HEALTHCARE_DASHBOARD_API_URL;
const USERNAME = import.meta.env.VITE_HEALTHCARE_DASHBOARD_USERNAME;
const PASSWORD = import.meta.env.VITE_HEALTHCARE_DASHBOARD_PASSWORD;

const App = () => {
    const [patients, setPatients] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState(null);

    useEffect(() => {
        async function fetchPatients() {
            try {
                const authHeader = `Basic ${btoa(`${USERNAME}:${PASSWORD}`)}`;
                const response = await axios.get(API_URL, {
                    headers: {
                        Authorization: authHeader,
                    },
                });
                setPatients(response.data);
                setSelectedPatient(response.data[0]);
            } catch (error) {
                console.error("Error fetching patients:", error);
            }
        }

        fetchPatients();
    }, []);

    return (
        <div className="dashboard-container">
            <PatientList patients={patients} onSelectPatient={setSelectedPatient} />
            <main className="main-content">
                <Header />
                <div className="main-container">
                    <div className="diagnosis-container">
                        <DiagnosisHistory diagnosisHistory={selectedPatient?.diagnosis_history || []} />
                        <DiagnosticList diagnostics={selectedPatient?.diagnostic_list || []} />
                    </div>
                    <div className="right-sidebar-container">
                        <PatientProfile patient={selectedPatient} />
                        <LabResults labResults={selectedPatient?.lab_results || []} />
                    </div>
                </div>
            </main>
        </div>

    );
};

export default App;
