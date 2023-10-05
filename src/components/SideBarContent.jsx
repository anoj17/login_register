import React from 'react'

const SideBarContent = ({label,icons,className,...props}) => {
  return (
    <div {...props} className={` ${className} text-white pr-11 m-2 pt-1 `}>
        <p className=''>{label}</p>
    </div>
  )
}

export default SideBarContent