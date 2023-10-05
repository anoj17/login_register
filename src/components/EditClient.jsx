import React, { useEffect, useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { addClient, editClient } from '../api/Index'
import Button from './Button'

const EditClient = ({ handleHideForm, item }) => {
    // console.log(item)
    const queryClient = useQueryClient()
    const [userInfo, setUserInfo] = useState({

    })

    useEffect(() => {
        if (item) {


            setUserInfo({
                name: item.name,
                emai: item.emai,
                mobile: JSON.parse(item.data).mobile
            })
        }
    }, [item])

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

    const submitData = (e) => {
        e.preventDefault()
        createClient.mutate(userInfo)
    }

    const changeInfo = (e) => {
        const { name, value } = e.target
        setUserInfo({ ...userInfo, [name]: value })
    }

    return (
        <div className='bg-green-700 overflow-scroll scrollbar-none my-6 py-16 h-screen'>

            <form className='flex w-full space-y-4 flex-col px-9 text-black' onSubmit={submitData}>

                <div className='flex flex-col bg-black'>
                    <label>Name</label>
                    <input
                        className='md:w-[320px] py-1 text-[1.1rem] focus:outline-none pl-3 my-2 rounded-xl'
                        placeholder='name'
                        onChange={changeInfo}
                        name='name'
                        autoComplete='off'
                        value={userInfo.name} />
                </div>

                <input
                    className='md:w-[320px] py-1 text-[1.1rem] focus:outline-none pl-3 my-2 rounded-xl'
                    placeholder='email'
                    onChange={changeInfo}
                    name='email'
                    autoComplete='off'
                    value={userInfo.email}
                />

                <input
                    className='md:w-[320px] bg-white py-1 text-[1.1rem] focus:outline-none pl-3 my-2 rounded-xl'
                    onChange={changeInfo}
                    placeholder='profile'
                    name='profile'
                    type='file'
                    autoComplete='off'
                    value={userInfo.profile}
                />

                <div className='flex flex-col space-y-4 pb-3'>
                    <input
                        className='md:w-[320px] py-1 text-[1.1rem] focus:outline-none pl-3 my-2 rounded-xl'
                        placeholder='mobile no.'
                        onChange={changeInfo}
                        type='text'
                        name='mobile'
                        autoComplete='off'
                        value={userInfo.mobile}
                    />

                    <input
                        className='md:w-[320px] py-1 text-[1.1rem] focus:outline-none pl-3 my-2 rounded-xl'
                        placeholder='Date of birth'
                        type='date'
                        onChange={changeInfo}
                        name='date'
                        autoComplete='off'
                        value={userInfo.date}
                    />

                    <input
                        className='md:w-[320px] py-1 text-[1.1rem] focus:outline-none pl-3 my-2 rounded-xl'
                        placeholder='address'
                        onChange={changeInfo}
                        name='address'
                        type='text'
                        autoComplete='off'
                        value={userInfo.university}
                    />

                    <input
                        className='md:w-[320px] py-1 text-[1.1rem] focus:outline-none pl-3 my-2 rounded-xl'
                        placeholder='university'
                        onChange={changeInfo}
                        name='university'
                        type='text'
                        autoComplete='off'
                        value={userInfo.university}
                    />

                    <input
                        className='md:w-[320px] py-1 text-[1.1rem] focus:outline-none pl-3 my-2 rounded-xl'
                        placeholder='course enrolled'
                        onChange={changeInfo}
                        name='university'
                        type='text'
                        autoComplete='off'
                        value={userInfo.university}
                    />

                    <input
                        className='md:w-[320px] py-1 text-[1.1rem] focus:outline-none pl-3 my-2 rounded-xl'
                        placeholder='course start date'
                        onChange={changeInfo}
                        name='university'
                        type='date'
                        autoComplete='off'
                        value={userInfo.university}
                    />

                    <input
                        className='md:w-[320px] py-1 text-[1.1rem] focus:outline-none pl-3 my-2 rounded-xl'
                        placeholder='course end date'
                        onChange={changeInfo}
                        name='university'
                        type='date'
                        autoComplete='off'
                        value={userInfo.university}
                    />

                    <input
                        className='md:w-[320px] py-1 text-[1.1rem] focus:outline-none pl-3 my-2 rounded-xl'
                        placeholder='free cpurse'
                        onChange={changeInfo}
                        name='university'
                        type='text'
                        autoComplete='off'
                        value={userInfo.university}
                    />
                </div>

            </form>
        </div>
    )
}

export default EditClient