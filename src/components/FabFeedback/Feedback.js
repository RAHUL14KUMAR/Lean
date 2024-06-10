import React from 'react'
import { useRef } from 'react'
import vector from '../../assets/Vector (2).png'
import { useStateValue } from '../../stateProvider'

const Feedback = ({setToogle,handleNavItem}) => {
  const [{message},dispatch]=useStateValue();
    const fileInputRef = useRef(null);

    const handleLabelClick = () => {
        fileInputRef.current.click();
      };
    
      const handleFileInputChange = () => {
        const file = fileInputRef.current.files[0];
        console.log('Selected file:', file);
      };

      const submit=(e)=>{
        e.preventDefault();
        dispatch({
          type:"SET_MESSAGE",
          message:"Thanks for your valuable feedback!"
        })
        setToogle(true);
        handleNavItem("");
      }
  return (
    <div className="bg-[#F8F8F8] p-6 w-[400px] fixed bottom-[5.25em] right-[32px] rounded-lg">
        <div className='bg-[#F8F8F8] text-lg text-black text-center overflow-hidden border-b-2 border-b-slate-500 p-4'>Let us Know Your <b className='bg-[#F8F8F8]'>Feedback</b><br/>about us!</div>

        <form className='flex flex-col bg-[#F8F8F8] p-3'>
            <div className='flex flex-col w-[398px] h-[180px] bg-[#E0E0E0] my-4'>
                <textarea type="text" className='w-full h-24 font-semibold text-base text-black bg-[#E0E0E0] p-2 focus:outline-none' placeholder='write here...'/>

                <div className='flex w-fit overflow-hidden bg-[#C7C7C7] text-base p-2 text-black rounded-sm  my-5 mx-5'>
                    <img src={vector} />
                    <label htmlFor="fileInput" id="fileInputLabel" onClick={handleLabelClick}>
                        <button className='overflow-hidden px-2'>Attach</button>
                    </label>
                </div>
            </div>

            <div className='bg-[#F8F8F8] p-2'>
                <label className='overflow-hidden text-black text-base p-1'></label>
                <input type="checkbox" id="area" className='text-black text-base px-3 py-2 rounded-md' /><span className='text-black bg-[#F8F8F8] text-base m-2'>Send feedback anonymously</span>
            </div>

            <div className='flex flex-row-reverse bg-[#F8F8F8]'>
                <button className='w-fit bg-[#0F0F0F] px-4 p-2 text-base rounded-lg 'onClick={(e)=>submit(e)}>submit</button>
            </div>
        </form>
        <input
        type="file"
        id="fileInput"
        ref={fileInputRef} 
        className="hidden"
        onChange={handleFileInputChange}
      />
    </div>
  )
}

export default Feedback
