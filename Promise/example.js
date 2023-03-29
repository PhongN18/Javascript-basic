// Promise example

var users = [
    {
        id: 1,
        name: 'Phong Nguyen',
    },
    {
        id: 2,
        name: 'Linh Phan',
    },
    {
        id: 3,
        name: 'Phong Linh',
    }
]

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'bla bla bla bla bla'
    },
    {
        id: 2,
        user_id: 2,
        content: 'bla blo bli ble blu'
    },
    {
        id: 3,
        user_id: 2,
        content: 'hehehe'
    }
]

// Steps
// 1. Get comments
// 2. From comments get user_id,
// from user_id get the users

// Fake API

// Must understand
// 1. Array
// 2. Function, callback
// 3. DOM
// 4. Promise

// Get comments function
function getComments() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(comments)
        }, 1000)
    })
}

// Get users by id function
function getUsersByIDs(userIDs) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            var result = users.filter(function(user) {
                return userIDs.includes(user.id)
            })
            resolve(result)
            // console.log(result)
        }, 1000)
    })
}

// Call getComments function --> return a promise
getComments()
    .then(function(comments) {
        var userIDs = comments.map(function (comment) {
            return comment.user_id
        })
        // console.log(userIDs)
        // .then declare an array with user_id of the comments

        // call getUsersByIDs function --> return a promise
        // .then declare an object with 2 arrays as values
        return getUsersByIDs(userIDs)
            .then(function(user) {
                return {
                    listUsers: user,
                    // user is userIDs, filtered by map
                    // contains the user_id of the comments
                    listComments: comments,
                    // the array comments itself
                }
            })
    })

    .then(function(data) {
        // get the ul element where display all the comments
        var commentBlock = document.getElementById('comment-block');
        // declare a result html
        var html = '';

        // Loop through all elements of listComments
        data.listComments.forEach(function (comment) {
            // with each comment, find in the listUsers
            // which user is the comment belong to
            var user = data.listUsers.find(function(user) {
                return user.id === comment.user_id
            })
            // add the display format to the html with each comment 
            html += `<li>${user.name}: ${comment.content}</li>`
        })

        // use DOM to insert the code to element
        commentBlock.innerHTML = html
    })

