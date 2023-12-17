import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const useSpeechToText = () => {
    const { transcript, listening } = useSpeechRecognition();

    const toggleListening = () => {
        if (listening) {
            SpeechRecognition.stopListening();
            console.log("listening:", listening);
        } else {
            SpeechRecognition.startListening({ language: 'ko-KR', continuous: true });
            console.log("start listening:", listening);
        }
    }

    return { transcript, listening, toggleListening };
};

export default useSpeechToText;