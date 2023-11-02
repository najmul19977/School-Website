import React, { useState } from 'react';
import Clock from 'react-clock';

const Myclock = () => {
    let time = new Date().toLocaleTimeString();
    const [currentTime,setCurrentTime] = useState(time);
    let date = new Date().toLocaleDateString();
    
    const upDateTime = () =>{
        let time = new Date().toLocaleTimeString();
        setCurrentTime(time);

    }
   setInterval(upDateTime,1000)
    
    return (
        <div>
            <p className='bg-slate-300 text-2xl font-bold p-5 m-2 mb-2'>Current Time:{currentTime}</p>
            <p className='bg-slate-300 text-2xl font-bold p-5 m-2 mb-10'>Current Date:{date}</p>
            <Clock></Clock>
            
        </div>
    );
};

export default Myclock;