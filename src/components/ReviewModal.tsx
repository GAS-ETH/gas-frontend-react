import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PImg from "./../assets/poap.jpeg";

export const ReviewModal = () => {
  const [poapData, setPoapData] = useState();
  const [reviewsOfPoapList, setreviewsOfPoapList] = useState();
  // useEffect(() => {
  //   //
  // }, []);
  // DOM
  const ReviewContainer = styled.div`
    width: 100vw;
    height: auto;
  `;

  const PoapContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const PoapImgContainer = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
  `;

  const PoapImg = styled.img.attrs((props: { img: string }) => ({
    src: props.img || PImg,
  }))`
    width: 100%;
    height: 100%;
  `;

  const PoapInfoContainer = styled.div``;
  const PoapInfoText = styled.p``;
  const ReviewPoap = styled.div``;
  const ReviewButton = styled.button``;
  // list
  const PoapReviewsListContainer = styled.div``;

  const PoapReviewList = styled.div`
    width: 100%;
    padding: 30px;
  `;
  const PoapReview = styled.div`
    border: 1px solid black;
    border-radius: 10px;
  `;

  const ReviwerLogo = styled.div`
    width; 40px;
    height: 40px;
    border-radius: 50%;
  `;
  const RLogo = styled.img.attrs((props: { img: string }) => ({
    src: props.img || "",
  }))`
    width: 100%;
    height: 100%;
  `;
  const ReviewerName = styled.p`
    font-size: 12px;
  `;
  const ReviewMessageContainer = styled.div``;

  const ReviewMessage = styled.p``;

  return (
    <ReviewContainer>
      <PoapContainer>
        <PoapImgContainer>
          <PoapImg></PoapImg>
        </PoapImgContainer>
        <PoapInfoContainer>
          <PoapInfoText>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit nobis
            voluptatum officiis, quo recusandae perferendis deleniti impedit
            maiores atque inventore provident odio qui sint nisi quia facilis
            excepturi asperiores? Enim?
          </PoapInfoText>
        </PoapInfoContainer>
        <ReviewPoap>
          <ReviewButton>Review</ReviewButton>
        </ReviewPoap>
      </PoapContainer>
      <PoapReviewsListContainer>
        <PoapReviewList>
          <PoapReview>
            <ReviewContainer>
              <ReviwerLogo>
                <RLogo></RLogo>
              </ReviwerLogo>
              <ReviewerName>Melanie</ReviewerName>
            </ReviewContainer>
            <ReviewMessageContainer>
              <ReviewMessage>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum nobis quod quos minima consequatur adipisci cupiditate
                earum officiis dolores rerum et facilis atque, perferendis quas
                nam repudiandae, repellat iure voluptatem.
              </ReviewMessage>
            </ReviewMessageContainer>
          </PoapReview>
        </PoapReviewList>
      </PoapReviewsListContainer>
    </ReviewContainer>
  );
};
