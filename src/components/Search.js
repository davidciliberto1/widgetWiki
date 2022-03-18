import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('react');
    const [debouncedTerm, setDebounceTerm] = useState(term);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebounceTerm(term);
        }, 1000);
        return () => {
            clearTimeout(timerId);
        };
    }, [term]);

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm,
                },
            });
            setResults(data.query.search);
        };
        search();
    }, [debouncedTerm])


    const renderedResults = results.map((result) => {
        return (
            <div className='item' key={result.pageid}>
                <div className='right floated content'>
                    <a className='ui button' tabIndex='0' href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
                    <div className="ui red button small">
                        <i className="heart icon small"></i>Like
                    </div>
                    <div className="ui basic red left pointing label">{result.wordcount}</div>
                </div>
                <div className='content'>
                    <div className='header'>{result.title}</div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter Search Term</label>
                    <div className='ui icon input'>
                        <input
                            className='input'
                            value={term}
                            onChange={e => setTerm(e.target.value)}
                        />
                        <i className="inverted circular search link icon"></i>
                    </div>
                </div>
            </div>
            <div className='ui celled list'>{renderedResults}</div>
        </div>
    )
}
export default Search;