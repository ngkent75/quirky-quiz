import useToken from '../utils/useToken';
import Login from '../components/Login/Login';

const Profile = () => {
    const { token, setToken } = useToken();

    if (!token) {
        return <Login setToken={setToken} />;
    }

    return <h1>Profile</h1>
};

export default Profile;