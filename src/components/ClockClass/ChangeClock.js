import React, { Component } from 'react';
import { Button } from '../styles/Element.styles';

export default class ChangeClock extends Component {
    shouldComponentUpdate(nextProps) {
        const { locale: currentLocale } = this.props;
        const { locale: nextLocale } = nextProps;

        if (currentLocale === nextLocale) {
            return false;
        }

        return true;
    }

    render() {
        const { children, localeChange, locale } = this.props;

        return <Button onClick={() => localeChange(locale)}>{children}</Button>;
    }
}
