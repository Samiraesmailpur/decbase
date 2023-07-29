let btnContainer = document.querySelector('.services__btn-box');
let postContainer = document.querySelector('.services__content');
let users = [];

async function fetchUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const fetchUsers = await response.json();
    users = fetchUsers.slice(0, 3);
    return users;
  } catch (error) {
    console.error(error);
  }
}

async function fetchPosts(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error(error);
  }
}

async function fetchPostsForAllUsers(users) {
  try {
    const postsForAllUsers = await Promise.all(
      users.map(user => fetchPosts(user.id).then(posts => posts[0]))
    );
    return postsForAllUsers;
  } catch (error) {
    console.error(error);
  }
}

async function createPostsForAllUsers() {
  const users = await fetchUsers();
  const postsForAllUsers = await fetchPostsForAllUsers(users);
  createPost(postsForAllUsers);
}

function createPost(posts) {
  postContainer.innerHTML = '';
  posts.slice(0, 3).forEach(item => {
    postContainer.innerHTML += `<div class="services__block"><p class="services__text">${item.title}</p><p class="services__desc">${item.body}</p></div>`;
  });
}

const createUserBtn = user =>
  `<button class="services__btn" data-id="${user.id}">${user.name}</button>`;

btnContainer.addEventListener('click', e => {
  if (e.target.classList.contains('services__btn')) {
    if (e.target.classList.contains('services__btn-all')) {
      createPostsForAllUsers();
    } else {
    }

    let userId = e.target.dataset.id;
    console.log(userId);
    fetchPosts(userId).then(post => createPost(post));
  }
});

fetchUsers().then(() => {
  users.forEach(item => {
    btnContainer.insertAdjacentHTML('beforeend', createUserBtn(item));
  });
});

createPostsForAllUsers();
