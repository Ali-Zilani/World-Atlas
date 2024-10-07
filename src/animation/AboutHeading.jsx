import { useTypewriter, Cursor } from 'react-simple-typewriter';

export const AboutHeading = () => {
    const [text] = useTypewriter({
        words: ['Excite Us', 'Inspire Us','Define Us','Connect Us'],
        loop: true, // This enables the loop
        typeSpeed: 150,
        deleteSpeed: 120,
    });

    return (
        <h2 className="container-title" style={{ margin: '50px' }}>
            Explore the Facts That,{' '}
            <span style={{ fontWeight: 'bold', color: 'gold' }}>
                {text}
            </span>
            <span style={{ color: 'gold' }}>
                <Cursor cursorStyle='|' />
            </span>
        </h2>
    );
};
