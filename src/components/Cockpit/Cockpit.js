import React from 'react';

import cClasses from './Cockpit.module.css';

const cockpit = (props) => {
    let btnClass = '';
    const classes = [];

    if(props.showPersons){
        btnClass = cClasses.Red;
    }

    if(props.persons.length <= 2){
      classes.push(cClasses.red);
    }
    if(props.persons.length <= 1){
      classes.push(cClasses.bold);
    }

    return <div className={cClasses.Cockpit}>
        <h1>{props.appTitle}</h1>
        <p className={classes.join(' ')}>This is really working!!!</p>
        <button className={btnClass}
            onClick={props.clicked}>Toggle Persons</button>
    </div>
}

export default cockpit;