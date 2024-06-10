import React from 'react'
import { useRef } from 'react'
import vector from '../../assets/Vector (2).png'
import Selection from '../SelectionCompo/Selection'
import { useStateValue } from '../../stateProvider'
const Report = ({setToogle,handleNavItem}) => {
    const [{message},dispatch]=useStateValue();
    const fileInputRef = useRef(null);

    const handleLabelClick = (e) => {
      e.preventDefault()
        fileInputRef.current.click();
      };
    
      const handleFileInputChange = (e) => {
        e.preventDefault();
        const file = fileInputRef.current.files[0];
        console.log('Selected file:', file);
      };

      const submit=(e)=>{
        e.preventDefault();
        dispatch({
          type:"SET_MESSAGE",
          message:"Thanks for bringing the issue to our attention.We'll review it shortly and provide an update soon!"
        })
        setToogle(true);
        handleNavItem("");
      }
  return (
    <div className="fixed bottom-[5.25em] right-[32px] w-[330px] sm:w-[350px] md:w-[400px] rounded-lg bg-[#F8F8F8] p-6">
        <div className='bg-[#F8F8F8] text-lg text-black text-center overflow-hidden border-b-2 border-b-slate-500 p-4'>Let us know about <b className='bg-[#F8F8F8]'>Issue</b><br/>the you are facing right now!</div>

        <form className='flex flex-col bg-[#F8F8F8] p-3'>
            <div>
                <p className='mb-2 text-black text-base'>Choose a section</p>
                <Selection/>
            </div>

            <p className='overflow-hiddeb text-base text-black mt-4'>Describe the issue in Details <span className='font-bold text-red-600'> *</span></p>
            <div className='my-2 flex h-[180px] w-[260px] sm:w-[350px] md:w-[398px] flex-col bg-[#E0E0E0]'>
                <textarea type="text" className='w-full h-24 font-semibold text-base text-black bg-[#E0E0E0] p-2 focus:outline-none placeholder:text-black' placeholder='write here...'/>

                <div className='flex w-fit overflow-hidden bg-[#C7C7C7] text-base p-2 text-black rounded-sm  my-5 mx-5'>
                    <img src={vector} />
                    <label htmlFor="fileInput" id="fileInputLabel" onClick={(e)=>handleLabelClick(e)}>
                        <button className='overflow-hidden px-2'>Attach</button>
                    </label>
                </div>
            </div>

            <div className='flex flex-row-reverse bg-[#F8F8F8]'>
                <button className='w-fit bg-[#0F0F0F] px-4 p-2 text-base rounded-lg ' onClick={(e)=>submit(e)}>submit</button>
            </div>
        </form>
        <input
        type="file"
        id="fileInput"
        ref={fileInputRef} 
        className="hidden"
        onChange={(e)=>handleFileInputChange(e)}
      />
    </div>
  )
}

export default Report
