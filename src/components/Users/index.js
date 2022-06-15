import { useEffect, useState } from 'preact/hooks';

const Users = () => {

    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchUsers = async () => {
        const res = await fetch("https://reqres.in/api/users");
        const json = await res.json();
        setUsers(json.data)
        console.log(json.data);
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    const serchTermHandler = (e) => {
        setSearchTerm(e.target.value)
    }

    if (users) {
        let userList = users.map(user => <li key={user.id}>{user.first_name + " " + user.last_name }</li>)
        const filteredUser = users.filter(user => user.first_name.includes(searchTerm) || user.last_name.includes(searchTerm))
        const filteredUserList = filteredUser.map(user => <li key={user.id}>{user.first_name + " " + user.last_name }</li>)
        return (
            <div>
                <input type="text" value={searchTerm} onInput = {serchTermHandler} />
                <ul>
                    {searchTerm === '' ? userList : filteredUserList}
                </ul>
            </div>
        )
    }
    return <p>Loading...</p>
}

export default Users;