import React, { use } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';


const AvailablePlayers = ({playerPromise, setAvailableBalance, availableBalance, purchasedPlayers, setPurchasedPlayers}) => {

    const players = use(playerPromise);
    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-3'>

            {
                players.map(player => <PlayerCard 
                    purchasedPlayers={purchasedPlayers} 
                    setPurchasedPlayers={setPurchasedPlayers}
                    availableBalance={availableBalance} 
                    setAvailableBalance={setAvailableBalance} 
                    player={player}></PlayerCard>)
            }
            {/* <div className="card bg-base-100 w-96 shadow-sm p-4">
                <figure>
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
                </figure>
                <div className="mt-4">
                    <div className='flex gap-2'>
                        <img className='w-[20px] h-[20px]' src="https://i.ibb.co.com/C3qfRPxg/Group.png" alt="" srcset="" />
                        <h2 className="card-title">Shakib Al Hasan</h2>
                    </div>
                    <div className="flex justify-between mt-4 border-b-1 border-gray-400 pb-2">
                        <div className="flex items-center gap-2">
                            <img className='w-[20px] h-[20px]' src="https://i.ibb.co.com/XZJNkShH/Group-1.png" alt="" />
                            <span>Bangladesh</span>
                        </div>
                        <button className='btn'>All rounder</button>
                    </div>

                    <div className='flex justify-between font-bold mt-4'>
                        <span>Rating</span>
                        <span>5</span>
                    </div>
                    <div className='flex justify-between mt-4'>
                        <span className='font-bold'>Left Hand Bat</span>
                        <span>Right Hand Bowl</span>
                    </div>
                    <div className="card-actions mt-4 flex justify-between items-center">
                        <p className='font-bold'>Price: $15000000 </p>
                        <button className="btn">Choose Player</button>
                    </div>
                    
                </div>
            </div> */}
        </div>
    );
};

export default AvailablePlayers;