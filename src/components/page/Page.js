import React, { Component } from 'react';

import { IntouchContext }   from 'intouch-plugin-bridge';

class Page extends Component {

    constructor(props) {
        super(props);
        this.height = 0;
    }

    componentDidMount() {
        this.updateHeight();
        window.addEventListener('resize', this.updateHeight);

    }

    componentDidUpdate() {
        this.updateHeight();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateHeight);
    }

    updateHeight = () => {
        const intouch = this.context;

        if (this.container.offsetHeight !== this.height) {
            this.height = this.container.offsetHeight;
           
            intouch.bridge.setIframeHeight(this.height);
        }
      
    }

    render() {
        const { children, style, ...rest_props } = this.props;
        
        let page_style = {
            paddingTop: 20,
            ...style
        }

        return (
            <div ref={(container) => {this.container = container}} style={page_style} {...rest_props}>
                {children}
            </div>
        );
    }

}

Page.contextType = IntouchContext;

export default Page;
