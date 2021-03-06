import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
export default class Services extends Component {
    state={
        services: [
            {
                icon: <FaCocktail />,
                title: 'free cocktails',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore necessitatibus maxime fuga'
            },
            {
                icon: <FaHiking />,
                title: 'Endless Hiking',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore necessitatibus maxime fuga'
            },
            {
                icon: <FaShuttleVan />,
                title: 'free Shuttle',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore necessitatibus maxime fuga'
            },
            {
                icon: <FaBeer />,
                title: 'Strongest Beer',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore necessitatibus maxime fuga'
            }
        ]
    }
    render() {
        return (
            <div className='services'>
                <Title title='Services' />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className='service'>
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>
            </div>
        )
    }
}

