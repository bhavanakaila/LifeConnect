import './App.css'
import RoutingError from './components/RoutingError';
import RootLayout from './RootLayout';
import Home from './components/home/Home'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Choose from './components/choose/choose';
import PatientLogin from './components/patientlogin/PatientLogin';
import HospitalLogin from './components/hospitallogin/HospitalLogin';
import PatientRegister from './components/patientreigster/PatientRegister';
import PatientProfile from './components/patientprofile/PatientProfile';
import Location from './components/location/Location';

function App() {
  const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <RoutingError />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/choose",
          element: <Choose />
        },
        {
          path:"/patientlogin",
          element: <PatientLogin />
        },
        {
          path: "/hospitallogin",
          element: <HospitalLogin />
        },
        {
          path:"/patientregister",
          element: <PatientRegister />
        },
        {
          path:"/patientprofile",
          element: <PatientProfile/>
        },
        {
          path:'/location',
          element:<Location />
        }
      ]
    }
  ]);
  
  return (
    <>
      <div>
            <RouterProvider router={browserRouter} />
      </div>
      
    </>
  )
}

export default App
