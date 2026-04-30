import {Wrapper} from './components/wrapper';
import {Header} from './components/header';
import { BotBlock } from './components/bot-block';
import {InfoBlock} from './components/info-block/index';
import {HowBlock} from './components/how-block/index';
import { useRef } from 'react';
import { Footer } from './components/footer';

function App() {
    const infoBlockRef = useRef();
    const howBlockRef = useRef();

    const handleScrollToInfo = () => {
        infoBlockRef.current.scrollIntoView({behavior: 'smooth'});
    }

    const handleScrollToHow = () => {
        howBlockRef.current.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <Wrapper>
            <Header onScrollToInfo={handleScrollToInfo} onScrollToHow={handleScrollToHow}/>
            <BotBlock />
            <InfoBlock wrapperRef={infoBlockRef}/>
            <HowBlock wrapperRef={howBlockRef}/>
            <Footer />
        </Wrapper>     
    )
}

export default App;
