import React from 'react';

const SelectedCard = ({player}) => {
    return (
        <div className='border-2 border-gray-300 flex justify-between items-center p-4 mt-5 rounded-2xl'>
            <div className='flex items-center ml-4 '>
                <img src="{player.player_image}" alt="" className='h-[50px] w-[50px] rounded-xl'/>
                <div className='ml-4'>
                    <h1>{player.player_image}</h1>
                    <p className='text-xs'>{player.batting_style}</p>
                </div>
            </div>
            <div>
                <img src="https://i.ibb.co.com/N2n0mc6z/Frame.png" alt="" srcset="" />
            </div>
        </div>
    );
};

export default SelectedCard;