import Input from "../../components/Input"
import { useEffect, useState } from "react"
import Button from "../../components/Button"
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { Link, useParams, useSearchParams } from "react-router-dom"
import { useMutation } from "react-query"
import { reset } from "../../api/Index"
import { ToastContainer, toast } from "react-toastify"

const Reset = () => {
  const [param] = useSearchParams()

  const [isEye, setIsEye] = useState(false)
  const [isLogin, setIsLogin] = useState({
    password: '',
    cpassword: ''
  })

  useEffect(() => {
    if (param) {
      setIsLogin(prev => {
        return {
          ...prev, id: param.get("id")
        }
      })
      console.log(param.get("id"))
    }
  }, [param])

  const { isLoading, data, mutate } = useMutation(['reset'], reset, {
    onSuccess: response => {
      // const user = response?.data

      toast.success("user updated", {
        position: "top-center"
      })

    },
    onError: error => {
      toast.error("fail to update", {
        position: "top-center"
      })
    }
  })


  const onClickHandler = (e) => {
    const { name, value } = e.target
    setIsLogin({ ...isLogin, [name]: value })
    console.log(isLogin)
  }

  const clickEyeBtn = () => {
    setIsEye(!isEye)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    mutate(isLogin)
  }


  return <>

    <form onSubmit={submitHandler} className="border border-zinc-800 rounded-2xl">
      <div className='px-9 py-8 flex flex-col justify-center shadow-lg items-center'>
        <h1 className='my-5 font-bold text-2xl text-blue-600'>Reset</h1>

        <div className='flex flex-col '>

          <div className=' flex relative justify-center items-center'>
            <Input className='w-[300px] px-4 rounded-xl py-2 focus:outline-none' autoComplete='off' type={!isEye ? 'password' : 'text'} value={isLogin.password} name='password' onChange={onClickHandler} placeholder='new-password' />
            <div onClick={clickEyeBtn}>
              {
                isEye ? <AiFillEye size={25} className='absolute right-2 bottom-5 cursor-pointer' />
                  :
                  <AiFillEyeInvisible size={25} className='absolute right-2 bottom-5 cursor-pointer' />
              }

            </div>

          </div>

          <div className=' flex relative justify-center items-center'>
            <Input className='w-[300px] px-4 rounded-xl py-2 focus:outline-none' autoComplete='off' type={!isEye ? 'password' : 'text'} value={isLogin.cpassword} name='cpassword' onChange={onClickHandler} placeholder='confirm password' />
          </div>
        </div>

        <Button label='reset' isLoading={isLoading} type='submit' />
      </div>
    </form>

  </>
}

export default Reset