import React from 'react';
import Header from '../../../components/header'
import Footer from '../../../components/footer'
import { Container } from './styles';

export default function defaultLayout({ children }) {
    return (
        <Container>
            <Header/>
            { children }
            <Footer/>
        </Container>
    );
}
