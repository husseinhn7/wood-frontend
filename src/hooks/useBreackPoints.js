import React from 'react'
import useWindowWidth from './useWindowWidth'




const useBreakPoints = () => {
    const width = useWindowWidth()
 
    if ( 640 < width && width < 768 ){
        return "sm"
    }
    else if ( 768 <  width && width < 1024 ){
        return "md"
    }

    else if ( 1024 <  width && width < 1280){
        return "lg"
    }

    else if ( 1280 <  width && width < 1536 ){
        return "xl"
    }
}

export default useBreakPoints
