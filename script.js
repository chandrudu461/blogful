import data from "./data.js";
const searchBtn = document.getElementById("btn-search");
const searchBar = document.getElementById("search");

searchBtn.addEventListener("click", function () {
    searchBar.classList.toggle("hidden");
});

var mainElement = document.getElementById("main");
var showMoreButton = document.getElementById("show_more");
var postsPerPage = 10;
var renderedPosts = 0;

// var mainElement = document.getElementById("main");
//         data.forEach(post => {
//             var blogPostDiv = document.createElement("div");
//             blogPostDiv.className = "card";
//             blogPostDiv.innerHTML = `
//                 <img src="assets/image1.jpg" alt="${post.title}">
//                 <button type="button" class="btn btn-outline-primary rounded-top-4 rounded-bottom-4">${post.category}</button>
//                 <div class="frame_content">
//                     <p>${post.fullname} | ${post.jobTitle} | ${post.readingTime}</p>
//                     <p>${post.date}</p>
//                 </div>
//                 <div class="desc">
//                     <h2>${post.title}</h2>
//                     <p>${post.description}</p>
//                     <p><a href="#">Learn more</a></p>
//                 </div>
//             `;
//             mainElement.appendChild(blogPostDiv);
//         });     

function renderPosts(startIndex, endIndex) {
    // var x = data.filter((ele) => ele.category == "culture");
    data.slice(startIndex, endIndex).forEach(post => {
        var blogPostDiv = document.createElement("div");
        blogPostDiv.className = "card";
        blogPostDiv.innerHTML = ` 
                <img src="assets/image1.jpg" alt="${post.title}">
                <button type="button" class="btn btn-outline-primary rounded-top-4 rounded-bottom-4">${post.category}</button>
                <div class="frame_content">
                    <p>${post.fullname} | ${post.jobTitle} | ${post.readingTime}</p>
                    <p>${post.date}</p>
                </div>
                <div class="desc">
                    <h2>${post.title}</h2>
                    <p>${post.description}</p>
                </div>
            `;
        mainElement.appendChild(blogPostDiv);
    });

    renderedPosts += endIndex - startIndex;
}

function showMore() {
    var startIndex = renderedPosts;
    var endIndex = startIndex + postsPerPage;

    renderPosts(startIndex, endIndex);

    if (renderedPosts >= data.length) {
        showMoreButton.style.display = "none";
    }
}

showMore();

showMoreButton.addEventListener("click", showMore);