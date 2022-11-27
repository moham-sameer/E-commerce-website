import {useState,useEffect} from 'react'

const useBodyScrollLock = ()=>{
    const bodyStyle = document.body.style

    const [isLocked,setIsLocked] = useState(
        bodyStyle.overflowY = "hidden"
    )
    useEffect(()=>{
        bodyStyle.overflowY = isLocked ? 'auto': 'hidden'
    },[isLocked,bodyStyle])
    const toggle=()=>setIsLocked(!isLocked)
    return [toggle]
}

export default useBodyScrollLock;