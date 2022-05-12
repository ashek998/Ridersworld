import React, { Component } from 'react';
import Photowall from './Photowall';
import Title from './Title';

const posts = [
    {
        id: "0",
        description: "RIDER 1",
        imageLink: "https://cdn-1.motorsport.com/images/amp/0Rrz9wZ0/s1200/fabio-quartararo-yamaha-factor.jpg"
    },
    {
        id: "1",
        description: "RIDER 2",
        imageLink: "https://cdn-1.motorsport.com/images/amp/0k7DEOl0/s1200/miguel-oliveira-red-bull-ktm-f.jpg"
            
    }
        
        ]

class Main extends Component {
    render() {
        return (
            <div>
                <Title title={"Riders World"} />
                <Title subtitle={"The 'Ride And Pride Motoholics' Group"}/>
                <Photowall posts={posts}/>
            </div>
        )
    }
}

export default Main;