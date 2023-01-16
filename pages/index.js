import { useState, useEffect } from "react";

async function fetchPost(){
  //fetch post from database
  return{
    'title' : 'Post Title',
    'content' : 'Post Content',
    'authorId': 1
  };
}

async function fetchAuthor(id){

  return {
    'name' : 'Author Name'
  };
}

export default function Home() {
  const [loadingPost, setLoadingPost] = useState(true);
  const [postError, setPostError] = useState(null);
  const [post, setPost] = useState(null);

  const [loadingAuthor, setLoadingAuthor] = useState(true);
  const [authporError, setAuthporError] = useState(null);
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const post = await fetchPost();
        setPost(post);
      } catch (err) {
        setPostError(err);
      } finally {
        setLoadingPost(false);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if(!post) return;

      const author = await fetchAuthor(post.authorId);
      setAuthor(author); 
    })
  }, [post]);

  return (
    <>
      {post?.title}
      {author?.name}
    </>
  )
}
