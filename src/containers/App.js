import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import iClasses from './App.module.css';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  state = {
    persons: [
      { id: '12',name: "Max", age: 28 },
      { id: 'ww21',name: "Ashu", age: 26 },
      { id: 're1',name: "Abhi", age: 24 }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log("Radha Soami Ji");
    // DON'T DO THIS : this.state.persons[0].name = "Ashish Gupta";
    this.setState({
      persons: [
        { id: '12',name: newName, age: 28 },
        { id: 'ww21',name: "Ashu", age: 26 },
        { id: 're1',name: "Abhi", age: 30 }
      ]
    })
  }

  nameChangeHandler = (event, id) => {
    // console.log("Radha Soami Ji");
    // DON'T DO THIS : this.state.persons[0].name = "Ashish Gupta";
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // const person = {
    //   ...this.state.persons[personIndex]
    // }
    const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons : persons});
  }

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons persons={this.state.persons} 
                         changed={this.nameChangeHandler} 
                         clicked={this.deletePersonHandler} />;
    }

    return (
      <div className={iClasses.App}>
        <Cockpit persons={this.state.persons}
         showPersons={this.state.showPersons}
         clicked={this.togglePersonHandler}
         appTitle={this.props.title} />
        {persons}
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Radha Soami Ji'));
  }
}

export default App;
