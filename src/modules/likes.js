// const likeDiv = document.querySelector('.like-btn');
const url2 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lNpU390CCHAJTJVaQl2q/likes';


const getLikes = async (ID, BTN) => {
    const res = await fetch(url2);
    const data = await res.json();
    // renderMovie(data);
    BTN.innerHTML = data[ID-1].likes;
    console.log(data);
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
    // const data = await res.json();
    // console.log(res.json);
    getLikes(ID, BTN);
    // return data;
  };


  export default addLike ;