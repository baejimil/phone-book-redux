import React, { useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

const SearchBox = () => {

  const dispatch = useDispatch();

  const [inputWord, setInputWord] = useState("");

  const searchName=(event)=>{
    event.preventDefault();
    dispatch({type: "SEARCH_NAME" , payload: {inputWord}})
  }

  return (
    <form onSubmit={searchName}>
      <Row>
          <Col lg={10}>
              <Form.Control type="text" placeholder="Enter name" onChange={(event)=>setInputWord(event.target.value)} />
          </Col>
          <Col lg={2}>
              <Button type='submit'>Search</Button>
          </Col>
      </Row>
    </form>
  )
}

export default SearchBox
