import React, {useState, useEffect} from "react" 

function DigitalClock () {
    
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
    }, []);

    function formatTime (){
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? 'PM' : 'AM';

        return `${String(hours % 12 || 12).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${meridiem}`;
    }

    

    return (
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    );
}
export default DigitalClock