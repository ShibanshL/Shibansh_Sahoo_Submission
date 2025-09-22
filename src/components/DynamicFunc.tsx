//This is the file used for dynamic imports of texts or icons as per the requirement.

import { PiChartPieSlice } from "react-icons/pi";
import { useSelector } from 'react-redux';
import { FiShoppingCart } from "react-icons/fi";
import { CiFolderOn } from "react-icons/ci";
import { IoBookOutline } from "react-icons/io5";
import { RiProfileLine } from "react-icons/ri";
import { MdOutlineAccountCircle } from "react-icons/md";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { FaRegAddressBook } from "react-icons/fa";
import { CiChat1 } from "react-icons/ci";
import { BiBug } from 'react-icons/bi';
import { CiUser } from "react-icons/ci";
import { IoIosRadio } from "react-icons/io";

export const dynamicIcons = (e:string) => {
  const theme = useSelector((state:any) => state.toggleSite.theme)

  if(e == "DashBoard"){
    return <PiChartPieSlice size={18} color={!theme?'black':'white'}/>
  }

  if(e == "eCommerce"){
    return <FiShoppingCart size={18} color={!theme?'rgba(0,0,0,0.8)':'white'}/>
  }

  if(e == "Projects"){
    return <CiFolderOn size={18} color={!theme?'black':'white'}/>
  }

  if(e == "Online Courses"){
    return <IoBookOutline size={16} color={!theme?'black':'white'}/>
  }

  if(e == "User Profile"){
    return <RiProfileLine size={18} color={!theme?'rgba(0,0,0,0.8)':'white'}/>
  }

  if(e == "Account"){
    return <MdOutlineAccountCircle size={18} color={!theme?'rgba(0,0,0,0.8)':'white'}/>
  }

  if(e == "Corporate"){
    return <MdOutlineSupervisorAccount size={18} color={!theme?'rgba(0,0,0,0.8)':'white'}/>
  }

  if(e == "Blog"){
    return <FaRegAddressBook size={18} color={!theme?'rgba(0,0,0,0.8)':'white'}/>
  }

  if(e == "Social"){
    return <CiChat1 size={18} color={!theme?'black':'white'}/>
  }

  return null
}

export const dynamicIcons_Notify = (e:number) => {

  if(e == 0){
    return (
      <>
        <BiBug color="black" size={15}/>
      </>
    )
  }
   if(e == 1){
    return (
      <>
        <CiUser color="black" size={15}/>
      </>
    )
  }
   if(e == 2){
    return (
      <>
        <BiBug color="black" size={15}/>
      </>
    )
  }
  if(e == 3){
    return (
      <>
        <IoIosRadio color="black" size={15}/>
      </>
    )
  }
}

export const StatusText = (e:number) => {
  if(e == 1)
  {
    return(
      <>
         <div className="StatusIcon bg-yellow-500"></div>
          <h1 className='text-yellow-500'>In Progress</h1>
      </>
    )
  }
  if(e == 2)
  {
     return(
      <>
         <div className="StatusIcon bg-blue-500"></div>
          <h1 className=" text-blue-500">Pending</h1>
      </>
    )
  }
  if(e == 3)
  {
     return(
      <>
         <div className="StatusIcon bg-green-500"></div>
          <h1 className=" text-green-500">Complete</h1>
      </>
    )
  }
  if(e == 4)
  {
     return(
      <>
         <div className="StatusIcon bg-orange-500"></div>
          <h1 className=" text-orange-500">Approved</h1>
      </>
    )
  }
  if(e == 5)
  {
     return(
      <>
         <div className="StatusIcon bg-red-500"></div>
          <h1 className=" text-red-500">Rejected</h1>
      </>
    )
  }
}



export const fakeDate = (e:number) => {
  if(e == 1)
  {
    return 'Just Now'
  }
  if(e == 2)
  {
     return 'Feb 29 2023'
  }
  if(e == 3)
  {
     return '15 hours ago'
  }
  if(e == 4)
  {
     return '59 Minutes ago'
  }
  if(e == 5)
  {
     return 'Yesterday'
  }
  if(e == 6)
  {
    return '3 hours ago'
  }
  if(e == 7)
  {
     return 'November 2 2024'
  }
  
}

export const fakeWork = (e:number) => {
  if(e == 1)
  {
    return 'Landing Page'
  }
  if(e == 2)
  {
     return 'CRM Admin Pages'
  }
  if(e == 3)
  {
     return 'Client Project'
  }
  if(e == 4)
  {
     return 'Admin Dashboard'
  }
  if(e == 5)
  {
     return 'App Landing Page'
  }
}