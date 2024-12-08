import React from 'react'
import { colors, content2image } from '../../../assets/images/images'
import { Container, Row, Col } from 'react-bootstrap'



export const Ccard = (props) => {

    return (
        <>
            <div
                style={{
                    width: "300px",
                    padding: "20px",
                    borderRadius: "10px",
                    backgroundColor: "white",
                    boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.1)",
                    textAlign: "left",
                    fontFamily: "'Arial', sans-serif"
                }}
            >
                {/* Icon */}
                <div style={{ marginBottom: "15px" }}>
                    <div
                        style={{
                            width: "40px",
                            height: "40px",
                            backgroundColor: colors.color1,
                            borderRadius: "5px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >

                        <span style={{ fontSize: "24px", color: "white" }}>{props.icon}</span>
                    </div>
                </div>

                {/* Title */}
                <h3 style={{ fontSize: "20px", margin: "0 0 10px 0", color: colors.color1 }}>
                    Self-paced Courses
                </h3>

                {/* Description */}
                <p style={{ fontSize: "14px", color: "#757575", margin: "0 0 20px 0" }}>
                    Learn & get certified via online courses
                </p>

                {/* Link */}
                <a
                    href="#"
                    style={{
                        fontSize: "14px",
                        color: colors.color1,
                        fontWeight: "bold",
                        textDecoration: "none",
                    }}
                >
                    Take a look &gt;
                </a>
            </div>
        </>
    )

}



export default function Content2() {


    let carddetail = [{
        icon: <>🏷️</>,
        features: "Self-paced Courses",
        descrption: "Learn & get certified via online courses",
        link: ""
    }]

    const styles = {
        // backgroundColor: "red",
        padding: '2%',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flexWrap:"wrap",
        gap: "10px"
        
        
    }


    return (
        <>
        <section className='content-2-section' >
                <Container style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <Row className='content-2-section-row' >
                        <Col sm={12}  lg={8} className='content3-col'  >
                            <h2 >What TCF Technologys offers you?</h2>
                            <div className='content3'>
                                <div style={styles}>
                                    <Ccard icon={carddetail[0].icon} />
                                    <Ccard icon={carddetail[0].icon} />
                                </div>
                                <div style={styles}>
                                    <Ccard icon={carddetail[0].icon} />
                                    <Ccard icon={carddetail[0].icon} />
                                </div>
                            </div>

                        </Col>

                        <Col lg={4} className='content3-col-1' >
                                
                                    <img src={content2image.image1} alt="" />
                            
                        </Col>
                    </Row>
                </Container>
        </section>

        </>
    )
}
