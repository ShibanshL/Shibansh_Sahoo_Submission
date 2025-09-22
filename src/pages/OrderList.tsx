//this is here is the order list page which shows us a table of users via which we can sort through

import { useEffect, useState } from 'react'
import { CiCalendar, CiSearch } from "react-icons/ci";
import { useSelector } from 'react-redux';
import { GrDescend } from "react-icons/gr";
import { LuArrowDownUp } from "react-icons/lu";
import { MdAdd } from "react-icons/md";
import { FaAngleLeft, FaAngleRight} from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { fakeWork,fakeDate, StatusText  } from '../components/DynamicFunc';

function OrderList() {
  //redux variables
  const theme = useSelector((state:any) => state.toggleSite.theme)

  //state variables
  const [users, setUsers]:any = useState([]) //all of the users
  const [paginatedUsers, setPaginatedUsers]:any = useState([]) //paginated users for the table
  const [page, setPage] = useState(1) //page number for pagination
  const [loading, setLoading] = useState(false) //boolean variable for loading
  const [search, setSearch] = useState('') //search variable for user search
  const [selected, setSelected]:any = useState([]) //array variable if user selects a user

  //this function checks if a particular user is selected or not, if selected it removes
  //the user and if not selected it adds the user to the selected array
  const manageUsers = (e:string) => {
      if(!selected.includes(e)){
          setSelected((prev:string) => [...prev,e])
      }
      if(selected.includes(e)){
          let array = [...selected]; 
          let index = array.indexOf(e)
          if (index !== -1) {
              array.splice(index, 1);
              setSelected(array);
          }
      }
  }

  //this is the fetch request sent to an api that provides us the users
  useEffect(() => {
    const getUsers = async () => {
    setLoading(true)
      const url = 'https://dummyjson.com/users'
      const res = await fetch(url);
      const data = await res.json()
      if(data){
        setUsers(data.users)
        setLoading(false)
      }
    }
    getUsers()
  }, []); 

  //this here manages paginations and search
  useEffect(() => {

    //here the number of user fetched is being broken down to be paginated
    const startIndex = (page - 1) * 10;
    const currentItems = users.slice(startIndex, startIndex + 10);
    setPaginatedUsers(currentItems)

    //here if user us searching something. the code sorts through user array to find result
    if(search){
          setPaginatedUsers(users.filter((e:any) => {
          return e.firstName.toLowerCase().includes(search.toLowerCase()) || e.lastName.toLowerCase().includes(search.toLowerCase());
      }))
    }

    
  },[users, page, search])


  return (
    <div className='centerCol OrderList'>
      <div className="Space h-[20px]"></div>
      <div className="centerRow OrderHeading">
        <h1>Order List</h1>
      </div>
      <div className="Space h-[10px]"></div>
      <div className="centerRow OrderListSearch">
        <div className="centerRow SearchOptions">
          <div className="centerRow SearchSortIcons">
            <MdAdd color={theme?'white':'black'} size={20}/>
          </div>
          <div className="centerRow SearchSortIcons">
            <GrDescend color={theme?'white':'black'} size={13}/>
          </div>
          <div className="centerRow SearchSortIcons">
            <LuArrowDownUp color={theme?'white':'black'} size={15}/>
          </div>
        </div>
        <div className="centerRow SearchInput">
          <div className="centerRow SearchIcon">
            <CiSearch color={theme?'white':'black'} size={15}/>
          </div>
          <input type="text" value={search} onChange={(v:any) => setSearch(v.target.value)} placeholder='Search' />
        </div>
      </div>
      <div className="Space h-[10px]"></div>
      <div className="centerCol OrderListTable">
        <div className={`centerCol OrderSub`}>
          <div className="centerRow TableHead">
            <div className='centerRow InpBox'>
              <div onClick={() => selected.length > 0 ?setSelected([]):setSelected(paginatedUsers)} className={selected.length > 0 ? "centerRow BoxSelected":"centerRow Box"}>
                <TiTick color={!theme?'white':'#1c1c1c'}/>
              </div>
            </div>
            <div className='centerRow OrderID'>Order ID</div>
            <div className='centerRow UserName'>User</div>
            <div className='centerRow ProjectName'>Project</div>
            <div className='centerRow Address'>Address</div>
            <div className='centerRow Date'>Date</div>
            <div className='centerRow Status'>Status</div>
          </div>
          <div className="TableBody">
            {!loading?
              (
                <>
                  {paginatedUsers.length > 0 ? paginatedUsers.map((e:any, idx:number) => {
                    return(
                      <>
                        <div className="centerRow TableIndividualRow">
                          <div className='centerRow inpBox'>
                            <div role='button' onClick={() => manageUsers(e.firstName)} className={selected.includes(e.firstName) || selected.length == 10 ? "centerRow BoxSelected":"centerRow Box"}>
                              <TiTick color={!theme?'white':'#1c1c1c'}/>
                            </div>
                          </div>
                          <div className='centerRow order'>
                            <h1>
                              #CM{`${9801+idx}`}
                            </h1>
                          </div>
                          <div className='centerRow name'>
                            <div className="UserIcon">
                              <img src={e.image} className='h-full w-full' alt="" />
                            </div>
                            <h1>{e.firstName} {e.lastName}</h1>
                          </div>
                          <div className='centerRow project'>
                            <h1>{fakeWork((idx % 5) + 1)}</h1>
                          </div>
                          <div className='centerRow userAddress'>
                            <h1>{e.address.address}</h1>
                          </div>
                          <div className='centerRow userDate'>
                            <div className="centerRow CalenderIcon">
                              <CiCalendar color={!theme?'black':'white'} size={15}/>
                            </div>
                            <h1>{fakeDate((idx % 7) + 1)}</h1>
                          </div>
                          <div className='centerRow userStatus'>
                            {StatusText((idx % 5) + 1)}
                          </div>
                        </div>
                      </>
                    )
                  }):(
                    <>
                      <div className="centerRow NoUsersFound">
                        <h1>No Users with such name found.</h1>
                      </div>
                    </>
                  )}
                </>
              )
            : (
              <>
                {Array.apply(null, Array(10)).map(() => {
                  return(
                    <>
                      <div className="centerRow TableIndividualRowLoading">
                        <div className='centerRow inpBox'>
                          <div className="Box"></div>
                        </div>
                        <div className="LoadingBar" 
                        ></div>
                      </div>
                    </>
                  )
                })}
              </>
            )}
          </div>
          <div className="centerRow Pagination">
              <div className="centerRow PaginateButtons">
                <div role='button' onClick={() => {
                  if(page > 1)setPage(page-1)
                }} className="centerRow PaginateIconsL">
                  <FaAngleLeft color='black' size={12}/>
                </div>
                  {Array.from({ length: Math.ceil(users.length / 10) }, (_, i) => 
                    {
                      return(
                        <>
                          <div role='button' onClick={() => setPage(i+1)} className={`centerRow PaginateNumbers ${i+1 == page && 'Selected'}`}>
                            {i+1}
                          </div>
                        </>
                      )
                    }
                  )}
                <div
                  role='button' onClick={() => {
                    if(page < Math.ceil(users.length / 10))setPage(page+1)
                  }}
                  className="centerRow PaginateIconsR">
                  <FaAngleRight color='black' size={12}/>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div className="Space h-[280px]"></div>
    </div>
  )
}



export default OrderList