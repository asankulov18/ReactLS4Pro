import { useEffect, useState } from "react";
import Error from "./pages/Error";
import MainPage from "./pages/MainPage";

const App = () => {
    const [users, setUsers] = useState(null);
    const [page, setPage] = useState('');

    const user = {
        firstName: 'john',
        lastName: 'johns',
    };
    

    useEffect(() => {
        if (users === null) {
            const firstName = prompt('Enter your name').toLowerCase();
            const lastName = prompt('Enter your last name').toLowerCase();

            const newUser = { firstName, lastName };
            setUsers(newUser);


            if (firstName === user.firstName && lastName === user.lastName) {
                setPage('mainPage');
            } else {
                setPage('errorPage');
            }
        }
    }, []);


    if (!page) {
        return null;
    }

    return <div>{page === 'mainPage' ? <MainPage/> : <Error/>}</div>;
};

export default App;