import React, { useState } from 'react';
import { roomsDummyData } from '../../assets/assets';
import Title from '../../components/Title';

const ListPlace = () => {

    const [rooms, setRooms] = useState(roomsDummyData)
    return (
        <div>
            <Title align='left' font='outfit' title='Place Listing' subTitle='View, edit, or manage all listed Place. Keep the information up-to-date to provide the best experience for users.'></Title>
            <p className='text-gray-500 mt-8'>All Place</p>
            <div className='w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll mt-3'>
                <table className='w-full'>
                    <thead className='bg-gray-50'>
                        <tr>
                            <th className='py-3 px-4 text-gray-800 font-medium'>User Name</th>
                            <th className='py-3 px-4 text-gray-800 font-medium max-sm:hidden'>Name</th>
                            <th className='py-3 px-4 text-gray-800 font-medium'>Facility</th>
                            <th className='py-3 px-4 text-gray-800 font-medium text-center'>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='text-sm'>
                        {
                            rooms.map((item, index) => (
                                <tr key={index}>
                                    <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>
                                        {item.roomType}
                                    </td>
                                    <td className='py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden'>
                                        {item.amenities.join(', ')}
                                    </td>
                                    <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>
                                        {item.pricePerDay(', ')}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListPlace;