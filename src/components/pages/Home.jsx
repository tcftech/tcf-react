import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ContactForm from '../ReusableComponents/ContactForm'
import Test from '../ReusableComponents/test'
import SwipeableTextMobileStepper from '../ReusableComponents/Carousel'
import Content1 from '../ReusableComponents/home/Content1'

export default function Home() {
  return (
    <>
       <SwipeableTextMobileStepper/>
       <Content1/>

    </>
  )
}
