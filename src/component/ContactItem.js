import React from 'react'
import { Col, Row } from 'react-bootstrap'

const ContactItem = ({item}) => {

  return (
    <div>
      <Row>
          <Col lg={1}>
            <img width={50} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV0zscYTnOxutaPDaZ9Un0Ak-y0yR8jw40qA&s' />
          </Col>
          <Col lg={11}>
            <div>
                {item.name}
            </div>
            <div>
                {item.phoneNumber}
            </div>
          </Col>
      </Row>
    </div>
  )
}

export default ContactItem
