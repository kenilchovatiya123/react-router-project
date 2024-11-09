import React, { useState, useEffect } from 'react'

function Github() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/kenilchovatiya123')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data)
            })
    }, [])

    return (
        <div className='text-center m-4 bg-gray-400 text-white p-4 text-2xl'>Github followers: {data.following} 
        <img src={data.avatar_url} alt="git picture" width={300} />
        </div>
    )
}

export default Github