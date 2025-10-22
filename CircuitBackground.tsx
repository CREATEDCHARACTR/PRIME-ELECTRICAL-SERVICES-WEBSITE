import React from 'react';

const CircuitBackground: React.FC = () => {
  return (
    <svg id="circuit-background" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1920 1080" aria-hidden="true">
        <g className="static-traces">
            <path className="static-trace" d="M-10 1080 L 400 1080 L 400 700 L 800 700 L 800 1000 L 1200 1000 L 1200 600 L 1600 600 L 1600 900 L 1930 900"></path>
            <path className="static-trace" d="M-10 100 L 300 100 L 300 400 L 700 400 L 700 200 L 1100 200 L 1100 500 L 1500 500 L 1500 0"></path>
            <path className="static-trace" d="M1930 100 L 1600 100 L 1600 300 L 1200 300 L 1200 150 L 800 150 L 800 450 L 400 450 L 400 -10"></path>
            <path className="static-trace" d="M1930 1080 L 1500 1080 L 1500 800 L 1100 800 L 1100 1000 L 700 1000 L 700 750 L 300 750 L 300 1090"></path>
            <path className="static-trace" d="M960 -10 L 960 400 L 750 400 L 750 600 L 1150 600 L 1150 400 L 960 400"></path>
        </g>
        <g className="pulsing-traces">
            <path className="pulse-trace" d="M-10 1080 L 400 1080 L 400 700 L 800 700 L 800 1000 L 1200 1000 L 1200 600 L 1600 600 L 1600 900 L 1930 900"></path>
            <path className="pulse-trace" d="M-10 100 L 300 100 L 300 400 L 700 400 L 700 200 L 1100 200 L 1100 500 L 1500 500 L 1500 0"></path>
            <path className="pulse-trace" d="M1930 100 L 1600 100 L 1600 300 L 1200 300 L 1200 150 L 800 150 L 800 450 L 400 450 L 400 -10"></path>
            <path className="pulse-trace" d="M1930 1080 L 1500 1080 L 1500 800 L 1100 800 L 1100 1000 L 700 1000 L 700 750 L 300 750 L 300 1090"></path>
            <path className="pulse-trace" d="M960 -10 L 960 400 L 750 400 L 750 600 L 1150 600 L 1150 400 L 960 400"></path>
        </g>
        <g className="nodes">
            <circle className="node" cx="400" cy="1080" r="8"></circle>
            <circle className="node" cx="400" cy="700" r="8"></circle>
            <circle className="node" cx="800" cy="700" r="8"></circle>
            <circle className="node" cx="800" cy="1000" r="8"></circle>
            <circle className="node" cx="1200" cy="1000" r="8"></circle>
            <circle className="node" cx="1200" cy="600" r="8"></circle>
            <circle className="node" cx="1600" cy="600" r="8"></circle>
            <circle className="node" cx="1600" cy="900" r="8"></circle>
            <circle className="node" cx="300" cy="100" r="8"></circle>
            <circle className="node" cx="300" cy="400" r="8"></circle>
            <circle className="node" cx="700" cy="400" r="8"></circle>
            <circle className="node" cx="700" cy="200" r="8"></circle>
            <circle className="node" cx="1100" cy="200" r="8"></circle>
            <circle className="node" cx="1100" cy="500" r="8"></circle>
            <circle className="node" cx="1500" cy="500" r="8"></circle>
            <circle className="node" cx="960" cy="400" r="8"></circle>
            <circle className="node" cx="750" cy="600" r="8"></circle>
            <circle className="node" cx="1150" cy="600" r="8"></circle>
        </g>
    </svg>
  );
};

export default CircuitBackground;