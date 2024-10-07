import { useTypewriter, Cursor } from 'react-simple-typewriter';

export const MainHeading = () => {
    const [text] = useTypewriter({
        words: ['Country by Country', ' Culture by Culture','Mile by Mile'],
        loop: true, // This enables the loop
        typeSpeed: 150,
        deleteSpeed: 120,
    });

    return (
        <h1 className='heading-xl' style={{ margin: '50px' }}>
            Uncover the Wonders of the World,{' '}
            <span style={{ fontWeight: 'bold', color: 'gold' }}>
                {text}
            </span>
            <span style={{ color: 'gold' }}>
                <Cursor cursorStyle='|' />
            </span>
        </h1>
    );
};
