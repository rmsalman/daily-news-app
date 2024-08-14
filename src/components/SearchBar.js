import React, { useState, useEffect } from 'react';

const SearchBar = ({ onSearch, keywordProp, sourceProp, dateProp }) => {
    const [q, setKeyword] = useState('');
    const [source, setSource] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        setKeyword(keywordProp || '');
        setSource(sourceProp || 'guardian');
        setDate(dateProp || '');
    }, [sourceProp, dateProp, keywordProp]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch({ q, source, date });
    };

    return (
        <div className="filter-container">
            <form id="filter-form" onSubmit={handleSubmit}>
                <div className="filter-group">
                    <label>Search:</label>
                    <input type="text" id="search" name="search" placeholder="Search articles..." value={q} onChange={(e) => setKeyword(e.target.value)} />
                </div>
                <div className="filter-group">
                    <label>Date:</label>
                    <input type="date" id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
                <div className="filter-group">
                    <label>Source:</label>
                    <select id="source" name="source"  value={source} onChange={(e) => setSource(e.target.value)}>
                    <option  value="guardian">The Guardian</option>
                    <option value="newsapi">NewsAPI</option>
                    <option value="nytimes">New York Times</option>
                </select>
                </div>
                <div className="filter-group filterButton">
                    <button type="submit">{keywordProp ? 'Save Filter' : 'Filter'}</button>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
