import axios from "axios";

const BASE_URL = "https://polite-lizard-temple.glitch.me/users/";

export let DeleteHandler = async (
  userId,
  usersList,
  setusersList,
  setisDelete
) => {
  try {
    const response = await fetch(`${BASE_URL}${userId}`, {
      method: "DELETE",
      headers: {
        Accept: "application.json",
        "Content-Type": " application/json",
      },
    });
    const remainingUser = usersList.filter((user) => user.id !== userId);
    setusersList(remainingUser);
    setisDelete(false);
  } catch (error) {
    console.log(error);
  }
};


