import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./index.js";
import { Button } from "./index.js";
import { Badge } from "../components/ui/Badge.jsx";
import { Clock, Video } from "lucide-react";

export default function Appointments() {
  const [showForm, setShowForm] = React.useState(false); // State to toggle the input form
  const [newAppointment, setNewAppointment] = React.useState({
    patient: "",
    time: "",
    type: "Check-up",
    isVideo: false,
    date: "",
  });
  const [appointments, setAppointments] = React.useState([]); // State to hold the list of appointments

  const handleClick = (e) => {
    e.preventDefault();
    setShowForm(true); // Show the input form
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add new appointment to the list
    setAppointments((prevAppointments) => [
      ...prevAppointments,
      { ...newAppointment, id: prevAppointments.length + 1, time: `${newAppointment.time}:00` },
    ]);
    // Reset the form and hide it
    setNewAppointment({
      patient: "",
      time: "",
      type: "Check-up",
      isVideo: false,
      date: "",
    });
    setShowForm(false);
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">Appointments</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Today&apos;s Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Display appointments */}
            <ul className="space-y-4 ">
              {appointments.map((appointment) => (
                <li key={appointment.id}>
                  <div className="flex flex-wrap justify-between items-center">
                    <p className="font-medium text-xl">{appointment.patient}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      {appointment.time && <Clock className="mr-1 h-4 w-4" />}
                      {appointment.time}
                    </div>
                    <div className="flex items-center">
                      <Badge variant={appointment.isVideo ? "default" : "secondary"} className="mr-2 text-xl">
                        {appointment.type}
                      </Badge>
                      {appointment.isVideo && <Video className="h-4 w-4 text-blue-500" />}
                    </div>
                    {appointment.date && <p>{appointment.date}</p>}
                  </div>
                </li>
              ))}
            </ul>

            {/* Button to show form */}
            {!showForm && (
              <Button
                className="w-full mt-4 bg-green-600 py-2 hover:opacity-50 text-gray-950"
                onClick={handleClick}
              >
                Schedule New Appointment
              </Button>
            )}

            {/* Form to create a new appointment */}
            {showForm && (
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div>
                  <label className="block text-sm font-medium">Patient Name</label>
                  <input
                    type="text"
                    name="patient"
                    value={newAppointment.patient}
                    onChange={handleChange}
                    required
                    className="w-full border rounded px-2 py-1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Time</label>
                  <input
                    type="time"
                    name="time"
                    value={newAppointment.time}
                    onChange={handleChange}
                    required
                    className="w-full border rounded px-2 py-1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Type</label>
                  <select
                    name="type"
                    value={newAppointment.type}
                    onChange={handleChange}
                    className="w-full border rounded px-2 py-1"
                  >
                    <option value="Check-up">Check-up</option>
                    <option value="Follow-up">Follow-up</option>
                    <option value="Consultation">Consultation</option>
                  </select>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="isVideo"
                    checked={newAppointment.isVideo}
                    onChange={(e) =>
                      setNewAppointment((prev) => ({
                        ...prev,
                        isVideo: e.target.checked,
                      }))
                    }
                  />
                  <label className="ml-2 text-sm font-medium">Video Appointment</label>
                </div>

                <div>
                  <label className="block text-sm font-medium">Select Appointment Date</label>
                  <input
                    name="date"
                    type="date"
                    value={newAppointment.date}
                    onChange={handleChange}
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 py-2">
                  Add Appointment
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
