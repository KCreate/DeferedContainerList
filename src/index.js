import React, { Component } from 'react';
class DeferedContainerList extends Component {

    constructor(...args) {
        super(...args);

        // Merge props and state
        this.state = Object.assign({}, this.props, {
            applied: true,
        });
    }

    componentDidMount() {

        // Show the Containers after the component mounted
        this.setState({
            applied: false,
        });
    }

    componentWillReceiveProps(nextProps) {

        // Hide the containers
        this.setState({
            applied: true,
        });

        // After the specified timeout, change the children
        setTimeout(() => {

            // Replace props, let React handle the state change and show them once React finished
            this.setState(Object.assign({}, this.state, nextProps), () => {

                // Delay of 20ms to make sure react has finished all of it's DOM operations
                setTimeout(() => {
                    this.setState({
                        applied: false,
                    });
                }, 20);
            });
        }, this.state.delay);
    }

    render() {

        // Children with merged style and className props
        const children = React.Children.map(this.state.children, (child, index) => {
            const applied = this.state.applied;
            const currentClassName = (applied ? this.state.appliedClassName : this.state.notAppliedClassName);
            const currentStyle = (applied ? this.state.appliedStyle : this.state.notAppliedStyle);

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
    appliedClassName: '',
    notAppliedClassName: '',
    appliedStyle: {},
    notAppliedStyle: {},
};

export default DeferedContainerList;
