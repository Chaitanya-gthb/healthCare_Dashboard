import { Button, Image, Input } from "../index";
import { Search, MoreVertical } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../store/PatientSlice";
import { setPatientName } from "../../store/PatientSlice";

export function PatientList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeId, setActiveId] = useState(0);
  const dispatch = useDispatch();
  const { status, pData } = useSelector((state) => state.patientData);

  useEffect(() => {
    if (pData === null) dispatch(fetchData());
    console.log(pData)
  }, [dispatch, pData]);

  const handleChange = (data, index) => {
    setActiveId(index);
    dispatch(setPatientName(data.name));
  };

  let filteredPatients = "";
  if (pData !== null) {
    filteredPatients = pData.filter((patient) =>
      patient.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  if (status === "loading") return <p>Loading.......</p>;
  if (status === "failed") return <p>Error.......</p>;

  return (
    <div className="w-80 border-r bg-white overflow-y-scroll"
    style={{height : "1200px"}}>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Patients</h2>
        <div className="relative">
          <Search className="absolute left-2 top-1 h-4 w-4 text-gray-500 outline-none" />
          <Input
            placeholder="Search"
            className="pl-8 outline-none"
            value={searchQuery} //cha
            onChange={(e) => setSearchQuery(e.target.value)} //cha
          />
        </div>
      </div>
      <div className="space-y-1">
        {pData &&
          pData.length > 0 &&
          filteredPatients.map((data, index) => (
            <Button
              key={index}
              onClick={() => handleChange(data, index)}
              className={`w-full justify-between px-4 py-2 h-auto ${
                activeId === index ? "bg-cyan-100" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <Image
                  src={data.profile_picture}
                  alt={data.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="text-sm text-left">
                  <div className="font-medium">{data.name}</div>
                  <div className="text-gray-500">
                    {data.gender}, {data.age}
                  </div>
                </div>
              </div>
              <MoreVertical className="h-4 w-4 text-gray-500" />
            </Button>
          ))}
      </div>
    </div>
  );
}
