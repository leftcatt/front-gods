'use client';
import {useEffect, useState} from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState();

    useEffect(() => {
            const colors = ['black','red', 'green', 'blue', 'purple']
            setColor(colors[count % colors.length], []);

    })

    const increment = () => {
            setCount((prevCount) => prevCount + 1);


    }

    return (
        <div>
            <h4 style={{color: color}}>
                Counter: {count}
            </h4>
            <button onClick={increment}>increment</button>
        </div>
    )
}

export default Counter