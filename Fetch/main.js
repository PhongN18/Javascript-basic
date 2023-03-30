// Fetch

// Fake API
var postAPI = 'https://jsonplaceholder.typicode.com/posts'

// fetch returns stream ~ luồng dữ liệu
// stream / response - a Promise
fetch(postAPI)
    .then (function(response) {
        return response.json();
        // ~ JSON.parse -> return Javascript
    })
    .then (function(posts) {
        var htmls = posts.map(function (post) {
            return `<li>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </li>`
        })
        var html = htmls.join('')
        document.getElementById('post-block').innerHTML = html
    })