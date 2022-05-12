import React, { Component } from 'react';
import Photowall from './Photowall';
import Title from './Title';

const posts = [
    {
        id: "0",
        descripton: "Race events",
        imageLink: "https://cdn-1.motorsport.com/images/amp/0k7DEOl0/s1200/miguel-oliveira-red-bull-ktm-f.jpg"
    },
    {
        id: "1",
        descripton: "Long Ride events",
        imageLink: "https://cdni.autocarindia.com/ExtraImages/20180301062830_RE-Thunderbird-500X-side.jpg"
            
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