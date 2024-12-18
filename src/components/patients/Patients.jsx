// import React from 'react'

import { PatientHistory, PatientInfo, PatientList } from "..";

const Patients = () => {
  return (
    <div>
      <div className="flex">
        <PatientList />
        <main className="flex-1">
          <PatientHistory />
        </main>
        <PatientInfo />
      </div>
    </div>
  );
};

export default Patients;
