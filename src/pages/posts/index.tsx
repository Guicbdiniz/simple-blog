import React from "react";
import { PostsContainer } from "./style";
import { useClientQuery, graphql } from "react-relay";

interface Props {}

const Posts: React.FC<Props> = () => {
  return <PostsContainer></PostsContainer>;
};

export default Posts;
