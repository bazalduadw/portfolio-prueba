import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Title from './Title'

import Dreamweaver from '../images/skills/Dreamweaver.png';
import Illustrator from '../images/skills/Illustrator.png';
import InDesign from '../images/skills/InDesign.png';
import Lightroom from '../images/skills/Lightroom.png';
import Photoshop from '../images/skills/Photoshop.png';
import PremierPro from '../images/skills/PremierPro.png';

function Skills(){

    return (
        <section id="skills">
            <Container>
                <div className="skills-wrapper">
                    <Title title="Skills"/>

                    <Row>
                        {/* lg={2} sm={6} */}
                        <Col >
                            <img className="image" src={Dreamweaver} alt="Dreamweaver"/>
                        </Col>
                        <Col >
                            <img className="image" src={Illustrator} alt="Illustrator"/>
                        </Col>
                        <Col >
                            <img className="image" src={Photoshop} alt="Photoshop"/>
                        </Col>
                        <Col >
                            <img className="image" src={PremierPro} alt="PremierPro"/>
                        </Col>
                        <Col >
                            <img className="image" src={InDesign} alt="InDesign"/>
                        </Col>
                        <Col >
                            <img className="image" src={Lightroom} alt="Lightroom"/>
                        </Col>
                        {/* <Col >
                            <img className="image" src={github} alt="GitHub"/>
                        </Col> */}
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default Skills;