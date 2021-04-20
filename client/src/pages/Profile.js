import useToken from '../utils/useToken';
import Login from '../components/Login/Login';
import Navigation from '../components/Navigation'
import Header from '../components/Header'

const Profile = () => {
    const { token, setToken } = useToken();

    if (!token) {
        return <Login setToken={setToken} />;
    }

    return (
        <>
            <Navigation />
            <Header />
            <h1>Profile</h1>
        </>
    )
};

export default Profile;