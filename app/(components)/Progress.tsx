import React from 'react'


const Progress = (progress:ProgressProps) => {
  return (
    <div className="mt-4 mb-5">
          <p className="text-gray-600">درصد پیشرفت</p>
          <div className="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden">
          <div style={{width:`${progress.progress}%`}} className={`bg-red-500 h-full rounded-lg shadow-md`}></div>
          </div>
        </div>
  )
}

export default Progress