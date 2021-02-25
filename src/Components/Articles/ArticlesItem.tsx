import React from 'react';

export interface ArticlesItemProps { }

const ArticlesItem: React.FC<ArticlesItemProps> = () => {
  return (
    <div className="flex m-5 w-3/4 p-2 border-4 border-custom-contentBlue rounded cursor-pointer hover:opacity-80 bg-custom-darkBlue justify-self-start">
      <div className="w-1/5 p-2 rounded">
        <img
          src="/avatar.jpg"
          alt="example-article"
          className="rounded border-yellow-400 border-2"
        />
      </div>
      <div className=" flex  flex-col font-bold w-4/5 text-white p-2">
        <div className="text-3xl pb-1 border-b-2 border-custom-contentBlue">
          Example item
        </div>
        <div className="text-xl flex-1 border-b-2 border-custom-contentBlue">
          Example short content
        </div>
        <div className="text-xs text-custom-contentBlue">01/01/1900</div>
      </div>
    </div>
  );
};

export default ArticlesItem;
