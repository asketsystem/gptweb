import React from 'react';

import { Blog, Features, Footer, Header, Possibility, WhatGPTWEB } from './containers';
import { Brand, Cta, Navbar } from './components';

const App = () => {
    return (
        <div className="App">
            <div className="gradient_bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPTWEB />
            <Features />
            <Possibility />
            <Cta />
            <Blog />
            <Footer />
        </div>
    )
}

export default App
