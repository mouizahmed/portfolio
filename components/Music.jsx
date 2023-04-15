import React, { useState, useEffect } from 'react'
import ColorThief from 'colorthief';
import Image from 'next/image'
import Link from 'next/link'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid';
import qs from "querystring";

const Music = () => {

    const [currentlyPlaying, setCurrentlyPLaying] = useState(null);
    const [colors, setColors] = useState([]);
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const refresh_token = process.env.NEXT_PUBLIC_REFRESH_TOKEN;

            // Get new access token from refresh token
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
    
            // Get current song details 
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
            
            const colorThief = new ColorThief();
            
            setCurrentlyPLaying(response);
            } catch (error) {
                setCurrentlyPLaying(null);
               
            }
       }
       fetchData();
       
    }, [])

    const handleImageLoad = (event) => {
        const colorThief = new ColorThief();
        const palette = colorThief.getPalette(event.target);
        setColors(palette);
      };

  return (
    <div className="pl-5 pr-5 pt-5 pb-5" >
        { currentlyPlaying ? (
            <>
        <h3>What I&apos;m Listening To</h3>
        <div className="flex justify-center pt-5 rounded-xl hover:scale-110 transform transition duration-300 ease-in-out cursor-pointer">
            <Link href={currentlyPlaying.item.external_urls.spotify} rel="noopener noreferrer" target="_blank">
                <Card className="rounded-xl" style={{ background: `linear-gradient(to bottom, rgb(${colors[0]}), rgb(${colors[1]})` }}>
                    <CardContent className="rounded-xl">
                        <Grid container spacing={2} columns={{ xs: 2, sm: 2, md: 2, lg: 2, xl: 2 }}>
                            <Grid item xs={1} sm={1} md={1} lg={1} xl={1} className="">
                                <Image className="rounded-xl hover:scale-110 transform transition duration-300 ease-in-out" src={currentlyPlaying.item.album.images[1].url} onLoad={handleImageLoad} alt="Picture of the author" width={150} height={150} />
                            </Grid>
                            <Grid item xs={1} sm={1} md={1} lg={1} xl={1} className="flex items-center justify-center">

                                <Grid container columns={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }}>
                                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                                    <h3>{currentlyPlaying.item.name}</h3>
                                    </Grid>
                                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                                        <h3>by {artists.join(', ')}</h3>
                                    {/* by {currentlyPlaying.item.artists.map((artist) => (
                                        
                                        <span key={artist.id}>{artist.name}, </span>
                                    ))} */}
                                    {/* {currentlyPlaying.item.album.artists[0].name} */}
                                    </Grid>
                                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                                        <h3>on {currentlyPlaying.item.album.name}</h3>
                                    </Grid>
                                </Grid>
                            
                            </Grid>
                            
                        </Grid>
                    </CardContent>
                </Card>
            </Link>
        </div>
        </>
        ) : (<h3>What I&apos;m Listening To</h3>)
        }
    </div>
  )
}

export default Music