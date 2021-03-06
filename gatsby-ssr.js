import React from 'react';
import Layout from './src/components/layout';

import './src/styles/reset.scss';

export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>;
}
