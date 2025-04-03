import React, { useState } from 'react';
import bg from '../assets/profile-background-2.jpg'
import { Link, useNavigate } from 'react-router-dom';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const navigate = useNavigate();

    // Mock data for testing
    const mockData = [
        { id: 1, name: 'Player 1', username: 'player1', type: 'Player', profile_image: bg },
        { id: 2, name: 'Club A', username: 'clubA', type: 'Club', profile_image: bg },
        { id: 3, name: 'Player 2', username: 'player2', type: 'Player', profile_image: bg },
    ];

    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        if (query.trim()) {
            const filteredData = mockData.filter(
                (item) =>
                    item.name.toLowerCase().includes(query.toLowerCase()) ||
                    item.username.toLowerCase().includes(query.toLowerCase())
            );
            setSuggestions(filteredData);
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        if (suggestion.type === 'Player') {
            navigate(`/player/${suggestion.username}`, { state: suggestion });
        } else if (suggestion.type === 'Club') {
            navigate(`/club/${suggestion.username}`, { state: suggestion });
        }
        setSearchQuery('');
        setSuggestions([]);
    };

    return (
        <div className="relative w-full max-w-md mx-auto">
            <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search Player or Club"
                className="w-full border-2 rounded-lg outline-none px-4 py-2"
            />
            {suggestions.length > 0 && (
                <ul className="absolute top-full left-0 w-full bg-white border rounded-lg shadow-md z-50">
                    {suggestions.map((suggestion) => (
                        <Link to={`/${suggestion.username}`}>
                            <li
                                key={suggestion.id}
                                className="p-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => handleSuggestionClick(suggestion)}
                            >
                                <div className="flex items-center space-x-2">
                                    <img
                                        src={suggestion.profile_image}
                                        alt={suggestion.name}
                                        className="w-8 h-8 rounded-full"
                                    />
                                    <div>
                                        <p className="font-semibold">{suggestion.name}</p>
                                        <p className="text-sm text-gray-500">@{suggestion.username}</p>
                                    </div>
                                </div>
                            </li>
                        </Link>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Search;