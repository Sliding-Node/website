import { useEffect, useState } from 'react';
import Progress from './progress';
import './styles.css';
export default function Deadline() {
    const [diff, setDiff] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            dateDiff(1651175209000);
        }, 1000);
        return () => clearInterval(interval);
      }, []);

    function dateDiff(timestamp, structure = dateDiff.structure) {
        let delta = Math.abs(timestamp - new Date().getTime()) / 1000; 
        
        let res = {};
    
            for(let key in structure) {
            res[key] = Math.floor(delta / structure[key]);
            delta -= res[key] * structure[key];
        }
        
        setDiff(res)
    }
    
    dateDiff.structure = {
      year: 31536000,
      month: 2592000,
      week: 604800, // uncomment row to ignore
      day: 86400,   // feel free to add your own row
      hour: 3600,
      minute: 60,
      second: 1
    };
    
    return (
        <div className="container bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-full">
            <div className="flex justify-center pt-2">
                <img className="rounded-full w-40 pt-4 shadow-2xl"  src="https://avatars.githubusercontent.com/u/94732229" />
            </div>
            <h1 className="flex justify-center font-sans sm:text-1xl md:text-5xl text-white pt-4 mx-4"> Sliding Node | Coming soon
            <span>
                <span className="animate-ping relative inline-flex rounded-full h-3 w-3 bg-sky-500" style={{position: 'absolute'}}></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500" style={{position: 'absolute'}}></span>
            </span>
                
            
            </h1>
            <h3 className="flex justify-center font-sans sm:text-lg md:text-1xl text-white pt-4 mx-4 ">Something great <span className='text-sky-200 animate-pulse flex space-x-4'> &nbsp;incoming...</span>
            </h3>
            <h4 className="flex justify-center text-center font-sans text-1xl text-brown pt-4 mx-4">A team dedicated to a mission to create this world more better place to live!</h4>
            <div className='flex justify-center my-6'>
                <div className='bg-purple-400 rounded shadow-2xl shadow-black'>
                    <div className='md:flex md:flex-row md:gap-4 pt-20 px-20 pb-10'>
                        <div className='bg-white p-2 rounded shadow-lg shadow-black mt-4'>
                            <h1 className='text-mono text-base text-mono sm:text-base md:text-2xl font-bold text-slate-700'>{diff.month} months </h1>
                        </div>
                        <div className='bg-white p-2 rounded shadow-2xl shadow-lg shadow-black font-bold mt-4'>
                            <h1 className='text-mono text-base text-mono sm:text-base md:text-2xl text-slate-700'>{diff.day} days </h1>
                        </div>
                        <div className='bg-white p-2 rounded shadow-lg shadow-black mt-4'>
                            <h1 className='text-mono sm:text-base md:text-2xl font-bold text-slate-700'>{diff.hour} hrs</h1>
                        </div>
                        <div className='bg-white p-2 rounded shadow-lg shadow-black mt-4'>
                            <h1 className='text-mono sm:text-base md:text-2xl font-bold text-slate-700'>{diff.minute} mins</h1>
                        </div>
                        <div className='bg-white p-2 rounded shadow-lg shadow-black mt-4'>
                            <h1 className='text-mono sm:text-base md:text-2xl font-bold text-slate-700'>{diff.second} secs</h1>
                        </div>
                    </div>
               
                <div className='pb-20'>

                    <h1 className='flex justify-center text-3xl font-oswald text-slate-800 animate-pulse'>Remaining</h1>

                 </div>

                </div>
                
               


            </div>
            
            <div className='center-mod'>
                <div className="mb-4">
                <Progress
                
                 value="15" customLabel="5%"/>

                </div>
                
            </div>
        </div>
    )

}