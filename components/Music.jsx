import React, { useState, useEffect } from 'react'
import qs from "querystring";
import Link from 'next/link'
import { animate } from "motion";
import { FaSpotify } from "react-icons/fa";

const AnimatedBars = () => {
    useEffect(() => {
        animate(
            "#bar1",
            {
                transform: [
                    "scaleY(1.0) translateY(0rem)",
                    "scaleY(1.5) translateY(-0.082rem)",
                    "scaleY(1.0) translateY(0rem)",
                ],
            },
            {
                duration: 1.0,
                repeat: Infinity,
                easing: ["ease-in-out"],
            }
        );
        animate(
            "#bar2",
            {
                transform: [
                    "scaleY(1.0) translateY(0rem)",
                    "scaleY(3) translateY(-0.083rem)",
                    "scaleY(1.0) translateY(0rem)",
                ],
            },
            {
                delay: 0.2,
                duration: 1.5,
                repeat: Infinity,
                easing: ["ease-in-out"],
            }
        );
        animate(
            "#bar3",
            {
                transform: [
                    "scaleY(1.0) translateY(0rem)",
                    "scaleY(0.5) translateY(0.37rem)",
                    "scaleY(1.0) translateY(0rem)",
                ],
            },
            {
                delay: 0.3,
                duration: 1.5,
                repeat: Infinity,
                easing: ["ease-in-out"],
            }
        );
    }, []);

    return (
        <div className="w-auto flex items-end overflow-hidden h-6">
            <span
                id="bar1"
                className="w-1 mr-[2px] h-4 bg-black dark:bg-white opacity-75 rounded-full"
            />
            <span
                id="bar2"
                className="w-1 mr-[2px] h-4 bg-black dark:bg-white rounded-full"
            />
            <span
                id="bar3"
                className="w-1 h-4 bg-black dark:bg-white opacity-80 rounded-full"
            />
        </div>
    );
};

const Music = () => {
    const [currentlyPlaying, setCurrentlyPLaying] = useState(null);
    const [artists, setArtists] = useState([]);
    const [fadeState, setFadeState] = useState("opacity-0");

    useEffect(() => {
        // Music component appears fifth
        setTimeout(() => {
            setFadeState("opacity-100");
        }, 2900);

        async function fetchData() {
            const refresh_token = process.env.NEXT_PUBLIC_REFRESH_TOKEN;

            try {
                const getAccessToken = await fetch('https://accounts.spotify.com/api/token', {
                    method: 'POST',
                    headers: {
                        Authorization: "Basic " + Buffer.from(`${process.env.NEXT_PUBLIC_CLIENT_ID}:${process.env.NEXT_PUBLIC_CLIENT_SECRET}`).toString("base64"),
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: qs.stringify({
                        grant_type: "refresh_token", refresh_token
                    })
                });

                const { access_token } = await getAccessToken.json();

                const getCurrentlyPlaying = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
                    headers: {
                        Authorization: `Bearer ${access_token}`
                    }
                });

                const response = await getCurrentlyPlaying.json();

                var artistsTemp = [];
                response.item.artists.map((artist) => {
                    artistsTemp.push(artist.name);
                })
                setArtists(artistsTemp);

                setCurrentlyPLaying(response);
            } catch (error) {
                setCurrentlyPLaying(null);
            }
        }
        fetchData();
    }, []);

    return (
        <div className={`pl-5 pr-5 transition-opacity duration-600 ${fadeState}`}>
            <h3 className='pb-5'>What I&apos;m Listening To</h3>
            {currentlyPlaying ? (
                <Link href={currentlyPlaying.item.external_urls.spotify} rel="noopener noreferrer" target="_blank">
                    <div className="flex items-center gap-4 transition-transform duration-200 cursor-pointer">
                        <AnimatedBars />
                        <p className="hover:opacity-75 transition-opacity duration-200">{currentlyPlaying.item.name} - {artists.join(', ')}</p>
                        <FaSpotify className="w-4 h-4 hover:opacity-75 transition-opacity duration-200" />
                    </div>
                </Link>
            ) : (
                <div>
                    <p>Not currently playing anything</p>
                </div>
            )}
        </div>
    )
}

export default Music