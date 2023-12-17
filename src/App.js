import './App.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const App = () => {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    return (
        <div>
            <p>Microphone: {listening ? 'on' : 'off'}</p>
            <button onClick={useSpeechRecognition.start}>Start</button>
            <button onClick={useSpeechRecognition.stop}>Stop</button>
            <button onClick={resetTranscript}>Reset</button>
            <p>{transcript}</p>
        </div>
    );
};

export default App;
