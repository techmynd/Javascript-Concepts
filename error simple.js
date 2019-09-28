let createBlog = (title,body) => {
  if(!title){
    throw new Error('Title is required');
  }
  if(!body){
    throw new Error('Body is required');
  }
  return `${title} - ${body}`;
  // return alert(`${title} - ${body}`);
}
createBlog("my title", "blog body");