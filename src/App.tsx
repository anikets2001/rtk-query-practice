import React, { useState } from "react";
import { useGetPostsQuery, useNewPostMutation } from "./redux/api";
import { PostCard } from "./components/PostCard";

const App = () => {
  const { data: posts, isLoading: postsLoading } = useGetPostsQuery();
  const [newPost] = useNewPostMutation();
  // const { data: comments, isLoading: commentsLoading } = useGetCommentsQuery();

  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  if (postsLoading) return <p>Loading...</p>;
  // if (commentsLoading) return <p>Loading...</p>;

  const submitHandler = (e: any): void => {
    console.log(e);
    e.preventDefault();
    newPost({
      title,
      body,
      userId: Math.random() * 1000,
      id: Math.random() * 1000,
    });
    setTitle("");
    setBody("");
  };
  return (
    <>
      <h1>Post method(mutation)</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>

      <h1>posts</h1>
      <div>
        {posts?.map((item: any) => (
          <PostCard key={item.id} title={item.title} body={item.body} />
        ))}
      </div>
      {/* <h1>comments</h1>
      <div>
        {comments?.map((item: any) => (
          <PostCard key={item.id} title={item.name} body={item.email} />
        ))}
      </div> */}
    </>
  );
};

export default App;
