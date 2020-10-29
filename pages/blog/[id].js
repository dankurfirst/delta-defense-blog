import { useEffect, useState } from 'react';
import Link from 'next/link'
import axios from 'axios';


const Blog = props => {

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const getBlog = async () => {
      const result = await axios(
        `https://jsonplaceholder.typicode.com/posts/${props.id}`,
      );
      setBlog(result.data)
    }
    getBlog()
  }, []);

  if (!blog) {
    return (
      <h2>Loading...</h2>
    )
  }
  return (
    <div className="container-small">
      <h1 className="blog-title">{blog.title}</h1>
      <p>
        {blog.body}
      </p>
      <Link href="/users/[id]" as={'/users/' + blog.userId}>
        <a className="about-author">About The Author</a>
      </Link>
      <Link href="/">
        <a className="back-link">Back</a>
      </Link>
    </div>
  )
}

Blog.getInitialProps = ({ query }) => {
  return {
    id: query.id,
  }
}
export default Blog