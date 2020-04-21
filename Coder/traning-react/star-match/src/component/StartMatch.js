import React, { useState } from "react";
import colors from "./colors";
import utils from "./utils";

const StarMatch = () => {
    const [stars, setStars] = useState(utils.random(1, 9));
    return (
        <div className="game">
            <div className="help">
                Pick 1 or more numbers that sum to the number of stars
            </div>
            <div className="body">
                <div className="left">
                    {utils.range(1, 9).map(starId => (
                        <div key={starId} className="star" />
                    ))}
                </div>
                <div className="right">
                    {utils.range(1, 9).map(number => (
                        <button key={number} className="number">
                            {number}
                        </button>
                    ))}
                </div>
            </div>
            <div className="timer">Time Remaining: 10</div>
        </div>
    );
};

export default StarMatch;
