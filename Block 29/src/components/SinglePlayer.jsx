import { useEffect, useState } from "react";
import { fetchSinglePlayer } from "../API";
import { useParams, useNavigate } from "react-router-dom";



const SinglePlayer = () => {
  const [param1, setParam1] = useState("");
  const [singlePlayer, setSinglePlayer] = useState(null);
  const navigate = useNavigate();

  let { id } = useParams();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const paramValue = params.get("param1");
    setParam1(paramValue);
    async function getSinglePlayer() {
      const response = await fetchSinglePlayer(id);
      console.log(response);
      setSinglePlayer(response);
    }

    getSinglePlayer();
  }, []);

  return (
    <div>
      SinglePlayer {id}

      <table >
        <thead>
          <tr>
            <th>Player</th>
            <th>Name</th>
            <th>Breed</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
            <>
          <tr>
            <td>
              <img src={singlePlayer?.imageUrl} alt="" />
            </td>

            <td>{singlePlayer?.name}</td>
            <td>{singlePlayer?.breed}</td>
            <td>{singlePlayer?.status}</td>
            <td>edit</td>
            <td>
              <button> Delete </button> 
            </td>
          </tr>
            </>
        </tbody>
      </table> 
    </div>
  );
};

export default SinglePlayer;
