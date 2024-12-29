import React from "react";

export const PostCard = ({ title, body }: { title: string; body: string }) => {
  return (
    <div>
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  );
};
