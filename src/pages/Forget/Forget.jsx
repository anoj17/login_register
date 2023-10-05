import Input from "../../components/Input"
import { useState } from "react"
import Button from "../../components/Button"
import { Link, useNavigate } from "react-router-dom"
import { useMutation, useQuery } from "react-query"
import { forget } from "../../api/Index"
import { ToastContainer, toast } from "react-toastify"
import { PageRoute } from "../../enum/routes.enum"


const Forget = () => {
  const navigate = useNavigate()

  const [isLogin, setIsLogin] = useState({
    username : ''
  })

  const {isLoading,data,mutate} = useMutation(['forget'],forget,{
    onSuccess : response =>{
      const users = response?.data
      // console.log(users)
    }
     
  })

  const onClickHandler = (e) =>{
    const {name, value} = e.target
    setIsLogin({...isLogin, [name]:value})
    // console.log(isLogin)
  }

  const submitHandler = (e) =>{
      e.preventDefault()
      mutate()
  }
  return <>
  
  <form onSubmit={submitHandler} className="border border-zinc-800 rounded-2xl">
  <div className='px-9 py-8 flex flex-col justify-center shadow-lg items-center'>
      <h1 className='my-5 font-bold text-2xl text-blue-600'>Forget</h1>

      <div className='flex flex-col '>

      <div className=' flex relative justify-center items-center'>
        <Input className='w-[300px] px-4 mt-5 rounded-xl py-2 focus:outline-none' autoComplete='off' type='text' value={isLogin.username}  name='username' onChange={onClickHandler} placeholder='username'/>

        </div>
      </div>
      {/* <Link to={PageRoute.RESET} > */}
        <Button label='next' isLoading={isLoading} type='submit' className='px-[8.5rem]'/>      
      {/* </Link> */}

    <Link to={PageRoute.LOGIN}>
        <div className="cursor-pointer text-white text-center font-bold text-[.9rem] mt-4">Login to account</div>
    </Link>
    </div>
  </form>

  <ToastContainer/>
  
  </>
}

export default Forget