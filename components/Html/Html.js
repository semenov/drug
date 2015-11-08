import React, { Component, PropTypes } from 'react';

class Html extends Component {

    static propTypes = {
        title: PropTypes.string,
        description: PropTypes.string,
        css: PropTypes.string,
        body: PropTypes.string.isRequired
    };

    static defaultProps = {
        title: 'js2015',
        description: ''
    };

    render() {
        return (
            <html>
                <head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <title>{this.props.title}</title>
                    <meta name="description" content={this.props.description} />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="stylesheet" href={this.props.css} />
                </head>
                <body>
                    <div id="app" dangerouslySetInnerHTML={{__html: this.props.body}} />
                    <script src="/bundle.js"></script>
                </body>
            </html>
        );
    }

}

export default Html;
