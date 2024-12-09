import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("patientData/fetchData", async () => {
  const url = import.meta.env.VITE_HEALTHCARE_URL;
  const username = "coalition";
  const password = "skills-test";

  const res = await fetch(url, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${btoa(`${username}:${password}`)}`,
    },
  });
  const data = await res.json();
  return data;
});

const patientSlice = createSlice({
  name: "patientData",
  initialState: {
    error: null,
    pData: null,
    pName: "Emily Williams",
    status: "idle",
  },

  reducers: {
    setPatientData: (state, action) => {
      state.status = "idle"
      state.error = null
      state.pData = action.payload;
    },
    setPatientName: (state, action) => {
      state.status = "idle"
      state.error = null
      state.pName = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.pData = action.payload; // Update `pData` with the fetched data
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setPatientData, setPatientName } = patientSlice.actions;
export default patientSlice.reducer;
