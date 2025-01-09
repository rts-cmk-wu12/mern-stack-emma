import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

export default function Index() {
    const [posts, setPosts] = useState([]);

    const style = {
        h1: {
            textAlign: 'center',
            padding: '1rem',
        },
        div: {
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            justifyContent: 'center',
            padding: '2rem',
        }
    }

    useEffect(() => {
  
      async function fetchData() {
  
        const response = await fetch('/api/Posts');
        const data = await response.json();
        //console.log(data)
        setPosts(data);
      }

      fetchData();
    }, [])
  
    return (
      <>
        <h1 style={style.h1}>Blogposts</h1>
        <div style={style.div}>
            {posts.map((post, index) =>
            <PostCard key={index} post={post}/>
            )}
        </div>
      </>
    )
  }