import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import '../styles/App.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <MainContent />
                <Footer />
            </div>
        );
    };
}

export default App;