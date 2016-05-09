import React, { Component } from 'react';
class DeferedContainerList extends Component {

    constructor(...args) {
        super(...args);

        // Merge props and state
        this.state = Object.assign({}, this.props, {
            containerAreHidden: true,
        });
    }

    componentDidMount() {

        // Show the Containers after the component mounted
        this.setState({
            containerAreHidden: false,
        });
    }

    componentWillReceiveProps(nextProps) {

        // Hide the containers
        this.setState({
            containerAreHidden: true,
        });

        // After the specified timeout, change the children
        setTimeout(() => {

            // Replace props, let React handle the state change and show them once React finished
            this.setState(Object.assign({}, this.state, nextProps), () => {

                // Delay of 20ms to make sure react has finished all of it's DOM operations
                setTimeout(() => {
                    this.setState({ containerAreHidden: false });
                }, 20);
            });
        }, this.state.delay);
    }

    render() {

        // Children with merged style and className props
        const children = React.Children.map(this.state.children, (child, index) => {
            const hidden = this.state.containerAreHidden;
            const currentClassName = (hidden ? this.state.hiddenClassName : this.state.activeClassName);
            const currentStyle = (hidden ? this.state.hiddenStyle : this.state.activeStyle);

            // Merge old and new style and className props of the component
            const mergedClassName = (child.props.className || '') + ' ' + currentClassName;
            const mergedStyle = Object.assign({}, (child.props.style || {}), currentStyle);

            // Return using React.cloneElement
            return React.cloneElement(child, {
                className: mergedClassName,
                style: mergedStyle,
            });
        });

        return (
            <div>
                {children}
            </div>
        );
    }
}

DeferedContainerList.defaultProps = {
    delay: 200,
    hiddenClassName: '',
    activeClassName: '',
    hiddenStyle: {},
    activeStyle: {},
};

export default DeferedContainerList;
