import React, { useState, useEffect } from 'react';
import NavBar from "./NavBar";
import Toggle from "./Toggle";

const apiKey = process.env.REACT_APP_NASA_API_KEY;

const SpacePhoto = () => {

    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
            );
            const data = await res.json();
            setPhotoData(data);
            console.log(data);
        }
    }, []);

    if (!photoData) return <div />



    return (
        <>
            <NavBar />
            <div className='nasa-photo'>
                {(photoData.media_type === "image") ?
                    (<img src={photoData.url} alt={photoData.title} className='photo' />) : (<iframe title="video"
                        width="640" height="320"
                        src={photoData.url}
                        frameBorder="0" allow="autoplay" allowFullScreen className='photo'></iframe>)}
                <h1>{photoData.title}</h1>
                <Toggle>
                    <p className='date'>{photoData.date}</p>
                    <p className='explanation'>{photoData.explanation}</p>
                </Toggle>
            </div>
        </>

    )
}

export default SpacePhoto;