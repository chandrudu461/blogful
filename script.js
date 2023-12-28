import data from "./data";
const searchBtn = document.getElementById("btn-search");
const searchBar = document.getElementById("search");
const mailEl = document.getElementById('main')

searchBtn.addEventListener("click", function () {
    searchBar.classList.toggle("hidden");
});

// var mainElement = document.getElementById("main");

// data.forEach(post => {
//     var blogPostDiv = document.createElement("div");
//     blogPostDiv.className = "card";

//     blogPostDiv.innerHTML = `
//         <img src="assets/${post.image}" alt="${post.title}">
//         <button type="button" class="btn btn-outline-primary rounded-top-4 rounded-bottom-4">${post.category}</button>
//         <div class="frame_content">
//             <p>${post.fullname} | ${post.jobTitle} | ${post.readingTime}</p>
//             <p>${post.date}</p>
//         </div>
//         <div class="desc">
//             <h2>${post.title}</h2>
//             <p>${post.description}</p>
//             <p><a href="#">Learn more</a></p>
//         </div>
//     `;

//     // Append the blog post div to the 'main' element
//     mainElement.appendChild(blogPostDiv);
// });