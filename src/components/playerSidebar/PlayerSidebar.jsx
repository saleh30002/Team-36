import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";


const PlayerSidebar = () => {
  
  return (
    <div className="sidebar">
      <div className="top">
        
          <span className="logo">F.F.P</span>
        
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">SERVICES</p>
          <Link to="/playerhome" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Home</span>
          </li>
          </Link>
          <Link to="/notifications" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Alerts and Notifications</span>
            </li>
          </Link>
          <Link to="/playerhome" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>National Team Callup</span>
            </li>
          </Link>
          <Link to="/playertoclub" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>View Club Contract Renewal</span>
            </li>
          </Link>
          <Link to="/receivedcontractproposals" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Transfer System</span>
          </li>
          </Link>
          
          
          
        </ul>
      </div>
      
    </div>
  );
};

export default PlayerSidebar;
