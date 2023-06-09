import "./App.css";
import Navbar from "./components/Navbar";
import Menu from "./components/menu/Menu";
import Rootpage from "./view/indexPage/Rootpage";
import Register from "./view/Register/Register";
import Dashboard from "./view/Dashboard/Dashboard";
import EmptyWork from "./components/EmptyWork/EmptyWork";
import FormWork from "./components/FormWork/FormWork";
import VertyfyStatus from "./components/VertifyStatus/VertyfyStatus";
import DetailWork from "./components/DetailWork/DetailWork";
import Manage_register from "./components/DashboardComponent/Manage_register/Manage_register";
import IndexPage from "./components/DashboardComponent/index/IndexPage";
// import Manage_register from "./components/DashboardComponent/Manage_register";
import { Routes, Route } from "react-router-dom";
import Manage_position from "./components/DashboardComponent/Manage_position/Manage_position";
import Manage_agency from "./components/DashboardComponent/Manage_agency/Manage_agency";
import Manage_privilege from "./components/DashboardComponent/Manage_privilege/Manage_privilege";
import Manage_userRegister from "./components/DashboardComponent/Manage_userRegister/Manage_userRegister";
import Manage_users from "./components/DashboardComponent/Manage_users/Manage_users";
import Manage_money from "./components/DashboardComponent/Manage_money/Manage_money";
import Manage_document from "./components/DashboardComponent/Manage_document/Manage_document";
import Manage_search from "./components/DashboardComponent/Manage_search/Manage_search";
import Manage_typeUserRegister from "./components/DashboardComponent/Manage_typeUserRegister/Manage_typeUserRegister";
import Add_register from "./components/DashboardComponent/Manage_register/Add_resgister/Add_register";
import Apply_check from "./components/DashboardComponent/Manage_register/apply_check/Apply_check";
import UserRegister_Add from "./components/DashboardComponent/Manage_userRegister/userRegister_Add/userRegister_Add";
import Manage_users_add from "./components/DashboardComponent/Manage_users/Manage_users_add/Manage_users_add";
import Detail_Manage_money from "./components/DashboardComponent/Manage_money/detail_Manage_money/detail_Manage_money";
import Manage_ducument_add from "./components/DashboardComponent/Manage_document/Manage_ducument_add/Manage_ducument_add";
import NewUser from "./view/indexPage/Register";
import Edit_profile from "./components/Edit_profile";

import moment from "moment";
import "moment/locale/th";
import Manage_apply_check from "./components/DashboardComponent/Manage_document/Manage_apply_check/Manage_apply_check";

import NotFound from "./view/NotFound/NotFound";
import Is_accept from "./view/Is_accept/Is_accept";
import Detailposition from "./components/Detailposition/Detailposition";
import LoginAdmin from "./view/LoginAdmin/LoginAdmin";
moment.locale("th");
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Rootpage />} />
      <Route exact path="Newuser" element={<NewUser />} />
      <Route exact path="is_accept" element={<Is_accept />} />
      <Route path="Register" element={<Register />}>
        <Route index path="" element={<EmptyWork />} />
        <Route path="Position/:id" element={<Detailposition />} />
        <Route path="Edit_profile/:id" element={<Edit_profile />} />
        <Route path="VerifyStatus" element={<VertyfyStatus />} />
        <Route path="DetailWork/:id" element={<DetailWork />} />
        <Route path="DetailWork/FormWork/:id" element={<FormWork />} />
      </Route>

      <Route path="LoginInfo" element={<LoginAdmin />} />

      <Route path="Dashboard" element={<Dashboard />}>
        <Route index path="" element={<IndexPage />} />
        <Route path="Dashboard" element={<IndexPage />} />
        <Route path="Apply" element={<Manage_register />} />
        <Route path="Apply/edit" element={<Add_register />} />
        <Route path="Apply/edit/:id" element={<Add_register />} />
        <Route path="Apply/apply_check/:id" element={<Apply_check />} />

        <Route path="ManagePosition" element={<Manage_position />} />
        <Route path="Organization" element={<Manage_agency />} />

        <Route path="Member" element={<Manage_userRegister />} />
        <Route path="Member/add" element={<UserRegister_Add />} />
        <Route path="Member/add/:id" element={<UserRegister_Add />} />

        <Route path="User" element={<Manage_users />} />
        <Route path="User/add" element={<Manage_users_add />} />
        <Route path="User/add/:id" element={<Manage_users_add />} />

        <Route path="Permission" element={<Manage_privilege />} />

        <Route path="TypePosition" element={<Manage_typeUserRegister />} />

        <Route path="Payment" element={<Manage_money />} />
        <Route
          path="Payment/payment_check/:id"
          element={<Detail_Manage_money />}
        />

        <Route path="Document" element={<Manage_document />} />
        <Route path="Document/add" element={<Manage_ducument_add />} />
        <Route path="Document/add/:id" element={<Manage_ducument_add />} />
        <Route
          path="Document/apply_check/:id"
          element={<Manage_apply_check />}
        />
        <Route path="Information" element={<Manage_search />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
