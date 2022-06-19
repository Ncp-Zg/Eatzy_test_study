
import React, { useEffect, useRef, useState } from "react";
import { Container, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { update_post } from "../redux/features/postSlice";

const PostDetail = () => {

  //Burada ilgili posta tıklandığı anda update_post olarak tanımladığım redux fonsiyonu ile
  // incrementor 1 artırılmakta. Artırıldıktan sonra local storage a kaydedilmekte . bu sayede
  // sayfa yenilense bile görüntülenme sayılarının kaldığı yerden devam ettiği görülecektir.
  //local Storage in elle silinmesi halinde görüntülenme sayıları 0 dan başlayacaktır.

  const { id } = useParams();
  const ref = useRef();

  const dispatch = useDispatch();

  const { post } = useSelector((state) => state);

  useEffect(() => {
    if (post.length !== 1) {
      dispatch(update_post({ post, id }));
    }
  }, [post.length]);

  if (post.length !== 1) {
    localStorage.setItem("postData", JSON.stringify(post));
    const singlePost = post.filter((data) => data.id === id);
    ref.current =singlePost[0];
  }

  return (
    <>
        <Col xs={9} className="p-4 pt-5 ">
      <img
        className="p-3 pt-2"
        src={ref.current?.img}
        width="100%"
        height="600px"
      />
      <Container className="p-5 pt-2">
        <p>
          <b>By</b>:{ref.current?.author}, <b>at</b> {ref.current?.postedAt}
        </p>
        <h4>{ref.current?.title}</h4>
        <p>{ref.current?.description}</p>
        <div className="d-flex justify-content-end">
          <div className="d-flex align-items-center">
            <b className="me-2">{ref.current?.incrementor}</b>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-eye"
              viewBox="0 0 16 16"
            >
              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
            </svg>
          </div>
        </div>
      </Container>
    </Col>
    </>
    
    
  );
};

export default PostDetail;
