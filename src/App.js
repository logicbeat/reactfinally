import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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
    const style = {
      backgroundColor: 'green',
      color : 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (<div>
        {this.state.persons.map((person, index) => {
          return (
          <Person click={this.deletePersonHandler.bind(this, index)}
           name={person.name}
           age={person.age}
           key={person.id}
           changed={(event) => this.nameChangeHandler(event, person.id)}/>
           )
        })}
      </div>)
      style.backgroundColor = 'red';
    }

    let classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');
    }
    return (
      <div className="App">
        <h1>Radha Soami Ji</h1>
        <p className={classes.join(' ')}>This is really working!!!</p>
        <button
          style={style}
          onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Radha Soami Ji'));
  }
}

export default App;
