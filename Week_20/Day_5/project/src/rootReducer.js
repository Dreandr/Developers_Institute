const initState = {
  posts: [
    {id: '1', title: 'Sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
    {id: '2', title: 'Dolorem eum magni eos aperiam quia', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
    {id: '3', title: 'Ea molestias quasi exercitationem repellat qui ipsa sit aut', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'}
  ]
}

const reducer = (state=initState, action={}) => {
  console.log(action);
  if (action.type === "DELETE_POST"){
    let new_post = state.posts.filter(post => {
      return post.id !== action.id
    })
    return {
      ...state,
      posts: new_post
    }
  }
  return state;
}

export default reducer;
