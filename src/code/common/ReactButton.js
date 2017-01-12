import React from 'react';
import { Component } from 'react';

export default class ReactButton extends Component {

    constructor(props)
    {
        super(props);
        
        this.state = {
            label: props.label,
            counter: 0 
        }

    }

    componentWillReceiveProps(nextProps)
    {
       this.setState({label: nextProps.label});
    }

    componentWillMount()
    {

         
    }
    
    onClick()
    {
       // console.log("state is "+JSON.stringify(this.state))
       
       
       
       
    }

    render() {
        return (
                <span id="reactApp1" className="item-container">
                    <button onClick={this.onClick.bind(this)}  className="btn btn-primary">{this.props.label}</button>
                    <br/>
                    <textarea className="item-text" />
                </span>



                );
    }

}
