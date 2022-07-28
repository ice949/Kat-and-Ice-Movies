const url2 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lNpU390CCHAJTJVaQl2q/likes';

const getLikes = async (ID, BTN) => {
  const res = await fetch(url2);
  const data = await res.json();
  BTN.innerHTML = data[ID - 1].likes;
  return data;
};

const addLike = async (ID, BTN) => {
  const res = await fetch(url2, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: ID,
    }),
  });
  getLikes(ID, BTN);
  return res;
};

export { addLike, getLikes };