import React, { useState, useRef } from 'react'
import MainLayout from '../components/mainLayout'
import log from "../assets/login.webp"
import RadioElement from '../components/radioElement'
import size from "../assets/sizemap.webp"
import ResizableComponent from "../components/RE"
import SpecsTab from '../components/specsTab'
import DescriptionTab from '../components/descriptionTab'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import MapImages from '../components/mapImages'
import Features from '../components/features'
import Lay from '../components/Lay'
const MapPage = () => {
    const [s, setS] = useState(0)
    const [tab, setTab] = useState("1")
    const fun = (e)=>{
        console.log(e.clientX)
        setS(s+e.clientX)
    }

    const swiperRef = useRef(null);

    const goToSlide = (index) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index);
        }
    };





  return (
    <MainLayout>
        <React.Fragment>
            <div className=' flex w-full items-center   justify-evenly mt-2 flex-col lg:flex-row p-4 '>
                <MapImages />
                 <div  className=' w-full lg:w-6/12  flex flex-col p-2 gap-4' >
                    <h1 className='text-2xl'>the name of the prod</h1>
                   
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
            <div className=' bg-[#F2F2F2] w-full py-4 px-40 my-10'>
                <h2>3D Wooden World Map Oak</h2>
                <p>
                How often do you curl up on the sofa, think about future trips, and engage in dazzling conversation with friends? Now you’ve got a reason to do all that and even more! A top-notch 3D wooden map from oak series is sure to liven up your space.
                </p>
            
            </div>

            <div className=' flex  items-center  justify-evenly mt-5 flex-col md:flex-row p-4 '>
               
                <div className= ' w-full md:w-6/12  flex flex-col order-1 md:order-2  items-center  justify-center  '>
                    <h1 className='text-3xl'> MAP SIZES</h1>
                    <div className='flex my-2 gap-1'>
                        <RadioElement id="d" name="l" />
                        <RadioElement id="d" name="l" />
                        <RadioElement id="d" name="l" />
                    </div>
                    <h1 className='text-3xl'> MAP SIZES</h1>
                    <p>Our 2XL size map is 63’’ by 98” (160 cm by 250 cm).
                    It is ideal for big rooms, halls, playrooms.</p>

                
                </div> 
                <img onDrag={fun} src={size} className=' w-full md:w-6/12 rounded-md' />
            </div>

            <div className=' flex  items-center  justify-evenly mt-5 flex-col lg:flex-row p-4'>
                <div className='w-full md:w-6/12 rounded-md order-2 min-h-[50vh] flex items-center justify-center'> <Lay />   </div>
             <div  className=' w-full md:w-6/12  flex items-center justify-center'>
                <h1 className='text-3xl'> MAP SIZES</h1>
               

            
            </div> 
           
        </div>
        <div className='w-full px-5'>
        
      
        <div className=' w-full   my-2 flex items-center justify-between h-10  border-b-2  border-slate-200'>
            <button onClick={()=>setTab("1")} className={`w-3/12 items-center h-full flex text-center  justify-center border-b-2 ${ tab == 1 && "border-slate-400"}`}>1</button>
            <button onClick={()=>setTab("2")} className={`w-3/12 items-center h-full flex text-center  justify-center border-b-2 ${ tab == 2 && "border-slate-400"}`}>2</button>
            <button className='w-3/12 items-center h-full flex text-center  justify-center'>3</button>
            <button className='w-3/12 items-center h-full flex text-center  justify-center'>4</button>
       
        </div>
        {tab == 1 && <SpecsTab/>}
        {tab == 2 && <DescriptionTab /> }
        </div>
        <Features/>
        </React.Fragment>
      
    </MainLayout>
  )
}

export default MapPage
