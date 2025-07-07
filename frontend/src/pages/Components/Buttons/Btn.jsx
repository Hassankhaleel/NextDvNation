import React from 'react';

function Btn({ content }) {
    return (
        <button
            style={{
                backgroundColor: content.color, color: content.text,
            }}
            className="border text-white border-black  rounded-[10px] text-[15px] p-2 px-5"
        >
            {content.data}
        </button>
    );
}

export default Btn;
