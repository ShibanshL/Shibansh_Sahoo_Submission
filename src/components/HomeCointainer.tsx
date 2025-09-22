//This is the homecontainer file which is the parent container to the sidebar
//, the mainbody and the notification bar component. Here i also manipulate the sidebar
// and the notifyBar to funciton differently based on the screen width

import Sidebar from './Sidebar'
import Notification from './Notification'
import MainBody from './MainBody'
import { useSelector, useDispatch } from 'react-redux'
import { IoMdClose } from "react-icons/io";
import { toggleSidebar, toggleNotifybar } from '../store/conditions'

function HomeCointainer() {

  //redux variables
  const theme = useSelector((state:any) => state.toggleSite.theme)
  const notifyBar = useSelector((state:any) => state.toggleSite.notifyBar)
  const sideBar = useSelector((state:any) => state.toggleSite.sideBar)
  const dispatch = useDispatch()
  return (
    <div className={`centerRow HomeCointainer ${theme && 'darkMode_1'}`}>
        <div className={!sideBar ? "MobileSideBarHide":"MobileSideBar"}>
          <div className="SideBarContainer">
            <div role="button" onClick={() => dispatch(toggleSidebar())} className="centerRow Close">
              <IoMdClose color={theme?"white":"black"}/>
            </div>
            <Sidebar />
          </div>
        </div>
        <div className="PC_SideBar ">
          <Sidebar />
        </div>
        <MainBody />
        <div className="PC_SideBar ">
          <Notification />
        </div>
        <div className={!notifyBar ? "MobileNotificationBarHide":"MobileNotificationBar"}>
          <div className="MobileNotificationContainer">
            <div className="centerRow Close" onClick={() => dispatch(toggleNotifybar())}>
              <IoMdClose color={theme?"white":"black"}/>
            </div>
            <Notification />
          </div>
        </div>
    </div>
  )
}

export default HomeCointainer