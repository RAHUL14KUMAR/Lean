import React from 'react'

function Notification({message}) {
  return (
    <div className="bg-[#F8F8F8] p-2 w-[300px] mb-[3em] mr-4 fixed bottom-[5.85em] right-[32px] rounded-bl-xl rounded-t-xl text-black text-sm border-4">
      {message}
    </div>
  )
}

export default Notification
