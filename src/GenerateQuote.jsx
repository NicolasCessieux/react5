import React from 'react';

const GenerateQuote = ({ selectQuote }) => {
    return (
        <div className="GenerateQuote">
            <button
                onClick={selectQuote}>Get another quote
            </button>
        </div>
    );
};

export default GenerateQuote;