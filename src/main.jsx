import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/HOme.jsx';
import First from './First/First.jsx';
import Application from './ApplicationForm/Application.jsx';
import Facilities from './Facilities/Facilities.jsx';
import Branches from './Branches/Branches.jsx';
import Teacher from './Teacher/Teacher.jsx';
import Chirman from './Chairman/Chirman.jsx';
import Principal from './Principal/Principal.jsx';
import GoverningBody from './GoverningBody/GoverningBody.jsx';
import HealthCare from './HealthCare/HealthCare.jsx';
import DressCode from './DressCode/DressCode.jsx';
import Calendar from 'react-calendar';
import MyCalender from './MyCalender/MyCalender.jsx';
import StudentsOath from './StudentsOath/StudentsOath.jsx';
import Library from './Library/Library.jsx';
import Laboratory from './Laboratory/Laboratory.jsx';
import Courses from './Courses/Courses.jsx';

import PhotoGallery from './PhotoGallery/PhotoGallery.jsx';
import ReactTab from './ReactTab/ReactTab.jsx';
import AdmissionNotice from './AdmissionNotice/AdmissionNotice.jsx';
import ContactForm from './ContactForm/ContactForm.jsx';
import NewsDetails from './NewsDetails/NewsDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path: "",
        element:<First></First>,
        /* loader:()=>fetch('school.json') */
        
      },
      {
        path:'application',
        element:<Application></Application>
      },
      {
        path:'facilities',
        element:<Facilities></Facilities>
      },
      {
        path:'branches',
        element:<Branches></Branches>,
        

      },
      {
        path:'teacher',
        element:<Teacher></Teacher>
      },
      {
        path:'chirman',
        element:<Chirman></Chirman>

      },
      {
        path:'principal',
        element:<Principal></Principal>
      },
      {
        path:'governing',
        element:<GoverningBody></GoverningBody>
      },
      {
        path:'healthCare',
        element:<HealthCare></HealthCare>
      },
      {
        path:'dressCode',
        element:<DressCode></DressCode>
      },
      {
        path:'calendar',
        element:<MyCalender></MyCalender>,
      },
      {
        path:'oath',
        element:<StudentsOath></StudentsOath>
      },
      {
        path:'library',
        element:<Library></Library>
      },
      {
        path:'laboratory',
        element:<Laboratory></Laboratory>
      },
      {
        path:'courses',
        element:<Courses></Courses>
      },
      {
        path:'photogallery',
        element:<PhotoGallery></PhotoGallery>
      },
      {
        path:'reacttab',
        element:<ReactTab></ReactTab>
      },
      {
        path:'admissionnotice',
        element:<AdmissionNotice></AdmissionNotice>
      },
      {
        path:'contactform',
        element:<ContactForm></ContactForm>
      },
      {
        path:'newsdetails',
        element:<NewsDetails></NewsDetails>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
