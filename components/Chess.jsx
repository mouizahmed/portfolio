import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';

const Chess = () => {
  const [chessStats, setChessStats] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchChessStats() {
      try {
        const response = await fetch('https://api.chess.com/pub/player/stax404/stats');
        const data = await response.json();

        if (
          !data ||
          !data.chess_rapid?.last?.rating ||
          !data.chess_blitz?.last?.rating ||
          !data.chess_bullet?.last?.rating ||
          !data.tactics?.highest?.rating
        ) {
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

  const stats = chessStats
    ? [
        { name: 'Rapid', rating: chessStats.chess_rapid.last.rating },
        { name: 'Blitz', rating: chessStats.chess_blitz.last.rating },
        { name: 'Bullet', rating: chessStats.chess_bullet.last.rating },
        { name: 'Puzzle', rating: chessStats.tactics.highest.rating },
      ]
    : [];

  return (
    <div className="relative">
      <h3 className="type-section mb-6">Let&apos;s Play Chess</h3>

      {isLoading ? (
        <div className="type-item-meta flex items-center gap-2">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-black dark:border-gray-600 dark:border-t-white" />
          Loading stats...
        </div>
      ) : chessStats ? (
        <div className="space-y-4">
          <div className="space-y-3">
            {stats.map(stat => (
              <div key={stat.name} className="flex items-center">
                <span className="type-item-title">{stat.name}</span>
                <span className="mx-4 hidden w-full grow border-t border-dashed border-gray-400 opacity-0 dark:border-gray-500 sm:block md:opacity-100" />
                <span className="type-item-meta text-right">{stat.rating}</span>
              </div>
            ))}
          </div>

          <Link
            href="https://www.chess.com/member/stax404"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-blue-500 transition-opacity hover:opacity-75 dark:text-blue-400"
          >
            <FiArrowUpRight className="h-4 w-4" />
            play chess with me
          </Link>
        </div>
      ) : (
        <div>
          <p className="type-body mb-2">Stats unavailable.</p>
          <Link
            href="https://www.chess.com/member/stax404"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline dark:text-blue-400"
          >
            Visit Profile
          </Link>
        </div>
      )}
    </div>
  );
};

export default Chess;
