/* eslint-disable react/prop-types */
import { PatientInfo, PatientList, PatientHistory } from "../index";
import { useState } from "react";

// eslint-disable-next-line no-unused-vars
const Patients = ({ onPatientSelect }) => {
  const [patient, setPatient] = useState("");
  const handlePatient = (patient) => {
    setPatient(patient);
  };

  return (
    <div>
      <div className="flex">
        <PatientList patient={patient} onPatientSelect={handlePatient} />
        <main className="flex-1">
          <PatientHistory />
        </main>
        <PatientInfo patient={patient} />
      </div>
    </div>
  );
};

export default Patients;
