import React from 'react';
import '../styles/MainContent.css';
import CVPreview from './CVPreview';

class MainContent extends React.Component {
    render() {
        return (
            <div id='MainContent'>
                <CVPreview />
            </div>
        );
    };
}

export default MainContent;