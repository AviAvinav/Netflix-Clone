import React from 'react';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/Header';
import Hero from '../components/Hero';
import { StatusBar, Dimensions } from 'react-native';
import Movies from '../components/Movies';

const item = [
    require('../assets/movie1.jpg'),
    require('../assets/movie2.jpg'),
    require('../assets/movie3.jpg'),
    require('../assets/movie4.jpg'),
]

const Container = styled.ScrollView`
    flex: 1;
    background-color: #000;
`

const Poster = styled.ImageBackground`
    width: 100%;
    height: ${(Dimensions.get('window').height*81)/100}px;
`
const Gradient = styled(LinearGradient)`
    height: 100%;
`

const Home = () => {
    return (
        <>
        <StatusBar translucent backgroundColor='transparent' barStyle='light-content'/>
        <Container>
            <Poster source={require('../assets/poster.jpg')}>
                <Gradient 
                    Locations={[0, 0.2, 0.6, 0.93]}
                    colors={[
                        'rgba(0,0,0,0.5)',
                        'rgba(0,0,0,0)',
                        'rgba(0,0,0,0)',
                        'rgba(0,0,0,1)'
                    ]}
                >
                    <Header />
                    <Hero />
                </Gradient>
            </Poster>
            <Movies label='Recommendations' item={item}/>
            <Movies label='Top 10' item={item}/>
        </Container>
        </>
    )
}

export default Home;