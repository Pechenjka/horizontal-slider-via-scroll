import React from "react";
import Styles from "./style.module.scss";
import { ArticleComponent } from "./components/ArticleComponent";
import { Card } from "./components/ArticleComponent/components/Card";
import { articles } from "../../assets/config";
import { SliderComponent } from "./components/SliderComponent";

export const Main: React.FC = () => {
  return (
    <main className={Styles.main}>
      <ArticleComponent title="ut aliquip ex ea commodo consequat">
        {articles.articleOnSlider.map((card) => {
          return (
            <Card key={card.id} title={card.title} text={card.text} image={card.imageDesktop} reverse={card?.reverse} />
          );
        })}
      </ArticleComponent>
      <SliderComponent />
      <ArticleComponent title="ut aliquip ex ea commodo consequat">
        {articles.articleUnderSlider.map((card) => {
          return (
            <Card key={card.id} title={card.title} text={card.text} image={card.imageDesktop} reverse={card?.reverse} />
          );
        })}
      </ArticleComponent>
    </main>
  );
};
