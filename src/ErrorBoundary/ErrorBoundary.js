import React, {Component} from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError : false,
        errorMessage : ''
    }

    
    render(){
        return <h1>Something went wrong</h1>
    }
}