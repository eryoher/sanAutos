import React from "react";
import App, { Container } from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import withReduxSaga from 'next-redux-saga';
import { I18n, Trans } from 'react-i18next';
import configureStore from '../store'
import '../lib/AxiosInterceptors'
import '../styles/style.scss'

class MyApp extends App {

  static async getInitialProps({ Component, ctx }) {

    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx })
    }

    return { pageProps }

  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }

}

export default withRedux(configureStore)(withReduxSaga(MyApp));