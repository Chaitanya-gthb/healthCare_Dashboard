import Button from "./ui/Button";
import Image from "./ui/Image";
import Input from "./ui/Input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "./ui/Card";
import PatientCard from "./ui/PatientCard";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/Table";
import {PatientHistory} from './patients/PatientHistory'
import { PatientInfo } from "./patients/PatientInfo";
import { PatientList } from "./patients/PatientList";
import { BloodPressureGraph } from "./patients/Graph";
import Patients from './patients/Patients'
import Overview from '../components/Overview'
import Appointments from "./Appointments";
import Message from "./Message";
import Transactions from "./Transactions";

export {
  Input,
  Button,
  Image,
  Card,
  PatientCard,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
  Table,
  TableCaption,
  TableBody,
  TableFooter,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  PatientHistory,
  PatientInfo,
  PatientList,
  BloodPressureGraph,
  Overview,
  Appointments,
  Message,
  Transactions,
  Patients
};
