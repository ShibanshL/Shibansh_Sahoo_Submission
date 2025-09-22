//this is the main body file within which the default page and order page are rendered
//with react router

import { Routes, Route} from 'react-router'
import HomePage from '../pages/HomePage'
import OrderList from '../pages/OrderList'
import { PiSidebarDuotone } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiTimer } from "react-icons/ci";
import {  useDispatch, useSelector} from 'react-redux';
import { toggleSidebar, toggleNotifybar, toggleTheme } from '../store/conditions';
import { MdKeyboardCommandKey } from "react-icons/md";
import {  CiSearch } from "react-icons/ci";
import { MdDarkMode,MdLightMode } from "react-icons/md";
import NotFound from './NotFound';
import { useNavigate } from 'react-router';
import useScreenWidth from '../customHook/getScreenWidth';

function MainBody() {
  //redux varables
  const theme = useSelector((state:any) => state.toggleSite.theme)
  const dispatch = useDispatch()
  //navigation
  const nav = useNavigate()
  //custom hook for screen size
  const screenWidth = useScreenWidth()
  return (
    <div className={`centerCol MainBody ${theme && 'darkMode'}`}
    style={{transition:'0.5s ease'}}
    >
      <div className="centerRow Header">
        <div role='button' onClick={() => dispatch(toggleSidebar())} className="centerRow PC HeaderIcon">
          <PiSidebarDuotone color={!theme?'black':'white'} size={screenWidth < 800? 25 :15}/>
        </div>
        <div className="centerRow HeaderIcon Star">
          <FaRegStar color={!theme?'black':'white'} size={screenWidth < 800? 30 :15}/>
        </div>
        <div className="centerRow Breadcrumbs">
          <h1 className={`${!theme?'text-[rgba(0,0,0,0.2)]':'text-[rgba(255,255,255,0.2)]'}`}>Dashboards</h1>
          <h1 className={`${!theme?'text-[rgba(0,0,0,0.8)]':'text-[rgba(255,255,255,0.8)]'}`}>/</h1>
          <h1 className={`${!theme?'text-[rgba(0,0,0,0.8)]':'text-[rgba(255,255,255,0.8)]'}`}>Default</h1>
        </div>
        <div className="centerRow HeaderControls">
          <div className="centerRow HeaderSearch">
            <div className="centerRow SearchBar">
              <div className="centerRow SearchIcon">
                <CiSearch color={!theme?'rgba(0,0,0,0.2)':'rgba(255,255,255,0.2)'} size={20}/>
              </div>
              <div className="SearchInput">
                <input type="text" name="" id="" placeholder='Search'/>
              </div>
              <div className="centerRow CommandIcon">
                <MdKeyboardCommandKey color={!theme?'rgba(0,0,0,0.2)':'rgba(255,255,255,0.2)'} size={20}/>
              </div>
            </div>
          </div>
          <div onClick={() => dispatch(toggleTheme())} className="centerRow HeaderIcon">
            {!theme && <div className="centerRow DarkMode">
              <MdDarkMode color={!theme?'black':'white'} size={screenWidth < 800? 25 :15}/>
            </div>}
            <div className="centerRow LightMode">
              <MdLightMode color={!theme?'black':'white'} size={screenWidth < 800? 25 :15}/>
            </div>
          </div>
          <div role='button' onClick={() => nav('/order')} className="centerRow HeaderIcon Timer">
            <CiTimer color={!theme?'black':'white'} size={screenWidth < 800? 25 :15}/>
          </div>
          <div className="centerRow HeaderIcon NotificationICon">
            <IoMdNotificationsOutline color={!theme?'black':'white'} size={screenWidth < 800? 25 :15}/>
          </div>
          <div role='button' onClick={() => dispatch(toggleNotifybar())} className="centerRow HeaderIcon">
            <PiSidebarDuotone color={!theme?'black':'white'} size={screenWidth < 800? 25 :15}/>
          </div>
        </div>
      </div>
      <div className="MainbodySub">
            <Routes>
              <Route
                path="/"
                element={<HomePage />}
              />
              <Route
                path="/order"
                element={<OrderList />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
      </div>
    </div>
  )
}

export default MainBody