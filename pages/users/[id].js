import { useEffect, useState } from 'react';
import Link from 'next/link'
import axios from 'axios';


const User = props => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const result = await axios(
        `https://jsonplaceholder.typicode.com/users/${props.id}`,
      );
      setUser(result.data)
    }

    getUser();
  }, []);

  if (!user) {
    return (
      <h2>Loading...</h2>
    )
  }
  return (
    <div className="container-small">
      <h1>{user.name}</h1>
      <ul className="user-info-list">
        <li className="user-info-list-item">
          Username: {user.username}
        </li>
        <li>
          Email: {user.email}
        </li>
        <li>
          Address:
              <ul>
            <li>{user.address.street}</li>
            <li>{user.address.suite}</li>
            <li>{user.address.city}</li>
            <li>{user.address.zipcode}</li>
          </ul>
        </li>
        <li>
          Phone: <a href={`tel:${user.phone}`}>{user.phone}</a>
        </li>
        <li>
          Website: <a target="_blank" href={`https://${user.website}`}>{user.website}</a>
        </li>
        <li>
          Company: {user.company.name}
        </li>
      </ul>
      <Link href="/">
        <a className="back-link">Back</a>
      </Link>
    </div>
  )
}

User.getInitialProps = ({ query }) => {
  return {
    id: query.id,
  }
}
export default User