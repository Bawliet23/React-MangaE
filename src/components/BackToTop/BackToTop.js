
import React from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import './backToTop.css'
import { BsArrowUp } from "react-icons/bs";


export const BackToTop = () => {
    return (
        <div onClick={()=> window.scrollTo(0, 0)} className="back">
            <BsArrowUp  className="icon" />
        </div>
    )
}