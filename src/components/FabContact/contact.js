import React from 'react'

const Contact = () => {
  return (
    <div className="bg-[#F8F8F8] p-6 w-[400px] fixed bottom-[5.25em] right-[32px] rounded-lg">
        <div className='bg-[#F8F8F8] text-lg text-black text-center overflow-hidden border-b-2 border-b-slate-500 p-4'>Get in <b className='bg-[#F8F8F8]'>Contact with us</b> for your<br/> queries!</div>

        <form className='flex flex-col bg-[#F8F8F8] p-3'>
            <div className='bg-[#F8F8F8]  my-4'>
                <label htmlFor="name" className='overflow-hidden bg-[#F8F8F8] text-black text-base my-2'>Your Name</label>
                <input id="name" type="text" placeholder="Enter your name" className='bg-[#E0E0E0] text-black text-base px-3 py-2 w-full rounded-md placeholder:text-slate-800' />
            </div>

            <div className='bg-[#F8F8F8]  my-4'>
                <label htmlFor="name" className='overflow-hidden bg-[#F8F8F8] text-black text-base my-2'>What would you like to ask? <span className='text-red-900 bg-[#F8F8F8]'>*</span></label>
                <textarea id="name" type="text" placeholder="write here ..." className='bg-[#E0E0E0] text-black text-base px-3 py-2 w-full rounded-md placeholder:text-slate-800' />
            </div>

            <div className='flex flex-row-reverse bg-[#F8F8F8]'>
                <button className='w-fit bg-[#0F0F0F] px-4 p-2 text-base rounded-lg '>submit</button>
            </div>
        </form>
    </div>
  )
}

export default Contact
