var form = document.querySelector("#Form")

form.addEventListener('submit',function(e){
    e.preventDefault()
    var search = document.querySelector("#search").value
    var original = search.split(' ').join('')
    fetch(`https://api.github.com/users/${original} `)
    .then((Result)=> Result.json())
    .then((data)=> {
        document.querySelector('.cardyy').innerHTML =`
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src=${data.avatar_url} alt="There is no avatar">
        <div class="card-body">
          <h5 class="card-title">${data.login}</h5>
          <p class="card-text">Name : ${data.name} <br> Bio : ${data.bio}
           <br>
           Twitter username : ${data.twitter_username}
           <br>
           Company : ${data.company}
           <br>
           Email : ${data.email}
           <br>
           Followers : ${data.followers}
           <br>
           Following : ${data.following}
           <br>
           Created account at : ${data.created_at}
           </p> 
          <br> 
          <a href="${data.html_url}" target="_blank" class="btn btn-primary">Profile in Github</a>
        </div>
        `
      
        if(data.message === "Not Found"){
            document.querySelector('.cardyy').innerHTML = `
            <h3>User not found </h3>
            `
        }
    })
})