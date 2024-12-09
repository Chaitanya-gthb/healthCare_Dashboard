import { AirVentIcon as Lung, Thermometer, Heart } from "lucide-react";
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../index";
import { BloodPressureGraph } from "./Graph";
import { useSelector } from "react-redux";

export function PatientHistory() {
  const { pData, pName } = useSelector((state) => state.patientData);

  return (
    <div className="flex-1 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Diagnosis History</h2>
        <select className="border rounded-md px-3 py-1.5 text-sm">
          <option>Last 6 months</option>
        </select>
      </div>

      <div className="mb-8">
        <BloodPressureGraph />
      </div>

      {pData &&
        pData.length > 0 &&
        pData.map((data, index) =>
          pName === data.name ? (
            <div
              key={index}
              className="grid grid-cols-3 gap-4 mb-8 overflow-y-scroll h-96"
            >
              <Card className="p-4 bg-blue-50">
                <div className="flex items-center gap-2 mb-2">
                  <Lung className="h-5 w-5" />
                  <span className="text-sm">Respiratory Rate</span>
                </div>
                {data.diagnosis_history.map((data) => (
                  <div key={data.month} className="mb-5">
                    <div className="text-2xl font-semibold">{data.month}</div>
                    <div className="text-2xl font-semibold">
                      {data.respiratory_rate.value}
                    </div>
                    <div className="text-sm text-gray-500">
                      {data.respiratory_rate.levels}
                    </div>
                  </div>
                ))}
              </Card>

              <Card className="p-4 bg-red-50">
                <div className="flex items-center gap-2 mb-2">
                  <Thermometer className="h-5 w-5" />
                  <span className="text-sm">Temperature</span>
                </div>
                {data.diagnosis_history.map((data, index) => (
                  <div key={index} className="mb-5">
                    <div className="text-2xl font-semibold">{data.month}</div>
                    <div className="text-2xl font-semibold">
                      {data.temperature.value}
                    </div>
                    <div className="text-sm text-gray-500">
                      {data.temperature.levels}
                    </div>
                  </div>
                ))}
              </Card>

              <Card className="p-4 bg-red-50">
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="h-5 w-5" />
                  <span className="text-sm">Heart Rate</span>
                </div>
                {data.diagnosis_history.map((data, index) => (
                  <div key={index} className="mb-5">
                    <div className="text-2xl font-semibold">{data.month}</div>
                    <div className="text-2xl font-semibold">
                      {data.heart_rate.value}
                    </div>
                    <div className="text-sm text-gray-500">
                      {data.heart_rate.levels}
                    </div>
                  </div>
                ))}
              </Card>
            </div>
          ) : (
            ""
          )
        )}

      <div>
        <h3 className="text-lg font-medium mb-4">Diagnostic List</h3>

        {pData &&
          pData.length > 0 &&
          pData.map((data, index) =>
            pName === data.name ? (
              <Table key={index}>
                <TableHeader>
                  <TableRow key={index}>
                    <TableHead>Name </TableHead>
                    <TableHead>Description </TableHead>
                    <TableHead>Status </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.diagnostic_list.map((ddata, index) => (
                    <TableRow key={index}>
                      <TableCell>{ddata.name}</TableCell>
                      <TableCell>{ddata.description}</TableCell>
                      <TableCell>{ddata.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              ""
            )
          )}

        {/* <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Problem/Diagnosis</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Hypertension</TableCell>
              <TableCell>Chronic high blood pressure</TableCell>
              <TableCell>Under Observation</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Type 2 Diabetes</TableCell>
              <TableCell>Insulin resistance and elevated blood sugar</TableCell>
              <TableCell>Cured</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Asthma</TableCell>
              <TableCell>
                Recurrent episodes of bronchial constriction
              </TableCell>
              <TableCell>Inactive</TableCell>
            </TableRow>
          </TableBody>
        </Table> */}
      </div>
    </div>
  );
}
