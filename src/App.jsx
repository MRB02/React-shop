import React, { PureComponent } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css'
import Shops from './components/Shops';


export default class App extends PureComponent {
    render() {
        return ( <>
        
            <Header />
            <Shops />
            <Footer />
            </>
        )
    }
}