import ClockClass from './components/ClockClass/ClockClass';
import ClockHooks from './components/ClockHooks/ClockHooks';
import { ClockContainer } from './components/styles/Element.styles';
import GlobalStyle from './components/styles/GlobalStyle';

function App() {
    return (
        <ClockContainer>
            <GlobalStyle />
            <div>
                <ClockClass />
                <br /> <br />
                <ClockHooks />
            </div>
        </ClockContainer>
    );
}

export default App;
