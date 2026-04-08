import React, { useState, useEffect } from 'react';
import qs from 'querystring';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';

const Music = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const [artists, setArtists] = useState([]);
  const [albumImage, setAlbumImage] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const refreshToken = process.env.NEXT_PUBLIC_REFRESH_TOKEN;

      try {
        const getAccessToken = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
            Authorization:
              'Basic ' +
              Buffer.from(
                `${process.env.NEXT_PUBLIC_CLIENT_ID}:${process.env.NEXT_PUBLIC_CLIENT_SECRET}`
              ).toString('base64'),
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: qs.stringify({
            grant_type: 'refresh_token',
            refresh_token: refreshToken,
          }),
        });

        const { access_token: accessToken } = await getAccessToken.json();

        const getCurrentlyPlaying = await fetch(
          'https://api.spotify.com/v1/me/player/currently-playing',
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const response = await getCurrentlyPlaying.json();

        setAlbumImage(response.item.album.images[1].url);

        const artistNames = response.item.artists.map(artist => artist.name);
        setArtists(artistNames);
        setCurrentlyPlaying(response);
      } catch (error) {
        setCurrentlyPlaying(null);
      }
    }

    fetchData();
  }, []);

  return (
    <section>
      <h3 className="type-section mb-6">What I&apos;m Listening To</h3>

      {currentlyPlaying ? (
        <div className="space-y-2">
          <Link
            href={currentlyPlaying.item.external_urls.spotify}
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center gap-3 transition-opacity hover:opacity-75"
          >
            {albumImage ? (
              <Image
                className="rounded-sm"
                src={albumImage}
                alt="Album cover"
                width={28}
                height={28}
              />
            ) : null}
            <div>
              <p className="type-body">{currentlyPlaying.item.name} - {artists.join(', ')}</p>
            </div>
          </Link>

          <Link
            href="https://open.spotify.com/user/12179232988?si=067167f98fd342ea"
            rel="noopener noreferrer"
            target="_blank"
            className="inline-flex items-center gap-1 text-sm text-blue-500 transition-opacity hover:underline dark:text-blue-400"
          >
            <span>spotify profile</span>
            <FiArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      ) : (
        <div className="space-y-2">
          <p className="type-body">Not currently playing anything.</p>
          <Link
            href="https://open.spotify.com/user/12179232988?si=067167f98fd342ea"
            rel="noopener noreferrer"
            target="_blank"
            className="inline-flex items-center gap-1 text-sm text-blue-500 transition-opacity hover:underline dark:text-blue-400"
          >
            <span>spotify profile</span>
            <FiArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </section>
  );
};

export default Music;
