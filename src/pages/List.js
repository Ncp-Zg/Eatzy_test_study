import React, { useEffect } from "react";
import Navbar from "../components/Navbar"
import {Container} from "react-bootstrap"
import PostCard from "../components/PostCard";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";

//Burada index sayfasında çekilip redux a kaydedilen datayı map leyerek 
//postCard componentine aktardım. props olarak da data yı gönderdim.

const List = () => {

  const {post} = useSelector(state=>state)
  console.log(post)

  return (
    <Container>
      <Helmet>
        <title>
          Post Lists | Eatzy
        </title>
        <meta
          name="description"
          content="Everything you need to know about photography is in here.."
        />
      </Helmet>
      <Navbar />
      <Container className="d-flex flex-wrap mt-5 pt-4 mb-5" >
        {
        post?.map(data=>(
            <PostCard data={data} key={data.id}/>
        ))
      }
      </Container>
      
      
    </Container>
  );
};

export default List;
