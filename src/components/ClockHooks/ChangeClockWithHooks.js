import React from 'react';
import { Button } from '../styles/Element.styles';

function ChangeClockWithHooks({ children, clockChange, locale }) {
    return <Button onClick={() => clockChange(locale)}>{children}</Button>;
}

export default React.memo(ChangeClockWithHooks);
