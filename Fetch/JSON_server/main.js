// Fake REST API with JSON server
var postsAPI = 'http://localhost:3000/posts'
var commentsAPI = 'http://localhost:3000/comments'
var profileAPI = 'http://localhost:3000/profile'

fetch(postsAPI)
    .then(function(response) {
        return response.json()
    })
    .then(function(posts) {
        console.log(posts)
    })

fetch(commentsAPI)
    .then(function(response) {
        return response.json()
    })
    .then(function(cmts) {
        console.log(cmts)
    })

fetch(profileAPI)
    .then(function(response) {
        return response.json()
    })
    .then(function(profile) {
        console.log(profile)
    })