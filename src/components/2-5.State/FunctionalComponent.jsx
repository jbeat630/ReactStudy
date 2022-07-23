import React, { useState, useEffect } from 'react'

export default function FunctionalComponent() {
    const [date, setDate] = React.useState(new Date());
    const tick = () => {
        setDate(new Date());
    }

    //공부
    // 빈배열주면 마운트되자마자 호출
    useEffect( () => {
        const interval = setInterval(() => tick(), 1000);
        // 리턴은 클린업으로 반환해주는거라고생각하자 윌언마운트역할
        return () => {
            clearInterval(interval)
        }
    }, [])
    return (
        <div>
            <h1>Hello, world! It's Functional</h1>
            <h2>It is {date.toLocaleTimeString()}.</h2>
        </div>
    );
}
