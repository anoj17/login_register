import React, { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

const Input = ({ placeholder, className, type, name, error, value, ...props }) => {
	
	const [isEye, setIsEye] = useState(false)

	const clickEyeBtn = () => {
		setIsEye(!isEye)
	}

	const checkType = () => {
		if (type == 'password') return isEye ? "text" : "password"
		return type
	}

	return <>
		<div className='relative '>
			<input {...props} className={`${className} my-3`} type={checkType()} placeholder={placeholder} name={name} value={value} />
			{
				type == 'password' &&

				<div onClick={clickEyeBtn}>
					{
						isEye ? <AiFillEye size={25} className='absolute right-2 bottom-5 cursor-pointer' />
							:
							<AiFillEyeInvisible size={25} className='absolute right-2 bottom-5 cursor-pointer' />
					}

				</div>
			}
		</div>
		<span className='text-red-300  flex flex-col  text-sm'>
			{error && error.map((item,index) => (
				<p key={index}>{item}</p>
			))}
		</span>
	</>
}

export default Input