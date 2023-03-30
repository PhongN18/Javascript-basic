

var listCoursesBlock = document.getElementById('courses-list')

var coursesAPI = 'http://localhost:3000/courses'

function start() {
    getCourses(renderCourses)
    // same as below, because both functions have the same param
    // getCourses(function (course) {
    //      renderCourses(course)
    // })

    formCreateHandler()
}

start()

// Functions
// Get all courses
function getCourses (callback) {
    fetch(coursesAPI)
        .then(function(response) {
            return response.json()
        })
        .then(callback)
}

// Post a course
// input is an object with title and description + value
function createCourse (data, callback) {
    var options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        body: JSON.stringify(data)
    }
    fetch(coursesAPI, options)
        .then(function(response) {
            response.json()
        })
        .then(callback)
}

// Delete a course
function deleteCourseHandler (id) {
    var options = {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
    }
    fetch(coursesAPI + "/" + id, options)
        .then(function(response) {
            response.json()
        })
        .then(function (course) {
            var removeCourse = document.querySelector('.course-' + id)
            if (removeCourse) {
                removeCourse.remove()
            } 
        }
    )
}

// Render and display the courses
function renderCourses (courses) {
    var result = courses.map(function (course) {
        return `
        <li class="course-${course.id}">
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <button onclick="deleteCourseHandler(${course.id})">Delete</button>
            <button 
            onclick="editCourseHandler(${course.id}, '${course.title}', '${course.description}')">
                Edit
            </button>
        </li>`
    })
    var html = result.join("")
    listCoursesBlock.innerHTML = html
}

// Create form handler
function formCreateHandler () {
    var postBtn = document.getElementById('post-btn')
    postBtn.onclick = function () {
        var title = document.querySelector('input[name="title"]').value
        var description = document.querySelector('input[name="description"]').value
        var formData = {
            title: title,
            description: description,
        }

        createCourse(formData, function () {
            getCourses(renderCourses)
        })
    }
}

// Edit handler
function editCourseHandler (id, name, description) {
    // Gọi 2 ô input
    var titleInput = document.querySelector('input[name="title"]')
    var descriptionInput = document.querySelector('input[name="description"]')    

    // Gán giá trị của course vào ô input để chỉnh sửa
    titleInput.value = name
    descriptionInput.value = description
    // LƯU Ý: description bị lỗi không lấy được hết khi trong content có /n

    // Đổi nút thành submit
    var submitBtn = document.querySelector('#post-btn')
    submitBtn.innerText = 'Submit'

    // Sau khi chỉnh sửa bấm submit để update lên db
    submitBtn.onclick = function () {
        var newTitle = titleInput.value
        var newDescription = descriptionInput.value
        var formData = {
            title: newTitle,
            description: newDescription
        }

        editCourse(id, formData, function () {
            getCourses(renderCourses)
            titleInput.value = ''
            descriptionInput.value = ''
            submitBtn.innerText = 'Post'
            formCreateHandler()
            // Trả lại các giá trị ban đầu của input và btn
        })
    }
    
}

// Edit a course
function editCourse (id, data, callback) {
    var options = {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(data)
    }

    fetch(coursesAPI + '/' + id, options)
        .then(function(response) {
            response.json()
        })
        .then (callback)
}