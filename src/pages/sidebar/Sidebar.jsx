import React from 'react'
import { Link } from 'react-router-dom'
import { PageRoute } from '../../enum/routes.enum'
import SideBarContent from '../../components/SideBarContent'
import { BiHome, BiSolidPackage } from 'react-icons/bi'
import { BsCardImage, BsBorderStyle } from 'react-icons/bs'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import { PiUsersThree } from 'react-icons/pi'
import { MdAssignmentTurnedIn, MdContactPage, MdAdminPanelSettings, MdAccountBalance, MdOutlineNewspaper, MdSwitchAccount } from 'react-icons/md'
import { FaPiggyBank } from 'react-icons/fa'
import { FiSettings } from 'react-icons/fi'

const Sidebar = () => {
    return <>

        <div>
            <div className=' bg-slate-800 h-screen overflow-y-scroll scrollbar-none '>

                {/* <div className='border text-white font-bold'>
                    <h1>Synergy Drom</h1>
                </div> */}

                <Link to={PageRoute.DASHBOARD} className="[&.active]:text-black/90 dark:[&.active]:text-zinc-400">
                    <div className='flex text-center text-white hover:font-semibold cursor-pointer'>
                        <BiHome size={20} className='mt-3 ml-2' />
                        <SideBarContent label="Dashboard" />
                    </div>
                </Link>

                <div className='flex text-center text-white hover:font-semibold cursor-pointer'>
                    <BsCardImage size={20} className='mt-3 ml-2' />
                    <SideBarContent label="Image Gallery" />
                </div>

                <div className='flex text-center text-white hover:font-semibold cursor-pointer'>
                    <BiSolidPackage size={20} className='mt-3 ml-2' />
                    <SideBarContent label="Package" />
                </div>

                <div className='flex text-center text-white hover:font-semibold cursor-pointer'>
                    <BiSolidPackage size={20} className='mt-3 ml-2' />
                    <SideBarContent label="Package list" />
                </div>

                <div className='flex text-center text-white hover:font-semibold cursor-pointer'>
                    <BsBorderStyle size={20} className='mt-3 ml-2' />
                    <SideBarContent label="Order" />
                </div>

                <div className='flex text-center text-white hover:font-semibold cursor-pointer'>
                    <AiOutlineShoppingCart size={20} className='mt-3 ml-2' />
                    <SideBarContent label="Cart" />
                </div>

                <Link to={PageRoute.CLIENT}>
                    <div className='flex text-center text-white hover:font-semibold cursor-pointer active:bg-black'>
                        <AiOutlineUser size={20} className='mt-3 ml-2' />
                        <SideBarContent label="My Client" />
                    </div>
                </Link>

                <div className='flex text-center text-white hover:font-semibold cursor-pointer'>
                    <PiUsersThree size={20} className='mt-3 ml-2' />
                    <SideBarContent label="Partner" />
                </div>

                <div className='flex text-center text-white hover:font-semibold cursor-pointer'>
                    <MdAssignmentTurnedIn size={20} className='mt-3 ml-2' />
                    <SideBarContent label="Asign Client" />
                </div>

                <div className='flex text-center text-white hover:font-semibold cursor-pointer'>
                    <MdAdminPanelSettings size={20} className='mt-3 ml-2' />
                    <SideBarContent label="Admin" />
                </div>

                <div className='flex text-center text-white hover:font-semibold cursor-pointer'>
                    <MdAccountBalance size={20} className='mt-3 ml-2' />
                    <SideBarContent label="Accounts" />
                </div>

                <div className='flex text-center text-white hover:font-semibold cursor-pointer'>
                    <MdSwitchAccount size={20} className='mt-3 ml-2' />
                    <SideBarContent label="Testimonials" />
                </div>

                <div className='flex text-center text-white hover:font-semibold cursor-pointer'>
                    <MdOutlineNewspaper size={20} className='mt-3 ml-2' />
                    <SideBarContent label="NewsLetter" />
                </div>

                <div className='flex text-center text-white hover:font-semibold cursor-pointer'>
                    <FaPiggyBank size={20} className='mt-3 ml-2' />
                    <SideBarContent label="Bank" />
                </div>

                <div className='flex text-center text-white hover:font-semibold cursor-pointer'>
                    <FaPiggyBank size={20} className='mt-3 ml-2' />
                    <SideBarContent label="company bank" />
                </div>

                <div className='flex text-center text-white hover:font-semibold cursor-pointer'>
                    <MdContactPage size={20} className='mt-3 ml-2' />
                    <SideBarContent label="Page" />
                </div>

                <div className='flex text-center text-white hover:font-semibold cursor-pointer'>
                    <FiSettings size={20} className='mt-3 ml-2' />
                    <SideBarContent label="Induction" />
                </div>

            </div>
        </div>

    </>
}

export default Sidebar