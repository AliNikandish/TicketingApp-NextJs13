import { log } from 'console'
import React from 'react'
import { FaFire } from 'react-icons/fa'


const Priority = (priority:PriorityProps) => {
  return (
    <div className="flex gap-x-px ">
            <div className={priority.priority > 0 ? `text-red-500` : `text-gray-500`}>
              <FaFire />
            </div>
            <div className={priority.priority > 1 ? `text-red-500` : `text-gray-500`}>
              <FaFire />
            </div>
            <div className={priority.priority > 2 ? `text-red-500` : `text-gray-500`}>
              <FaFire />
            </div>
            <div className={priority.priority > 3 ? `text-red-500` : `text-gray-500`}>
              <FaFire />
            </div>
            <div className={priority.priority > 4 ? `text-red-500` : `text-gray-500`}>
              <FaFire />
            </div>
    </div>
  )
}

export default Priority