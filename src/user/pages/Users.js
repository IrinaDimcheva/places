import UsersList from "../components/UsersList"

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Ira Dimcheva',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;