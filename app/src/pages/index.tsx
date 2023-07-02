import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '@layouts/layout';
import App from '../components/app';

export default () => {
    return(
        <Layout>
            <Link to='/about'>About</Link>
            <App name="John">
                <p>There is plenty that you can do.</p>
                <footer>Hello</footer>
            </App>
        </Layout>
    );
}