import React from 'react';

export const Welcome = () => {
  return (
    <div className="welcome-screen">
        <svg width="100vw" height="100vh" viewBox="0 0 100 100">
          <path stroke="#009688"
                strokeLinecap="round"
                id="loading-logo"
                d="M 50 75
                  L 62.5 75
                  L 50 50
                  C 62.5 75 125 62.5 50 25
                  M 50 75
                  L 37.5 75
                  L 50 50
                  C 37.5 75 -25 62.5 50 25
                  "
            />
        </svg>
      </div>
  );
}