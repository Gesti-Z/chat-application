import React, { useState, useEffect } from 'react';
import { useChatContext } from 'stream-chat-react';

import { SearchIcon } from '../assets';

const ChannelSearch = () => {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);

    const setChannels = async (text) => {
        try {
            // TODO: fetch channels
        } catch(error) {
            setQuery('');
        }
    } 

    const onSearch = (event) => {
        event.preventDefault(); // mos behet reload psh kur ben submit

        setLoading(true);
        setQuery(event.target.value);
        setChannels(event.target.value);
    } 

  return (
    <div className='channel-search__container'>
        <div className='channel-search__input__wrapper'>
            <div className='channel-search__input__icon'>
                <SearchIcon />
            </div>
            <input 
                className='channel-search__input__text' 
                placeholder='Search' 
                type='text' 
                value={query}
                onChange={onSearch}
            />
        </div>
    </div>
  )
}

export default ChannelSearch
