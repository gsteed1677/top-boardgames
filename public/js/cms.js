const show = (el) => {
  el.style.display = 'block';
};


document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded! 🚀');


  const bodyInput = document.getElementById('body');
  const titleInput = document.getElementById('title');
  const cmsForm = document.getElementById('cms');
  const authorSelect = document.getElementById('author');

  const url = window.location.search;
  let postId;
  let authorId;
  let updating = false;

  const getPostData = (id, type) => {
    const queryUrl =
      type === 'post' ? `/api/posts/${id}` : `/api/authors/${id}`;

    fetch(queryUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log('Success in getting post:', data);

          
          titleInput.value = data.title;
          bodyInput.value = data.body;
          authorId = data.AuthorId || data.id;

          updating = true;
        }
      })
      .catch((err) => console.error(err));
  };

  if (url.indexOf('?post_id=') !== -1) {
    postId = url.split('=')[1];
    getPostData(postId, 'post');
  }

  else if (url.indexOf('?author_id=') !== -1) {
    authorId = url.split('=')[1];
  }


  const handleFormSubmit = (e) => {
    e.preventDefault();

    
    if (
      !titleInput.value.trim() ||
      !bodyInput.value.trim() ||
      !authorSelect.value
    ) {
      return;
    }

    
    const newPost = {
      title: titleInput.value.trim(),
      body: bodyInput.value.trim(),
      AuthorId: authorSelect.value,
    };

    
    if (updating) {
      newPost.id = postId;
      updatePost(newPost);
    } else {
      submitPost(newPost);
    }
  };

  
  cmsForm.addEventListener('submit', handleFormSubmit);

  const submitPost = (post) => {
    fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    })
      .then(() => {
        window.location.href = '/blog';
      })
      .catch((err) => console.error(err));
  };

 
  const renderAuthorList = (data) => {
    console.log('renderAuthorList -> data', data);
    if (!data.length) {
      window.location.href = '/authors';
    }
    if (document.querySelector('.hidden')) {
      show(document.querySelector('.hidden'));
    }

    const rowsToAdd = [];

    data.forEach((author) => rowsToAdd.push(createAuthorRow(author)));

    authorSelect.innerHTML = '';
    console.log('renderAuthorList -> rowsToAdd', rowsToAdd);
    console.log('authorSelect', authorSelect);

    rowsToAdd.forEach((row) => authorSelect.append(row));
    authorSelect.value = authorId;
  };

  
  const createAuthorRow = ({ id, name }) => {
    const listOption = document.createElement('option');
    listOption.value = id;
    listOption.textContent = name;
    return listOption;
  };

  
  const getAuthors = () => {
    fetch('api/authors', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => renderAuthorList(data))
      .catch((err) => console.error(err));
  };

  
  getAuthors();

  const updatePost = (post) => {
    fetch('/api/posts', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    })
      .then(() => {
        window.location.href = '/blog';
      })
      .catch((err) => console.error(err));
  };
});
