import './index.css'


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import project_management from "../../images/project_management.PNG"
import meetings from "../../images/meetings.PNG"
import onboarding from "../../images/onboarding.PNG"
import task from "../../images/task.PNG"
import resource from "../../images/resource.PNG"
import brain from "../../images/brain.PNG"


import React, { Component } from "react";
import Slider from "react-slick";
/* import prevArrow from './prev-arrow.svg';
import nextArrow from './next-arrow.svg'; */



export default class MultipleItems extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 0,           
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div>
                <h5>TRELLO IN ACTION</h5>
                <h1>Workflows for any project, big or small</h1>
                              <Slider {...settings}>
                    <div>
                        <Card>
                            <Card.Img variant="top" src={project_management} />
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <Card.Img variant="top" src={meetings} />
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <Card.Img variant="top" src={onboarding} />
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <Card.Img variant="top" src={task} />
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <Card.Img variant="top" src={brain} />
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <Card.Img variant="top" src={resource} />
                        </Card>
                    </div>
                </Slider>
                
                <div className='parbtn'> <p className='paragraph'>No need to start from scratch. Jump-start your workflow with a proven playbook
                    designed for different teams. Customize it to make it yours.</p>
                    <Button ClassName='btn' variant="outline-primary">Explore all Use Cases</Button>{' '}
                </div>
                
            </div>

        );
    }
}