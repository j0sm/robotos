import React from 'react';

const Card = ({ name, email, phone, website, id }) => {
    return (
        <div className='tc bg-purple dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img className='bg-washed-blue br3' alt='robots' src = {`https://robohash.org/${id}?200x200`} />
            <div className='color: light-red'>
                <h2>{name}</h2>
                <p>Em: {email}</p>
                <p>Ph: {phone}</p>
                <p>Web: www.{website}</p>
            </div>
        </div>
    )
}

export default Card;