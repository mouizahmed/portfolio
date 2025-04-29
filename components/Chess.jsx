import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const Chess = () => {
    const [chessStats, setChessStats] = useState(null);
    const [fadeState, setFadeState] = useState("opacity-0");

    useEffect(() => {
        // Chess component appears sixth
        setTimeout(() => {
            setFadeState("opacity-100");
        }, 3000);

        async function fetchChessStats() {
            try {
                const response = await fetch('https://api.chess.com/pub/player/stax404/stats');
                const data = await response.json();
                setChessStats(data);
            } catch (error) {
                console.error('Error fetching chess stats:', error);
            }
        }
        fetchChessStats();
    }, []);

    return (
        <div className={`pl-5 pr-5 pt-5 pb-5 transition-opacity duration-600 ${fadeState}`}>
            <h3 className='pb-5'>Play chess with me!</h3>
            {chessStats ? (
                <div className="space-y-4">
                    <div className="flex flex-wrap gap-4">
                        <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg">
                            <span className="font-semibold">Rapid:</span> {chessStats.chess_rapid.last.rating}
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg">
                            <span className="font-semibold">Blitz:</span> {chessStats.chess_blitz.last.rating}
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg">
                            <span className="font-semibold">Bullet:</span> {chessStats.chess_bullet.last.rating}
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg">
                            <span className="font-semibold">Puzzle:</span> {chessStats.tactics.highest.rating}
                        </div>
                    </div>
                    <Link href="https://www.chess.com/member/stax404" target="_blank" rel="noopener noreferrer" className="inline-block text-blue-600 dark:text-blue-400 hover:underline">
                        Challenge me on Chess.com
                    </Link>

                </div>
            ) : (
                <div>
                    <p>Loading chess stats...</p>
                </div>
            )}
        </div>
    )
}

export default Chess;