import React, { useState } from 'react';
import { toast } from 'react-toastify';



const PlayerCard = ({player, availableBalance, setAvailableBalance, purchasedPlayers, setPurchasedPlayers}) => {

    

    const handleBalance = (playerData) =>
    {
        const playerPrice = (playerData.price).split(',').join('')
        if (availableBalance < playerPrice) {
            toast('You do not have enough balance to select this player');
            return;
        } if(purchasedPlayers.length === 6) {
            toast('You can select up to 6 players only, 6 players already selected');
            return;
        } else {
            setIsSelected(true)
            setAvailableBalance(availableBalance - playerPrice);
        }
        setPurchasedPlayers([...purchasedPlayers, playerData])
        toast('Player selected successfully')
    }

    const [isSelected, setIsSelected] = useState(false);
    
    return (
            <div className="card bg-base-100 shadow-sm p-4">
                <figure>
                    <img className='w-full h-[300px] object-cover'
                    src={player.player_image}
                    alt="Shoes" />
                </figure>
                <div className="mt-4">
                    <div className='flex gap-2'>
                        <img className='w-[20px] h-[20px]' src="https://i.ibb.co.com/C3qfRPxg/Group.png" alt="" srcset="" />
                        <h2 className="card-title">Shakib Al Hasan</h2>
                    </div>
                    <div className="flex justify-between mt-4 border-b-1 border-gray-400 pb-2">
                        <div className="flex items-center gap-2">
                            <img className='w-[20px] h-[20px]' src="{https://i.ibb.co.com/XZJNkShH/Group-1.png}" alt="" />
                            <span>Bangladesh</span>
                        </div>
                        <button className='btn'>All rounder</button>
                    </div>

                    <div className='flex justify-between font-bold mt-4'>
                        <span>Rating</span>
                        <span>5</span>
                    </div>
                    <div className='flex justify-between mt-4'>
                        <span className='font-bold'>{player.batting_style}</span>
                        <span>Right Hand Bowl</span>
                    </div>
                    <div className="card-actions mt-4 flex justify-between items-center">
                        <p className='font-bold'>Price: ${player.price} Coin</p>
                        <button disabled={isSelected} onClick={()=> {
                            
                            handleBalance(player)
                        }} className="btn">{isSelected?`Selected`: `Choose Player`}</button>
                    </div>
                    
                </div>
            </div>
    );
};

export default PlayerCard;