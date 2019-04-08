import React from 'react';

const DisplayQuote = ({ quote }) => {
    return (
        <div className="DisplayQuote">
            <img src={quote.image} alt={quote.character} />
            <ul>
                <li>{quote.quote}</li>
                <li>{quote.character}</li>
            </ul>
        </div>
    );
};

export default DisplayQuote;