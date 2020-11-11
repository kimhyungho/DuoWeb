import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';
import wrapper from '../store/configureStore';
import withReduxSaga from 'next-redux-saga';


const App = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>Duo9ham</title>
            </Head>
            <Component />
        </>
    );

};

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
};
export default wrapper.withRedux(withReduxSaga(App));  // next에서 provider를 안써도 되는 이유