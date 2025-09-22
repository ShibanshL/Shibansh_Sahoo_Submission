import { GoDotFill } from "react-icons/go";
import { FaChevronRight } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import useScreenWidth from '../customHook/getScreenWidth';
import { useNavigate } from 'react-router';
import { dynamicIcons } from "./DynamicFunc";
import { toggleSidebar } from "../store/conditions";

const DashBoards = [
 "DashBoard", "eCommerce", "Projects", "Online Courses"
]

const Pages = [
  "Account", "Corporate", "Blog", "Social"
]

const SubPages = [
  "Overview", "Projects", "Campaign", "Document", "Followers"
]

function Sidebar() {
  const sideBar = useSelector((state:any) => state.toggleSite.sideBar)
  const theme = useSelector((state:any) => state.toggleSite.theme)
  const screenWidth = useScreenWidth()
  const dispatch = useDispatch()
  const nav = useNavigate()
  
  return (
    <div className={`centerCol Sidebar ${sideBar ?` ${screenWidth > 1200 && 'hidden display-none'}`:`${screenWidth > 1200 && 'nothidden notdisplay-none'}`}`}
    >
      <div className="centerRow SiteLogo" onClick={() => nav('/')}>
        <div className="SiteLogoIcon">
          <img onClick={() => {nav('/'); dispatch(toggleSidebar())}} src="https://images.pexels.com/photos/3751397/pexels-photo-3751397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='h-full w-full' alt="" />
        </div>
        <h1>ByeWind</h1>
      </div>
      <div className="centerCol Favorites">
        <div className="centerRow Favorites_Heading">
          <h1>Favorites</h1>
          <h2>Recently</h2>
        </div>
        <div className="centerCol Favorite_Options">
          <div className="centerRow Favorite_Op_Indv">
            <div className="centerRow Favorite_Icon">
              <GoDotFill size={10} color={!theme?'rgba(0,0,0,0.2)':'rgba(255,255,255,0.2)'}/>
            </div>
            <h1>Overview</h1>
          </div>
          <div className="centerRow Favorite_Op_Indv">
            <div className="centerRow Favorite_Icon">
              <GoDotFill size={10} color={!theme?'rgba(0,0,0,0.2)':'rgba(255,255,255,0.2)'}/>
            </div>
            <h1>Projects</h1>
          </div>
        </div>
      </div>
      <div className="centerCol Dashboard">
        <div className="DashboardHeading">
          <h1>Dashboards</h1>
        </div>
        <div className="centerCol Dashboardoptions">
          {DashBoards.map((e:string) => {
            return(
              <>
                <div className="centerRow DashCard">
                  <div className="IfSelected"></div>
                  <div className="centerRow DashRightIcon">
                    <FaChevronRight size={8} color={!theme?'rgba(0,0,0,0.2)':'rgba(255,255,255,0.2)'}/>
                  </div>
                  <div className="centerRow Dash_Indv_Card">
                    <div className="Dashicon">
                      {dynamicIcons(e)}
                    </div>
                    <h1>{e}</h1>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
      <div className="Pages">
        <div className="PagesHeading">
          <h1>Pages</h1>
        </div>
        <div className="centerCol PagesOptions">
            <div className="centerCol DashCardOpen">
              <div className="centerRow DashCard">
                <div className="IfSelected"></div>
                <div className="centerRow DashRightIcon">
                  <FaChevronRight size={8} color={!theme?'rgba(0,0,0,0.2)':'rgba(255,255,255,0.2)'}/>
                </div>
                <div className="centerRow Dash_Indv_Card">
                  <div className="Dashicon">
                    {dynamicIcons("User Profile")}
                  </div>
                  <h1>User Profile</h1>
                </div>
              </div>
              <div className="centerCol DashCardOpenList">
                {SubPages.map((e:string) => {
                  return(
                    <>
                      <h1>{e}</h1>
                    </>
                  )
                })}
              </div>
            </div>
            {Pages.map((e) => {
              return(
                <>
                  <div className="centerRow DashCard">
                    <div className="IfSelected"></div>
                    <div className="centerRow DashRightIcon">
                      <FaChevronRight size={8} color={!theme?'rgba(0,0,0,0.2)':'rgba(255,255,255,0.2)'}/>
                    </div>
                    <div className="centerRow Dash_Indv_Card">
                      <div className="Dashicon">
                        {dynamicIcons(e)}
                      </div>
                      <h1>{e}</h1>
                    </div>
                  </div>
                </>
              )
            })}
        </div>
      </div>
    </div>
  )
}



export default Sidebar