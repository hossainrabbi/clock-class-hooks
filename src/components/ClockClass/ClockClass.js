import React from 'react';
import { Button } from '../styles/Element.styles';
import ChangeClock from './ChangeClock';

export default class Clock extends React.Component {
    state = {
        date: new Date(),
        locale: 'en-US',
        stopBtn: false,
    };

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({ date: new Date() });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    componentDidUpdate() {
        this.stopeClock = () => {
            clearInterval(this.interval);
            this.setState({
                stopBtn: true,
            });
        };
    }

    startClock = () => {
        this.interval = setInterval(() => {
            this.setState({ date: new Date() });
        }, 1000);

        this.setState({
            stopBtn: false,
        });
    };

    handleChangeClock = (locale) => {
        this.setState({
            locale,
        });
    };

    render() {
        const { date, locale, stopBtn } = this.state;

        return (
            <div>
                <h3>Class Component</h3>
                <hr />
                <h1>{date.toLocaleTimeString(locale)}</h1>
                <div>
                    <ChangeClock
                        localeChange={this.handleChangeClock}
                        locale={locale === 'en-US' ? 'bn-BD' : 'en-US'}
                    >
                        {locale === 'en-US' ? 'ঘড়ি পরিবর্তন' : 'Change Clock'}
                    </ChangeClock>
                    <Button
                        onClick={stopBtn ? this.startClock : this.stopeClock}
                    >
                        {stopBtn ? 'Start Clock' : 'Stop Clock'}
                    </Button>
                </div>
            </div>
        );
    }
}
