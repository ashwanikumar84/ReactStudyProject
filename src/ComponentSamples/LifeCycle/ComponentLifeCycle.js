import React, { Component } from 'react';

class ComponentLifeCycle extends Component {

    constructor(props){
        super(props)
        console.log('ComponentLifeCycle constructor');
    }
    componentDidMount(){
        console.log('Mounted');
        <div>componentDidMount</div>
    }

    componentDidUpdate(){
        console.log('Did Update');
    }

    componentWillMount(){
        console.log('Will Mount');
    }

    componentWillUpdate(){
        console.log('Will Update');
    }

    componentWillUnmount(){
        console.log('Will Unmount');
    }

    render() {
        return <div>Lifecycle Flow Using class Component</div>;
    }
}

export default ComponentLifeCycle;
