import React, {Component} from 'react';

import './style.css';

export class DelayedComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { hidden: 'hidden' };
    }

    componentWillMount() {
        var that = this;
        setTimeout(function() {
            that.show();
        }, that.props.wait);
    }

    show() {
        this.setState({hidden : ""});
    }

    render() {
        return (
            <div className={this.state.hidden}>
                {this.props.children}
            </div>
        );
    }
}

export default DelayedComponent;