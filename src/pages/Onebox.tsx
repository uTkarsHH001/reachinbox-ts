
import { useContext, useEffect } from 'react';
// import Home from '../Components/Home';
import List from '../Components/List';
import Sidebar from '../Components/Sidebar';
import Topbar from '../Components/Topbar'
import { ThemeContext } from '../context/ThemeContext';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Onebox() {

  const Navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search)
  const tokenFromUrl = queryParams.get("token");

  useEffect(() => {
    
    const storedToken = localStorage.getItem("token");

    if (tokenFromUrl) {
      localStorage.setItem("token", `Bearer ${tokenFromUrl}`)
    } else if (!storedToken) {
      Navigate("/")
    }
  }, [tokenFromUrl, Navigate]);

  const {theme } = useContext(ThemeContext)

  return (
    <div className={`w-screen h-screen overflow-hidden bg-${theme}-bg text-${theme}-text`}>
      <Topbar />
      <Sidebar />
      <div className="w-full h-full lg:pl-20 pt-12">
        <List />
      </div>
    </div>
  );
}
