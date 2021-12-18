import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';
import * as Constants from './components/Constants';

const App = () => {
    const [selected, setSelected] = useState(Constants.options[0]);

    return (
        <div className='ui container'>
            <Header />
            <br />
            <Route
                path='/'>
                <Accordion
                    items={Constants.items} />
            </Route>
            <Route path='/list'>
                <Search />
            </Route>
            <Route path='/dropdown'>
                <Dropdown
                    label='Certifications and Courses'
                    options={Constants.options}
                    selected={selected}
                    onSelectedChange={setSelected} />
            </Route>
            <Route path='/translate'>
                <Translate />
            </Route>
        </div>
    );
};
export default App;