import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const gitHub = <a href='https://github.com/davidciliberto1'>davidciliberto1</a>
const linkedin = <a href='https://www.linkedin.com/in/david-ciliberto-428703120/'>David Ciliberto</a>
const items = [
    {
        title: 'David Ciliberto',
        content: 'Buenos Aires (Capital Federal)'
    },
    {
        title: 'Telefono',
        content: '(11) 5582 6914'
    },
    {
        title: 'Correo',
        content: 'davidciliberto@gmail.com'
    },
    {
        title: 'github',
        content: gitHub
    },
    {
        title: 'linkedin',
        content: linkedin
    },
];

const options = [
    {
        label: 'Certification Front End Libraries',
        value: 'Red'
    },
    {
        label: 'Certification Javascript ES6, Algorithms and Data Structures',
        value: 'Green'
    },
    {
        label: 'Responsive web design Certification',
        value: 'Blue'
    },
    {
        label: 'Udemy  /  React js y Javascript'       
    },
    {
        label: 'Udemy  /  Modern React with Redux'
    },
];


export default () => {

    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Header />
            <Route
                path='/'>
                <Accordion
                    items={items} />
            </Route>
            <Route path='/list'>
                <Search />
            </Route>
            <Route path='/dropdown'>
                <Dropdown
                    label='Certifications and Courses'
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path='/translate'>
                <Translate />
            </Route>


        </div>
    );
};
