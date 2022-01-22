import {useEffect, useState} from "react";

const useCheckMobile = () => {
    const [width, setWidth] = useState(window.innerWidth);    
    const handleWindowSizeChange = () => {
            setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return (width - 15 < 800);
}

export default useCheckMobile