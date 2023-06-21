const Profile = ({ user }: any) => {
  return (
    <div className="profile">
      <h2>Profile</h2>
      <p>Email: {user.email}</p>
      <p>UID: {user.uid}</p>
    </div>
  );
};

export default Profile;
