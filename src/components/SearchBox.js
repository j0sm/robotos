import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa2'>
            <input 
            className='pa3 ba bw2 br4 b--pink bg-lightest-pink'
            type='search' 
            placeholder='search robots' 
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;