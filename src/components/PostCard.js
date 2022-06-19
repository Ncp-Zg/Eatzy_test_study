import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import {useNavigate} from "react-router-dom"

const PostCard = ({data}) => {

    const navigate = useNavigate();

  return (
    <Container style={{width:"50%"}} className="mb-4">
    <Card className="cardComponent" onClick={()=>{navigate(`/list/${data.id}`)}}>
      <Card.Img
        style={{minHeight:"430px"}}
        variant="top"
        src={data.img}
      />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
          {data.description.slice(0,75)}...
        </Card.Text>
      </Card.Body>
    </Card></Container>
  );
};

export default PostCard;
