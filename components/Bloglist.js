import React from 'react'
import Link from 'next/link'
import ScrollAnimation from 'react-animate-on-scroll';
import PropTypes from 'prop-types'


const Post = props => {
  const { userId, id, title, body, author } = props
  return (
    <React.Fragment>
      <Link href="/blog/[id]" as={'/blog/' + id}>
        <h3 className="blog-title">{title}</h3>
      </Link>
      <Link href="/users/[id]" as={'/users/' + userId}>
        <p className="blog-author">By {author} </p>
      </Link>
    </React.Fragment>
  )

}

const Bloglist = props => {
  const { posts, users } = props

  return (
    <ul className="blog-list">
      { posts.map((post) => {

        const { title, id, userId, body } = post
        const author = users.find(user => user.id === userId)
        const authorName = author ? author.name : null
        return (
          <ScrollAnimation key={id} animateIn="fadeIn" animatePreScroll={true} >   
          <li className="blog-list-item" >
            <Post
              title={title}
              userId={userId}
              body={body}
              id={id}
              author={authorName}
            />
          </li>
          </ScrollAnimation>
        )
      }
      )}
    </ul>
  )
}

Bloglist.propTypes = {
  posts: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired
}

Post.propTypes = {
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string
}

export default Bloglist