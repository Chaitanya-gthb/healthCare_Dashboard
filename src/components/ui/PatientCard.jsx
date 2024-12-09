/* eslint-disable react/prop-types */
import { Card, CardContent, CardHeader, CardTitle, Image, Button } from "../index";
import { Calendar, Phone, User, Activity } from 'lucide-react';


export default function PatientCard({
  name,
  age,
  gender,
  dateOfBirth,
  contactNumber,
  lastVisit,
  upcomingAppointment,
  imageSrc,
}) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="flex flex-row items-center gap-4">
        <Image
          src={imageSrc}
          alt={name}
          width={64}
          height={64}
          className="rounded-full"
        />
        <div>
          <CardTitle>{name}</CardTitle>
          <p className="text-sm text-muted-foreground">
            {age} years old, {gender}
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Born: {dateOfBirth}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{contactNumber}</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Last visit: {lastVisit}</span>
          </div>
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">
              {upcomingAppointment
                ? `Upcoming: ${upcomingAppointment}`
                : "No upcoming appointments"}
            </span>
          </div>
        </div>
        <div className="mt-4 flex justify-between">
          <Button variant="outline" size="sm">
            View History
          </Button>
          <Button variant="default" size="sm" className="bg-cyan-500 hover:bg-cyan-600">
            Schedule Appointment
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
