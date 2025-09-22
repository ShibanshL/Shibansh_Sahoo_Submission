
import { useSelector } from 'react-redux';
import useScreenWidth from '../customHook/getScreenWidth';
import {fakeNotification, fakeActivities, fakeContacts} from './FakeData'
import { dynamicIcons_Notify } from './DynamicFunc';



function Notification() {

  const notifyBar = useSelector((state:any) => state.toggleSite.notifyBar)
  const screenWidth = useScreenWidth();

  
  return (
    <div className={`centerCol Notification ${notifyBar ?`${screenWidth > 1200 && 'hidden display-none'}`:`${screenWidth > 1200 && 'nothidden notdisplay-none'}`}`}>
      <div className="centerCol Notify">
        <div className="Heading">Notifications</div>
        <div className="centerCol Notify_Lists">
          {fakeNotification.map((e:any, idx:number) => {
            return(
              <>
                <div className="centerRow NotificationIndv">
                  <div className="centerRow NotificationIcon">
                    {dynamicIcons_Notify(idx)}
                  </div>
                  <div className="centerCol NotificationInfo">
                    <h1>{e.notification}</h1>
                    <h2>{e.timing}</h2>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
      <div className="Space h-[10px]"></div>
      <div className="Activity">
        <div className="Heading">Activities</div>
        <div className="centerCol Activity_Lists">
          {fakeActivities.map((e:any) => {
            return(
              <>
                <div className="centerRow NotificationIndv">
                  <div className="ActivityIcon">
                    <img src={e.img} className='h-full min-w-full w-full' alt="err" />
                  </div>
                  <div className="centerCol NotificationInfo">
                    <h1>{e.activites}</h1>
                    <h2>{e.timing}</h2>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
      <div className="Space h-[10px]"></div>
      <div className="Contacts">
        <div className="Heading">Contacts</div>
        <div className="centerCol Contacts_Lists">
          {fakeContacts.map((e:any) => {
            return(
              <>
                <div className="centerRow ContactIndv">
                <div className="ContactIcon">
                  <img src={e.img} className='h-full w-full min-w-full' alt="err" />
                </div>
                <h1>{e.name}</h1>
                {/* <div className="ContactName"></div> */}
              </div>
              </>
            )
          })}
        </div>
      </div>
    </div>
  )
}



export default Notification