import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import CareerManage from "./Components/CareerManage/CareerManage";
import CareerPost from "./Components/CareerManage/CareerPost";
import CareerUpdate from "./Components/CareerManage/CareerUpdate";
import CareerView from "./Components/CareerManage/CareerView";
import Dashboard from "./Components/Dashboard/Dashboard";
import Property from "./Components/Home/Property/Property";
import Lead from "./Components/Lead/Lead";
import LeadDetails from "./Components/Lead/LeadDetails";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Permission from "./Components/Permission/Permission";
import Profile from "./Components/Profile/Profile";
import QueryManage from "./Components/QueryManage/QueryManage";
import QuerySent from "./Components/QueryManage/QuerySent";
import QueryView from "./Components/QueryManage/QueryView";
import Signup from "./Components/Signup/Signup";
import User from "./Components/User/User";


function App() {

  return (
    <div className="App">
      {/* <TopBar /> */}

      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Navbar />}>
          <Route index element={<Dashboard />} />
          <Route path="property" element={<Property />} />
          <Route path="chat" element={<Permission />} />

          <Route path="lead" element={<Lead />} /> 
          <Route path="lead/:addlead" element={<LeadDetails />} />
          <Route path="profile" element={<Profile />} />
          <Route path="user" element={<User />} />
          <Route path="careermanage" element={<CareerManage />} />
          <Route path="careermanage/careerpost" element={<CareerPost />} />
          <Route path="careermanage/careerupdate/:careerupdate" element={<CareerUpdate />} />
          <Route path="careermanage/careerview/:careerview" element={<CareerView />} />
          <Route path="querymanage" element={<QueryManage />} />
          <Route path="querymanage/queryview/:queryview" element={<QueryView />} />
          <Route path="querymanage/queryadd/:querysent" element={<QuerySent />} />
        </Route>

        {/* <Route path="/userInfo" element={<BasicInfo />}>
          <Route
            index
            element={
              <BasicInformation builderProfileData={builderProfileData} />
            }
          />
          <Route path="plan" element={<Plan planData={planData} />} />
          <Route
            path="amenties"
            element={<Amenties amentiesData={amentiesData} />}
          />
          <Route path="legal" element={<Legal legalData={legalData} />} />
          <Route
            path="project"
            element={<Project projectData={projectData} />}
          />
          <Route
            path="builder"
            element={<BuldierProfile allData={allData} />}
          />
        </Route> */}
        {/* <Route path="/congratulation" element={<Congratulation />} /> */}
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
