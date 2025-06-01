import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const Chess = () => {
    const [chessStats, setChessStats] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchChessStats() {
            try {
                const response = await fetch('https://api.chess.com/pub/player/stax404/stats');
                const data = await response.json();

                if (!data || !data.chess_rapid?.last?.rating ||
                    !data.chess_blitz?.last?.rating ||
                    !data.chess_bullet?.last?.rating ||
                    !data.tactics?.highest?.rating) {
                    throw new Error('Invalid data structure');
                }

                setChessStats(data);
            } catch (error) {
                console.log('Error fetching chess stats:', error);
                setChessStats(null);
            } finally {
                setIsLoading(false);
            }
        }
        fetchChessStats();
    }, []);

    return (
        <div className="relative">
            <h3 className="pb-5">Let&apos;s Play Chess</h3>

            {isLoading ? (
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <div className="w-4 h-4 border-2 border-gray-300 dark:border-gray-600 border-t-black dark:border-t-white rounded-full animate-spin"></div>
                    Loading stats...
                </div>
            ) : chessStats ? (
                <div className="space-y-4">
                    <div className="grid grid-cols-4 gap-3 text-xs">
                        {[
                            { name: 'Rapid', rating: chessStats.chess_rapid.last.rating, icon: '⏱️' },
                            { name: 'Blitz', rating: chessStats.chess_blitz.last.rating, icon: '💨' },
                            { name: 'Bullet', rating: chessStats.chess_bullet.last.rating, icon: '🚀' },
                            { name: 'Puzzle', rating: chessStats.tactics.highest.rating, icon: '🧩' }
                        ].map((stat) => (
                            <div
                                key={stat.name}
                                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-center transition-transform hover:scale-105 border border-gray-200 dark:border-gray-700"
                            >
                                <div className="text-lg mb-1">{stat.icon}</div>
                                <div className="font-bold text-lg text-black dark:text-white">{stat.rating}</div>
                                <div className="text-xs text-gray-600 dark:text-gray-400">{stat.name}</div>
                            </div>
                        ))}
                    </div>

                    <Link
                        href="https://www.chess.com/member/stax404"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-500 dark:text-blue-400 hover:opacity-75 transition-opacity text-sm"
                    >
                        Challenge Me! ⚔️
                    </Link>
                </div>
            ) : (
                <div className="text-center">
                    <div className="text-2xl mb-2">😔</div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        Stats unavailable
                    </p>
                    <Link
                        href="https://www.chess.com/member/stax404"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline text-sm"
                    >
                        <span>♟️</span>
                        Visit Profile
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Chess;