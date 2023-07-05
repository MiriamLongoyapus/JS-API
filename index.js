
const getUsers=()=>{
    return fetch('https://dummyjson.com/users')
    .then(response=>response.json())
    .then(response=>response)
    .catch(error=>error)

}
const users = getUsers()

const displayUsers = async()=>{
    let user = await users;
    console.log({user});
    // user.users.length>0
    // !user?
    // userContainer.innerHTML='Loading':

    let userContainer = document.getElementById('users');
    user.users.map(item=>{
    let div = document.createElement('div');
    div.className='person'
    let img = document.createElement('img');
    let name = document.createElement('h2');
    let userName = document.createElement('p');

   
        img.src=item.image;
        name.innerHTML = `${item.firstName} ${item.lastName}`;
        userName.innerHTML = item.username;
        div.appendChild(img);
        div.appendChild(name);
        div.appendChild(userName);
        // console.log({item});
        // userContainer.textContent='hello'
        userContainer.appendChild(div);

    })
    // :userContainer.innerHTML='Loading'
}
displayUsers()

