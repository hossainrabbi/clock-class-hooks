import styled from 'styled-components';

export const ClockContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    h1 {
        font-size: 40px;
        margin-bottom: 15px;
    }
`;

export const Button = styled.button`
    padding: 8px 10px;
    cursor: pointer;
    margin: 0 5px;
    background-color: var(--white-color);
    border: 2px solid var(--dark-color);
    color: var(--dark-color);
`;
