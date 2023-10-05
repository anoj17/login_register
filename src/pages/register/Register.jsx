import React, { useState } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useMutation, useQuery } from 'react-query'
import axios from 'axios'
import { register } from '../../api/Index'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../../hooks/useAuth'
import { PageRoute } from '../../enum/routes.enum'
import { useEffect } from 'react'

const Register = () => {

    const navigate = useNavigate()

    // const { signIn } = useAuth()

    const [isLogin, setIsLogin] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    })
    const [errors, setErrors] = useState()

    const onClickHandler = (e) => {
        const { name, value } = e.target
        setIsLogin({ ...isLogin, [name]: value })
        // console.log(isLogin)
    }


    const { isLoading, mutate, data } = useMutation(['register-data'], register, {
        onSuccess: response => {
            // toast.success(response.data.message)
            navigate(PageRoute.LOGIN)
        },
        onError: error => {
            const { status, data } = error.response
            // console.log('error', data)


            if (status === 422) {
                setErrors(data)
                // for react hook form
                //     Object.entries(data).map((value) => {

                //         setErrors(value[0], { type: 'custom', message: value[1] })

                //     })
            }


        }

    })

    useEffect(() => {
        console.log('error', errors)
    }, [errors])


    const submitHandler = (e) => {
        e.preventDefault()
        mutate(isLogin)
    }
    return <>

        <form className='border border-zinc-800 rounded-2xl' onSubmit={submitHandler}>
            <div className='px-9 py-8 flex flex-col justify-center shadow-lg items-center'>
                <h1 className='my-5 font-bold text-2xl text-blue-600'>Register</h1>

                <div className='flex flex-col '>
                    <div>
                        <Input className='w-[300px] px-4 rounded-xl py-2 focus:outline-none' autoComplete='off' type='text' name='email' value={isLogin.email} onChange={onClickHandler} placeholder='email' error={errors && errors.email} />
                    </div>

                    <div>
                        <Input className='w-[300px] px-4 rounded-xl py-2 focus:outline-none' autoComplete='off' type='text' name='name' value={isLogin.name} onChange={onClickHandler} placeholder='full name' error={errors && errors.name} />
                    </div>

                    <div className=' flex relative justify-center  flex-col'>
                        <Input className='w-[300px] px-4 rounded-xl py-2 focus:outline-none' autoComplete='off' type={'password'} value={isLogin.password} name='password' onChange={onClickHandler} placeholder='Password' error={errors && errors.password} />

                    </div>

                    <div className=' flex relative justify-center'>
                        <Input className='w-[300px] px-4 rounded-xl py-2 focus:outline-none' autoComplete='off' type='password' value={isLogin.password_confirmation} name='password_confirmation' onChange={onClickHandler} placeholder='confirm Password' error={errors && errors.password_confirmation} />

                    </div>
                </div>

                <Button label='Register' isLoading={isLoading} type='submit' className='py-2 w-full focus:outline-none text-white rounded-md bg-zinc-800 mt-2 mb-4' />

            </div>
        </form>

        <ToastContainer />
    </>
}

export default Register