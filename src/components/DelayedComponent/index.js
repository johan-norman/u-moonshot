import React, {Component, ClassNames} from 'react';

import './style.css';

export class DelayedComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { hidden: true };
    }

    componentWillMount() {
        var that = this;
        setTimeout(function() {
            that.show();
        }, that.props.wait);
    }

    show() {
        this.setState({hidden : false});
    }

    render() {
        const hidden = this.state.hidden ? 'hidden' : 'show';
        const classes = `${hidden} hidden-component`;
        return (
            <div className={classes}>
                {this.props.children}
            </div>
        );
    }
}

export default DelayedComponent;