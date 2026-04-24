import {Wrapper} from './compontents/wrapper';
import {Header} from './compontents/header';
import { BotBlock } from './compontents/bot-block';
import {InfoBlock} from './compontents/info-block/index';
import {HowBlock} from './compontents/how-block/index';
import { useRef } from 'react';
import { Footer } from './compontents/footer';

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
