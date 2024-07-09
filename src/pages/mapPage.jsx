import React from 'react'
import MainLayout from '../components/mainLayout'
import log from "../assets/login.webp"
import RadioElement from '../components/radioElement'


const MapPage = () => {
  return (
    <MainLayout>
        <React.Fragment>
            <div className=' flex w-full items-center justify-evenly mt-10 '>
                <img  src={log}  className=' w-5/12 ' />
                <div  className=' w-5/12  flex flex-col p-2 gap-4' >
                    <h1 className='text-2xl'>the name of the prod</h1>
                    <h1> price : <span> 1234  </span></h1> 
                    <div className=' flex items-center  gap-2 flex-wrap'>
                     
                        <RadioElement id="d" name="l" />
                        <RadioElement id="d" name="l" />
                        <RadioElement id="d" name="l" />
                        
                        <RadioElement id="d" name="l" />
                        <RadioElement id="d" name="l" />
                        <RadioElement id="d" name="l" />
                    
                    </div>
                    <h1> style : <span> 1234  </span></h1> 
                    <div className=' flex items-center  gap-2 flex-wrap'>
                     
                        <RadioElement id="d" name="l" />
                        <RadioElement id="d" name="l" />
                        <RadioElement id="d" name="l" />
                          
                    
                    </div>
                    <h1> lang : <span> 1234  </span></h1> 
                    <div className=' flex items-center  gap-2 flex-wrap'>
                     
                        <RadioElement id="d" name="l" />
                        <RadioElement id="d" name="l" />
                        <RadioElement id="d" name="l" />
                        <RadioElement id="d" name="l" />
                         
                    
                    </div>
                    <button className=' text-xl outline-none w-full  h-12   bg-[#44B26F] text-white hover:text-[#44B26F] hover:bg-white rounded-md hover:border-[#44B26F] hover:border'> Add to cart  </button>



                
                
                </div>
            </div>

        </React.Fragment>
      
    </MainLayout>
  )
}

export default MapPage
