export const APIURL =
  "https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-ET-WEB-PT-A/players";

export async function fetchAllPlayers() {
  try {
    const response = await fetch(APIURL);
    const result = await response.json();
    console.log(result);
    return result.data.players;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchSinglePlayer(id) {
  console.log(id);
  try {
    const response = await fetch(
      `https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-ET-WEB-PT-A/players/${id}`
    );
    const result = await response.json();
    console.log(result);
    return result.data.player;
  } catch (error) {
    console.log(error);
  }
}


export async function createNewPlayer(name, breed, status, imageUrl) {
  try {
    const response = await fetch(
      "https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-ET-WEB-PT-A/players",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          breed: breed,
          status: status,
          imageUrl: imageUrl,
        }),
      }
    );
    const result = await response.json();
    console.log(result);

    if (!response.ok) {
      console.error("Error creating a new player:", result);
    }
  } catch (err) {
    console.error(err);
  }
}



export async function deletePlayer(id) {
  try {
    const response = await fetch(
      `https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-ET-WEB-PT-A/players/${id}`,

      {
        method: "DELETE",
      }
    );
    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
