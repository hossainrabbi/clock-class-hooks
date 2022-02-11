import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Button } from '../styles/Element.styles';
import ChangeClockWithHooks from './ChangeClockWithHooks';

export default function ClockHooks() {
    const [date, setDate] = useState(new Date());
    const [locale, setLocale] = useState('en-US');
    const [stopBtn, setStopBtn] = useState(false);
    const buttonRef = useRef();

    useEffect(() => {
        buttonRef.current = setInterval(() => setDate(new Date()), 1000);

        return () => clearInterval(buttonRef.current);
    }, []);

    const handleClockChange = useCallback((locale) => {
        setLocale(locale);
    }, []);

    const stopClock = () => {
        clearInterval(buttonRef.current);
        setStopBtn(true);
    };

    const startClock = () => {
        buttonRef.current = setInterval(() => setDate(new Date()), 1000);
        setStopBtn(false);
    };

    return (
        <div>
            <h3>Function Component - (Hooks)</h3>
            <hr />
            <h1>{date.toLocaleTimeString(locale)}</h1>
            <div>
                <ChangeClockWithHooks
                    clockChange={handleClockChange}
                    locale={locale === 'en-US' ? 'bn-BD' : 'en-US'}
                >
                    {locale === 'en-US' ? 'ঘড়ি পরিবর্তন' : 'Change Clock'}
                </ChangeClockWithHooks>
                <Button onClick={stopBtn ? startClock : stopClock}>
                    {stopBtn ? 'Start Clock' : 'Stop Clock'}
                </Button>
            </div>
        </div>
    );
}
