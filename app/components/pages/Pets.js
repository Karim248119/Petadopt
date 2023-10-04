"use client"
import { Button } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import CardRues from '../CardRues';
import Cart4 from '../Cart4';
import { animalsData } from '@/app/data/Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat, faDog, faDove } from '@fortawesome/free-solid-svg-icons';

export default function Pets ()
{
    const [ filteredData, setFilteredData ] = useState( [] );
    const [ isButtonClicked, setIsButtonClicked ] = useState( true );
    const [ isButtonClicked2, setIsButtonClicked2 ] = useState( false );
    const [ isButtonClicked3, setIsButtonClicked3 ] = useState( false );

    const data = animalsData.map( ( animal ) => ( animal ) )

    const filterByType = ( type ) =>
    {
        const filteredItems = data.filter( ( item ) => item.type === type );
        setFilteredData( filteredItems );
    };

    const handleClick = () =>
    {
        setIsButtonClicked( !isButtonClicked );
        isButtonClicked2 ? setIsButtonClicked2( !isButtonClicked2 ) : null
        isButtonClicked3 ? setIsButtonClicked3( !isButtonClicked3 ) : null
        filterByType( 'dog' )
    };
    const handleClick2 = () =>
    {
        setIsButtonClicked2( !isButtonClicked2 );
        isButtonClicked ? setIsButtonClicked( !isButtonClicked ) : null
        isButtonClicked3 ? setIsButtonClicked3( !isButtonClicked3 ) : null
        filterByType( 'cat' )
    };
    const handleClick3 = () =>
    {
        setIsButtonClicked3( !isButtonClicked3 );
        isButtonClicked2 ? setIsButtonClicked2( !isButtonClicked2 ) : null
        isButtonClicked ? setIsButtonClicked( !isButtonClicked ) : null
        filterByType( 'bird' )
    };
    useEffect( () =>
    {
        if ( isButtonClicked )
        {
            filterByType( 'dog' )
        }
    }, [] )

    return (
        <div className='min-h-[100vh] w-full bg-white flex flex-col items-center justify-around capitalize p-24' id='adopt'>
            <h1 className=' text-6xl font-bold'>
                Pets available for adobtion nearby
            </h1>
            <div className=' flex justify-around w-80 m-16'>
                <Button onClick={ handleClick } className={ isButtonClicked ? 'bg-bvp' : 'bg-white text-gray-700 border-gray-300 border-t-5 text-lg' }><FontAwesomeIcon icon={ faDog } /></Button>
                <Button onClick={ handleClick2 } className={ isButtonClicked2 ? 'bg-bvp' : 'bg-white text-gray-700 border-gray-300 border-t-5 text-lg' }><FontAwesomeIcon icon={ faCat } /> </Button>
                <Button onClick={ handleClick3 } className={ isButtonClicked3 ? 'bg-bvp' : 'bg-white text-gray-700 border-gray-300 border-t-5 text-lg' }><FontAwesomeIcon icon={ faDove } /></Button>
            </div>
            <div className=' grid grid-cols-3 gap-12'>
                { filteredData.map( animal => (
                    <Cart4 animal={ animal } key={ animal.id } />
                ) ) }
            </div>

        </div>
    )
}
