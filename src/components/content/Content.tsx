import React, { useEffect, useRef } from "react";

import "./Content.css";
import "../video/Video.css";

import videos from "../../data/videos.json";
import { Video as VideoModel } from "../../models/video";
import Video from "../video/Video";

// import cards from "../../data/cards.json"
// import { Card as CardModel } from "../../models/ card";
// import Card from "../card/Card"

import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import IconButton from "../iconButton/IconButton";

const classes = [
  "video-left-car",
  "video-center-car",
  "video-right-car",
];


export default function Content() {
  const slideShowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (slideShowRef.current) {
      for (let i = 0; i < 3; i++) {
        const element = createVideoElement(videos[i]);
        element.classList.add(classes[classes.length - 1 - i]);
        slideShowRef.current.children[0].insertAdjacentElement(
          "afterend",
          element
        );
      }
    }
  }, []);

  // const element = createCardElement(cards);
  // element.classList.add(classes[classes.length - 1 - i]);
  // slideShowRef.current.children[0].insertAdjacentElement(
  //   "afterend",
  //   element
  // );




  //THIS FUNCTIONS WILL CREATE ALL THE ELEMENTS NEEDED TO THE CHANNEL, CAROUSEL AND IS SIDE MENU
  function createVideoElement(video: VideoModel) {
    const element = document.createElement("div");
    element.className = "video video-right";

    const videoElement = document.createElement("video");
    videoElement.src = video.video;
    videoElement.controls = true;

    const sideMenuElement = document.createElement("div");
    sideMenuElement.className = "side-menu";

    const imageElement = document.createElement("img");
    imageElement.className = "profile-picture";
    imageElement.src = video.image;

    const usernameElement = document.createElement("span");
    usernameElement.className = "username";
    usernameElement.innerHTML = video.username;

    const categoryElement = document.createElement("span");
    categoryElement.className = "category";
    categoryElement.innerHTML = video.category;

    const watchersElement = document.createElement("span");
    watchersElement.className = "watchers";
    watchersElement.innerHTML = "58 viewers";

    const tagsElement = document.createElement("div");
    tagsElement.className = "tags";
    video.tags.forEach((t) => {
      const buttonElement = document.createElement("button");

      buttonElement.className = "button tertiary-button";
      buttonElement.innerHTML = t;

      tagsElement.appendChild(buttonElement);
    });

    const descriptionElement = document.createElement("span");
    descriptionElement.className = "description";
    descriptionElement.innerHTML = video.description;

    element.appendChild(videoElement);
    element.appendChild(sideMenuElement);

    sideMenuElement.appendChild(imageElement);
    sideMenuElement.appendChild(usernameElement);
    sideMenuElement.appendChild(categoryElement);
    sideMenuElement.appendChild(watchersElement);
    sideMenuElement.appendChild(tagsElement);
    sideMenuElement.appendChild(descriptionElement);

    return element;

  }

   //THIS FUNCTIONS WILL CREATE ALL THE ELEMENTS NEEDED TO THE CARD
  //  function createCardElement(card: CardModel) {
  //   const element = document.createElement("div");
  //   element.className = "card card-right";

  //   const cardElement = document.createElement("card");
  //   cardElement.src = card.card;
  //   cardElement.controls = true;

  //   const tagsMenuElement = document.createElement("div");
  //   tagsMenuElement.className = "tags-menu";

  //   const categoryElement = document.createElement("span");
  //   categoryElement.className = "category";
  //   categoryElement.innerHTML = card.category;

  //   const watchersElement = document.createElement("span");
  //   watchersElement.className = "watchers";
  //   watchersElement.innerHTML = "58 viewers";

  //   const tagsElement = document.createElement("div");
  //   tagsElement.className = "tags";
  //   card.tags.forEach((t) => {
  //     const buttonElement = document.createElement("button");

  //     buttonElement.className = "button tertiary-button";
  //     buttonElement.innerHTML = t;

  //     tagsElement.appendChild(buttonElement);
  //   });


  //   element.appendChild(cardElement);
  //   element.appendChild(tagsMenuElement);

  //   tagsMenuElement.appendChild(categoryElement);
  //   tagsMenuElement.appendChild(watchersElement);
  //   tagsMenuElement.appendChild(tagsElement);

  //   return element;

  // }

  

    //THIS FUNCTION CONTROLS THE ANIMATION ON THE VIDEO CAROUSEL
    function previous() {
      
    //THE CAROUSEL GOES THIS WAY <-
    if (slideShowRef.current) {
      const children = slideShowRef.current.getElementsByClassName("video");
      if (children) {
        const lastChild = children[children.length - 1];
        //REMOVING LAST ELEMENT FROM THE CAROUSEL
        slideShowRef.current.removeChild(lastChild);

        for (let i = 0; i < children.length; i++) {
          const currentChild = children[i];

          for (let j = classes.length - 1; j >= 0; j--) {
            if (currentChild.classList.contains(classes[j])) {
              currentChild.classList.remove(classes[j]);
              currentChild.classList.add(classes[j + 1]);
            }
          }
        }
        //WILL CREATE A NEW VIDEO IN CAROUSEL
        const newChild = createVideoElement(videos[0]);
        newChild.classList.add(classes[0]);
        slideShowRef.current.children[0].insertAdjacentElement(
          "afterend",
          newChild
        );
      }
    }
  }
 

  function next() {
    //THE CAROUSEL GOES THIS WAY ->
    if (slideShowRef.current) {
      const children = slideShowRef.current.getElementsByClassName("video");
      if (children) {
        const firstChild = children[0];
        //REMOVING LAST ELEMENT FROM THE CAROUSEL
        slideShowRef.current.removeChild(firstChild);

        for (let i = 0; i < children.length; i++) {
          const currentChild = children[i];

          for (let j = 0; j < classes.length; j++) {
            if (currentChild.classList.contains(classes[j])) {
              currentChild.classList.remove(classes[j]);
              currentChild.classList.add(classes[j - 1]);
            }
          }
        }
        //WILL CREATE A NEW VIDEO IN CAROUSEL
        const newChild = createVideoElement(videos[0]);
        newChild.classList.add(classes[classes.length - 1]);
        slideShowRef.current.children[
          slideShowRef.current.children.length - 1
        ].insertAdjacentElement("beforebegin", newChild);
      }
    }
  }
  return (
    //VIDEO CAROUSEL BUTTONS
    <div id="content">
      <div ref={slideShowRef} className="video-slideshow">
        <IconButton onClick={previous} Icon={ChevronLeft} />
        <IconButton onClick={next} Icon={ChevronRight} />
      </div>

      {/*CHANNEL VIDEOS */}
      <div className="channels"> 
        <div className="videos">
          <Video video={videos[0]} />
          <Video video={videos[0]} />
          <Video video={videos[0]} />
        </div>
      </div>
    </div>

    
  );
}