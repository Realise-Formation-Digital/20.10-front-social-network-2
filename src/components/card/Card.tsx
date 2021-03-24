import { Grid } from "@material-ui/core";
import { Card as CardModel } from "../../models/ card";
import Button from "../button/Button";

import "./Card.css";

interface Props {
  card: CardModel;
}


export default function Card({ card }: Props) {

    return (
      
      //CATEGORY CARD
      <Grid container className="card card-container">
        <div className="card-wrapper">
        <div className="left-bar-side"></div>
          <div className="bottom-bar-side"></div>
          <img alt="category" className="category-picture" src={card.card} />
          </div>
          <div className="tags-menu">
          <span className="category">{card.category}</span>
           {card.tags.map((t) => {
              return <Button tertiary label={t} />;
            })}
          </div>
        
      </Grid>
    );
  } 