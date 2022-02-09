/*!
* Start Bootstrap - Small Business v5.0.4 (https://startbootstrap.com/template/small-business)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

$().ready(function () {

    function catToUpper(blogCat) {
        let categoriesFixed = [];
        blogCat.forEach(function (cat) {
            categoriesFixed.push(`<a href="#">#${cat}</a>`)
            // categoriesFixed.push(cat.charAt(0).toUpperCase() + cat.slice(1))
        })
        return categoriesFixed.join(' ')
    }

    function createHTML(blog) {
        return `<div class="mb-5">
                    <div class="card h-100">
                        <div class="card-body">
                            <h2 class="card-title">${blog.title}</h2>
                            <p class="card-text">${blog.content}</p>
                        </div>
                        <div class="card-footer d-flex justify-content-between">
                        <div>${catToUpper(blog.categories)}</div>
                        <div>${blog.date}</div>
                        </div>
                    </div>`
    }

    $.ajax('/data/blog.json').done(function (blogs) {
        blogs.forEach(function (blog) {
            $('#posts').append(createHTML(blog))
        })
    })
})
