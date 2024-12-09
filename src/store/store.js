import { configureStore } from "@reduxjs/toolkit";
import patientSlice from './PatientSlice'

const store = configureStore({
  reducer: {
    patientData: patientSlice
  },
});

export default store;
