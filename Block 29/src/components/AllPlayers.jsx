import { useEffect, useState } from "react";
import { deletePlayer, fetchAllPlayers } from "../API";
import { Link, useNavigate } from "react-router-dom";

const AllPlayers = () => {
const navigate = useNavigate();
const [allPlayers, setAllPlayers] = useState(null);
useEffect(() => {
    async function getAllPlayers() {
    const response = await fetchAllPlayers();
    console.log(response)
    setAllPlayers(response);
    }
    getAllPlayers();
}, []);
async function handleDelete(id) {
    await deletePlayer(id);
    const response = await fetchAllPlayers();
    console.log(response)
    setAllPlayers(response);
    navigate("/");
}
console.log(allPlayers);
return (
    <div>
    <table>
        <thead>
        <tr>
            <th>Player</th>
            <th>Name</th>
            <th>Breed</th>
            <th>Status</th>
            <th>Delete</th>
        </tr>
        </thead>
        <tbody>
        {allPlayers ? (
            allPlayers.map((player) => (
            <>
                <tr key={player.id}>
                <td>
                    <img src={player.imageUrl} alt="" />
                </td>
                <Link to={'/${player.id}'}>
                    <td>{player.name}</td>
                </Link>
                <td>{player.breed}</td>
                <td>{player.status}</td>
                <td>
                    <button onClick={() => handleDelete(player.id)}> Delete </button>
                </td>
                </tr>
            </>
            ))
        ) : (
            <tr>
            <td>Loading</td>
            </tr>
        )}
        </tbody>
    </table>
    </div>
);
};

export default AllPlayers;