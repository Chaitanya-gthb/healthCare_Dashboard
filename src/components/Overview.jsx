import { Card, CardContent, CardHeader, CardTitle } from './index';
import { Progress } from './ui/Progress';
import { ArrowUp, ArrowDown, Activity, Heart, Droplet, Moon } from 'lucide-react';

export default function Overview() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Steps</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8,246</div>
            <Progress value={68} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">68% of daily goal</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Heart Rate</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">72 bpm</div>
            <div className="flex items-center mt-2">
              <ArrowDown className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-500 text-sm">Normal</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Blood Pressure</CardTitle>
            <Droplet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">120/80 mmHg</div>
            <div className="flex items-center mt-2">
              <ArrowUp className="h-4 w-4 text-yellow-500 mr-1" />
              <span className="text-yellow-500 text-sm">Slightly Elevated</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sleep</CardTitle>
            <Moon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7h 23m</div>
            <Progress value={92} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">92% of nightly goal</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex justify-between items-center">
                <span>Morning Run</span>
                <span className="text-muted-foreground">30 mins</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Yoga Session</span>
                <span className="text-muted-foreground">45 mins</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Evening Walk</span>
                <span className="text-muted-foreground">20 mins</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

