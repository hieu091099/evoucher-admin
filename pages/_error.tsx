import React from 'react';

class Error extends React.Component {
  static getInitialProps({ res, err }: any) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
  }

  render() {
    const { statusCode }: any = this.props;
    return (
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
    );
  }
}

export default Error;
