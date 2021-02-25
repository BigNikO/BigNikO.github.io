import React from 'react';
import ArticlesItem from './ArticlesItem';

export interface ArticlesProps {}

const Articles: React.FC<ArticlesProps> = () => {
  return (
    <>
      {[...Array(10)].map((x) => (
        <ArticlesItem key={x} />
      ))}
    </>
  );
};

export default Articles;
