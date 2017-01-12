import React from 'react';
import { Component } from 'react';

export default class ReactButton extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            label: props.label,
            combinedMessage: "",
            counter: 0
        }

    }

    componentWillReceiveProps(nextProps)
    {
        this.setState({label: nextProps.label});
    }

    componentWillMount()
    {
        let handler = this.handleMessage.bind(this);
        $(document).on('internalMessage', handler);

    }

    handleMessage(ev)
    {
        //e.time
        // e.message
        // e.source ... whatever json props where sent

        let newText = this.state.combinedMessage;
        newText = newText + ev.message + "\n";
        if (ev.source != this.props.eventLabel)
        {
            this.setState({combinedMessage: newText});
        }

    }

    onClick()
    {
        // console.log("state is "+JSON.stringify(this.state))
        let me = this;
        let sendVar = this.state.counter + 1;
        $.event.trigger({
            type: 'internalMessage',
            source: me.props.eventLabel,
            message: "from " + me.props.eventLabel + " " + sendVar
        });
        me.setState({counter: sendVar});



    }

    render() {
        return (
                <span id="reactApp1" className="item-container">
                    <button onClick={this.onClick.bind(this)}  className="btn btn-primary">{this.props.label}</button>
                    <br/>
                    <textarea value={this.state.combinedMessage} className="item-text" />
                </span>



                );
    }

}
