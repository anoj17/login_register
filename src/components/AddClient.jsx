import React, { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { addClient, editClient } from '../api/Index'
import Button from './Button'

const AddClient = ({ submitData}) => {

    const queryClient = useQueryClient()
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        profile_image: '',
        mobile: '',
        dob: '',
        address : ''
    })

    
  const submitData = (e) => {
    e.preventDefault()
    createClient.mutate(userInfo)
}

    // const [changeEdit, setChangeEdit] = useState({
    //     name: '',
    //     // is_active: '',
    //     email: ''
    // })

    const createClient = useMutation(['add-client'], addClient, {
        onSuccess: response => {
            // queryClient.invalidateQueries(['client-table'])
            console.log(response)
            refetch()
        },
        onError: error => {
            console.log('error', error.response)
        }

    })

    const editUserData = useMutation(['edit-client'], editClient, {
        onSuccess: response => {
            // queryClient.invalidateQueries(['client-table'])
            console.log(response)
            refetch()
        },
        onError: error => {
            console.log('error', error.response)
        }
    })

    const handleSaveBtn = () => {
        createClient.mutate()
    }

    // const changeEditData = (e) => {
    //   const { name, value } = e.target
    //   setChangeEdit({ ...userInfo, [name]: value })
    // }

    // const submitEditData = (e) => {
    //     e.preventDefault()
    //     editUserData.mutate(changeEdit)

    // }

    const changeInfo = (e) => {
        const { name, value } = e.target
        setUserInfo({ ...userInfo, [name]: value })
        // console.log(userInfo)
    }

    return (
        <div className='bg-green-700 overflow-scroll scrollbar-none my-6 py-16 h-screen'>

            <form className='flex w-full space-y-4 flex-col px-9 text-black' onSubmit={submitData}>

                <div>
                    <label className='text-white'>Name</label>
                    <input
                        className='md:w-[320px] py-1 text-[1.1rem] focus:outline-none pl-3 rounded-xl'
                        onChange={changeInfo}
                        name='name'
                        autoComplete='off'
                        value={userInfo.name} />
                </div>

                <div>
                    <label className='text-white'>Email</label>
                    <input
                        className='md:w-[320px] py-1 text-[1.1rem] focus:outline-none pl-3 rounded-xl'
                        onChange={changeInfo}
                        name='email'
                        autoComplete='off'
                        value={userInfo.email}
                    />
                </div>

                <div>
                    <label className='text-white'>Profile</label>
                    <input
                        className='md:w-[320px] bg-white py-1 text-[1.1rem] focus:outline-none pl-3 rounded-xl'
                        onChange={changeInfo}
                        name='profile_image'
                        type='file'
                        autoComplete='off'
                        value={userInfo.profile_image}
                    />
                </div>

                <div>
                    <label className='text-white'>Mobile Number</label>
                    <input
                        className='md:w-[320px] py-1 text-[1.1rem] focus:outline-none rounded-xl'
                        onChange={changeInfo}
                        type='text'
                        name='mobile'
                        autoComplete='off'
                        value={userInfo.mobile}
                    />
                </div>
                <div className='flex flex-col space-y-4 pb-3'>

                    <div>
                        <label className='text-white'>Date of Birth</label>
                        <input
                            className='md:w-[320px] py-1 text-[1.1rem] focus:outline-none pl-3 rounded-xl'
                            type='date'
                            onChange={changeInfo}
                            name='dob'
                            autoComplete='off'
                            value={userInfo.dob}
                        />
                    </div>

                    <div>
                        <label className='text-white'>Address</label>
                        <input
                            className='md:w-[320px] py-1 text-[1.1rem] focus:outline-none pl-3 rounded-xl'
                            onChange={changeInfo}
                            name='address'
                            type='text'
                            autoComplete='off'
                            value={userInfo.address}
                        />
                    </div>

                    <div>
                        <label className='text-white'>University</label>
                        <input
                            className='md:w-[320px] py-1 text-[1.1rem] focus:outline-none pl-3 rounded-xl'
                            onChange={changeInfo}
                            name='university'
                            type='text'
                            autoComplete='off'
                            value={userInfo.university}
                        />
                    </div>

                    <div>
                        <label className='text-white'>Course Enrolled</label>
                        <input
                            className='md:w-[320px] py-1 text-[1.1rem] focus:outline-none pl-3 rounded-xl'
                            onChange={changeInfo}
                            name=''
                            type='text'
                            autoComplete='off'
                            value={''}
                        />
                    </div>

                    <div>
                        <label className='text-white'>Course Start Date</label>
                        <input
                            className='md:w-[320px] py-1 text-[1.1rem] focus:outline-none pl-3rounded-xl'
                            onChange={changeInfo}
                            name='university'
                            type='date'
                            autoComplete='off'
                            value={''}
                        />
                    </div>

                    <div>
                        <label className='text-white'>Course End date</label>
                        <input
                            className='md:w-[320px] py-1 text-[1.1rem] focus:outline-none pl-3 rounded-xl'
                            onChange={changeInfo}
                            name=''
                            type='date'
                            autoComplete='off'
                            value={''}
                        />
                    </div>

                    <div>
                        <label className='text-white'>Course free</label>
                        <input
                            className='md:w-[320px] py-1 text-[1.1rem] focus:outline-none pl-3 rounded-xl'
                            onChange={changeInfo}
                            name=''
                            type='text'
                            autoComplete='off'
                            value={''}
                        />
                    </div>
                </div>

            </form>
        </div>
    )
}

export default AddClient