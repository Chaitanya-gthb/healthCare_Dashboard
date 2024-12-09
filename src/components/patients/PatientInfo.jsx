import { Calendar, Phone, Download } from "lucide-react";
import { Button, Image } from "../index";
import { useSelector } from "react-redux";

export function PatientInfo() {
  const { pData, pName } = useSelector((state) => state.patientData);

  return (
    <div className="w-80 border-l p-6">
      {pData &&
        pData.length > 0 &&
        pData.map((data, index) => {
          if (pName === data.name) {
            return (
              <div key={index}>
                <div className="text-center mb-6">
                  <Image
                    src={data.profile_picture}
                    alt={data.name}
                    width={120}
                    height={120}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h2 className="text-xl font-semibold">{data.name}</h2>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <div>
                      <div className="text-sm text-gray-500">Date Of Birth</div>
                      <div className="text-sm">{data.date_of_birth}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">⚥</span>
                    <div>
                      <div className="text-sm text-gray-500">Gender</div>
                      <div className="text-sm">{data.gender}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <div>
                      <div className="text-sm text-gray-500">Contact Info</div>
                      <div className="text-sm">{data.phone_number}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <div>
                      <div className="text-sm text-gray-500">
                        Emergency Contacts
                      </div>
                      <div className="text-sm">{data.emergency_contact}</div>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-gray-500 mb-1">
                      Insurance Provider
                    </div>
                    <div className="text-sm">{data.insurance_type}</div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-medium mb-4">Lab Results</h3>
                  <div className="space-y-3">
                    {data.lab_results.length > 0 &&
                      data.lab_results.map((test) => (
                        <div
                          key={test}
                          className="flex items-center justify-between"
                        >
                          <span className="text-sm">{test}</span>
                          <Button size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            );
          }
        })}
    </div>
  );
}
