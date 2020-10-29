
import { useState, useEffect } from 'react';
import Head from 'next/head'
import axios from 'axios';
import Bloglist from "../components/Bloglist"


export default function Home() {

  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);


  useEffect(() => {
    const getPosts = async () => {
      const result = await axios(
        'https://jsonplaceholder.typicode.com/posts',
      );
      setPosts(result.data)
    }
    const getUsers = async () => {
      const result = await axios(
        'https://jsonplaceholder.typicode.com/users',
      );
      setUsers(result.data)
    }

    getPosts();
    getUsers();
  }, []);

  return (
    <div>
      <Head>
        <title>Dela Defense Blog Project</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
      </Head>
      <div className="container">
        <h1>Delta Defense Blog Project</h1>
        <Bloglist users={users} posts={posts} />
      </div>
    </div>

  )
}
