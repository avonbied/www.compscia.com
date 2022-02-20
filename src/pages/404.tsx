import * as React from 'react';
import Layout from '../templates/layout';

export default () => {
    return (
        <Layout>
        <h2 style={{textAlign: 'center'}}>Oops. We couldn't find that page</h2>
        <h3 style={{textAlign: 'center'}}>Please check to make sure that you type in the correct url.</h3>
        </Layout>
    );
}