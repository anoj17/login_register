import React, { useEffect, useState } from 'react'
import Input from '../components/Input'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useMutation, useQuery } from 'react-query'
import { login } from '../api/Index'
import { PageRoute } from '../enum/routes.enum';
import useAuth from '../hooks/useAuth';

const Login = () => {

  const { isAuthenticated, signIn } = useAuth()
  const navigate = useNavigate()
  const [isEye, setIsEye] = useState(false)
  const [isLogin, setIsLogin] = useState({
    email: '',
    password: ''
  })

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     navigate("/dashboard", { replace: true })
  //   }
  // }, [])

  const { isLoading, data, mutate } = useMutation(['login'], login, {
    onSuccess: response => {
      console.log('res===', response.data)
      const { access_token, email, name, roles, user_id, permissions } = response.data
      localStorage.setItem('token', access_token)
      signIn({
        token: access_token,
        email,
        name,
        roles,
        user_id,
        permissions
      }, () => {
        navigate('/app/dashboard',{replace:true})
      })
    },
    onError: error => {
      console.log('error', error.response)
    }
  })

  const onChangeHandler = (e) => {
    const { name, value } = e.target
    setIsLogin({ ...isLogin, [name]: value })
    // console.log(isLogin)
  }

  const clickEyeBtn = () => {
    setIsEye(!isEye)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    mutate(isLogin)
  }

  return <>

    <form className='border border-zinc-800 rounded-2xl' onSubmit={submitHandler}>
      <div className='px-9 py-8 flex flex-col justify-center shadow-lg items-center'>
        <h1 className='my-5 font-bold text-2xl text-blue-600'>Log In</h1>

        <div className='flex flex-col '>
          <div>
            <Input className='w-[300px] px-4 rounded-xl py-2 focus:outline-none' autoComplete='off' type='text' name='email' value={isLogin.email} onChange={onChangeHandler} placeholder='email' />
          </div>

          <div className=' flex relative justify-center items-center'>
            <Input className='w-[300px] px-4 rounded-xl py-2 focus:outline-none' autoComplete='off' type={!isEye ? 'password' : 'text'} value={isLogin.password} name='password' onChange={onChangeHandler} placeholder='Password' />
            <div onClick={clickEyeBtn}>
              {
                isEye ? <AiFillEye size={25} className='absolute right-2 bottom-5 cursor-pointer' />
                  :
                  <AiFillEyeInvisible size={25} className='absolute right-2 bottom-5 cursor-pointer' />
              }

            </div>

          </div>
        </div>
        <Link to={PageRoute.FORGETPWD}>
          <div className="cursor-pointer text-white text-center font-bold text-[.9rem] mt-5">Forget Password ? </div>
        </Link>

        <div className='h-[.5px] w-full bg-white my-5'></div>

        <Link to={PageRoute.CREATEACCOUNT}>
          <div className="cursor-pointer text-white text-center font-bold text-[.9rem]">Create New Account</div>
        </Link>

        <Button label='Log In' isLoading={isLoading} type='submit' />

      </div>
    </form>

    <ToastContainer />
  </>
}

export default Login


