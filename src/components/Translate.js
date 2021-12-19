import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';
import * as Constants from './Constants';


const Translate = () => {
    const [language, setLanguage] = useState(Constants.optionsTranslate[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter Text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>
            <Dropdown
                label='select a language'
                selected={language}
                onSelectedChange={setLanguage}
                options={Constants.optionsTranslate} />
            <div className='ui horizontal inverted divider'>output</div>
            <h3 className='ui header'>Output</h3>
            <div className="ui segment">
                <Convert text={text} language={language} />
            </div>
        </div>
    )
}

export default Translate;