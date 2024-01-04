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
var currentFilter = "";
var blogData = data;

// navbar activeness

var navLinks = document.querySelectorAll(".navbar-nav a");
var themeMode = localStorage.getItem("themeMode") || "white-mode";

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.forEach(function (navLink) {
            navLink.classList.remove("active");
        });

        link.classList.add("active");
        currentFilter = link.innerText;
        mainElement.innerHTML = "";
        renderedPosts = 0;
        showMore();
    });
});

function renderPosts(startIndex, endIndex) {
    if (currentFilter !== "") {
        blogData = data.filter((post) => post.category === currentFilter);
        blogData = data.filter((post) => {
            return post.category === currentFilter
        });
    }
    // console.log(blogData);
    blogData.slice(startIndex, endIndex).forEach(post => {
        var blogPostDiv = document.createElement("div");
        blogPostDiv.className = "card";
        blogPostDiv.innerHTML = ` 
                <img src="assets/image1.jpg" alt="${post.title}">
                <button type="button" class="btn button rounded-top-4 rounded-bottom-4">${post.category}</button>
                <div class="frame_content">
                    <p>${post.fullname} | ${post.jobTitle} | ${post.readingTime}</p>
                    <p>${post.date}</p>
                </div>
                <div class="desc">
                    <h2>${post.title}</h2>
                    <p>${post.description}</p>
                </div>
            `;
        // console.log(post.category);
        blogPostDiv.addEventListener("click", function () {
            localStorage.setItem("selectedBlogPost", JSON.stringify(post));
            window.location.href = "article_page.html";
        });
        mainElement.appendChild(blogPostDiv);
    });
    renderedPosts += endIndex - startIndex;
}

function showMore() {
    var startIndex = renderedPosts;
    var endIndex = startIndex + postsPerPage;

    // console.log(startIndex, endIndex);
    renderPosts(startIndex, endIndex);

    if (renderedPosts >= blogData.length) {
        showMoreButton.style.display = "none";
    }
}

showMore();

showMoreButton.addEventListener("click", showMore);

searchBar.addEventListener("input", function () {
    var searchValue = searchBar.value.toLowerCase();
    renderSearchResults(searchValue);
});


document.body.classList.toggle("dark-mode", themeMode === "dark-mode");

document.body.addEventListener("click", function (event) {
    var clickedElement = event.target;
    var searchRendererEl = document.querySelector("#search_renderer");

    if (
        clickedElement !== searchBar &&
        !searchRendererEl.contains(clickedElement)
    ) {
        searchRendererEl.style.display = "none";
        // console.log("clicked outside");
    }
});

function renderSearchResults(searchValue) {
    var searchRendererEl = document.querySelector("#search_renderer");
    searchRendererEl.style.display = "flex";

    searchRendererEl.innerHTML = "";
    var searchResults = data.filter(post => post.title.toLowerCase().includes(searchValue));

    searchResults.forEach(post => {
        var blogPostDiv = document.createElement("div");
        blogPostDiv.className = "search_results";
        // console.log(themeMode);
        if (themeMode === "dark-mode") {
            blogPostDiv.className += " dark-mode";
        }
        else {
            blogPostDiv.classList.remove("dark-mode");
        }
        blogPostDiv.innerHTML = `
            ${post.title}
        `;
        blogPostDiv.addEventListener("click", function () {
            localStorage.setItem("selectedBlogPost", JSON.stringify(post));
            window.location.href = "article_page.html";
        });
        searchRendererEl.appendChild(blogPostDiv);
        searchRendererEl.style.display = "flex";
    });
}

const modeToggle = document.getElementById("mode-toggle");
const body = document.body;

var buttonElements = document.querySelectorAll(".button");

modeToggle.addEventListener("change", function () {
    if (themeMode !== "white-mode") {
        themeMode = "white-mode";
    }
    else {
        themeMode = "dark-mode";
    }
    localStorage.setItem("themeMode", themeMode);

    body.classList.toggle("dark-mode");
    var searchResultsElements = document.querySelectorAll(".search_results");
    // console.log(searchResultsElements);

    if (themeMode === "dark-mode") {
        buttonElements.forEach(function (button) {
            button.style.backgroundColor = "#1976D2";
            button.style.color = "white";
        });
        searchResultsElements.backgroundColor = "blue";
    }
    else {
        buttonElements.forEach(function (button) {
            button.style.backgroundColor = "white";
            button.style.color = "#1976D2";
            searchResultsElements.backgroundColor = "white";
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingMessage = document.getElementById('loading-message');

    // Show loading screen
    loadingScreen.style.display = 'flex';

    // Simulate a delay using setTimeout
    setTimeout(function () {
        // Hide loading screen after the timeout
        loadingScreen.style.display = 'none';
    }, 2000); // Adjust the timeout duration as needed
});