import data from "./data.js";

const searchBtn = document.getElementById("btn-search");
const searchBar = document.getElementById("search");
searchBar.setAttribute("autoComplete", "off");
searchBtn.addEventListener("click", function () {
    searchBar.classList.toggle("hidden");
});

var mainElement = document.getElementById("main");
var showMoreButton = document.getElementById("show_more");
var postsPerPage = 10;
var renderedPosts = 0;
var currentFilter = "All";
var blogData = data;

// navbar activeness

var navLinks = document.querySelectorAll(".navbar-nav a");
var themeMode = localStorage.getItem("themeMode") || "white-mode";

// console.log(navLinks);
navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.forEach(function (navLink) {
            navLink.classList.remove("active");
        });
        link.classList.add("active");
        currentFilter = link.innerText;
        // console.log(currentFilter);
        mainElement.innerHTML = "";
        renderedPosts = 0;
        showMore();
    });
});
function renderPosts(startIndex, endIndex) {
    console.log(currentFilter);
    if (currentFilter !== "All") {
        blogData = data.filter((post) => post.category === currentFilter);
        blogData = data.filter((post) => {
            return post.category === currentFilter
        });
    }
    else {
        blogData = data;
    }
    var count = 0;
    blogData.slice(startIndex, endIndex).forEach(post => {
        console.log(count);
        if (count === 3) {
            var trendingTopics = document.createElement("h2");
            var trendingTopics2 = document.createElement("h2");
            trendingTopics.textContent = "Trending Topics";
            mainElement.appendChild(trendingTopics);
            mainElement.appendChild(trendingTopics2);
        }
        if (count == 0) {
            var trendingTopics = document.createElement("h2");
            trendingTopics.textContent = "Today's Pics";
            mainElement.appendChild(trendingTopics);
        }
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
                    <p>${((post.description.split(' ')).slice(0, 10)).join(" ")}...</p>
                    <a href="#">Learn more</a>
                </div>
            `;
        // console.log(post.category);
        blogPostDiv.addEventListener("click", function () {
            localStorage.setItem("selectedBlogPost", JSON.stringify(post));
            localStorage.setItem("currentFilter", currentFilter);
            window.location.href = "article_page.html";
        });
        count++;
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
var buttonElements = document.querySelectorAll(".button");
var searchResultsElements = document.querySelectorAll(".search_results");
var footerElements = document.querySelectorAll(".footer");
var listElements = document.querySelectorAll(".footer a");

console.log(footerElements);
if (themeMode === "dark-mode") {
    buttonElements.forEach(function (button) {
        button.style.backgroundColor = "#1976D2";
        button.style.color = "white";
    });
    footerElements.forEach(function (element) {
        element.style.color = "white";
    })
    searchResultsElements.backgroundColor = "#2b2b2b";
    listElements.forEach(function (listElement) {
        listElement.classList.remove("text-dark");
        listElement.classList.toggle("text-white");
    });
}
else {
    buttonElements.forEach(function (button) {
        button.style.backgroundColor = "white";
        button.style.color = "#1976D2";
        footerElements.forEach(function (element) {
            element.style.color = "#2b2b2b";
        })
        listElements.forEach(function (listElement) {
            listElement.classList.remove("text-white");
            listElement.classList.toggle("text-dark");
        });
        searchResultsElements.backgroundColor = "white";
    });
}

showMoreButton.addEventListener("click", showMore);

searchBar.addEventListener("input", function () {
    var searchValue = searchBar.value.toLowerCase();
    renderSearchResults(searchValue);
});


document.body.classList.toggle("dark-mode", themeMode === "dark-mode");

document.body.addEventListener("click", function (event) {
    var clickedElement = event.target;
    const suggestionContainerElement = document.getElementById("suggestionContainer");
    const searchResultElements = document.querySelectorAll("#suggestionList");

    if (
        clickedElement !== searchBar &&
        !Array.from(searchResultElements).includes(clickedElement)
    ) {
        suggestionContainerElement.style.display = "none";
        searchBar.value = "";
        suggestionContainerElement.style.display = "none";
    }
});

function renderSearchResults(searchValue) {
    var searchResults = data.filter(post => post.title.toLowerCase().includes(searchValue));
    const suggestionListElement = document.getElementById("suggestionList");
    const suggestionContainerElement = document.getElementById("suggestionContainer");


    if (themeMode === "white-mode") {
        suggestionContainerElement.classList.remove('dark-mode', 'white-mode');
        suggestionContainerElement.classList.add("white-mode");
    }
    else {
        suggestionContainerElement.classList.remove('dark-mode', 'white-mode');
        suggestionContainerElement.classList.add("dark-mode");
    }

    suggestionListElement.innerHTML = '';
    // Display new suggestions
    searchResults.forEach(item => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        listItem.textContent = item.title;
        listItem.addEventListener("click", function () {
            localStorage.setItem("selectedBlogPost", JSON.stringify(item));
            localStorage.setItem("currentFilter", currentFilter);
            window.location.href = "article_page.html";
        })
        suggestionListElement.appendChild(listItem);
        console.log(themeMode);

        suggestionContainerElement.style.display = "block";
    });


    // var searchRendererEl = document.querySelector("#search_renderer");
    // searchRendererEl.style.display = "flex";

    // searchRendererEl.innerHTML = "";
    // var searchResults = data.filter(post => post.title.toLowerCase().includes(searchValue));

    // searchResults.forEach(post => {
    //     var blogPostDiv = document.createElement("div");
    //     blogPostDiv.className = "search_results";
    //     // console.log(themeMode);
    //     if (themeMode === "dark-mode") {
    //         blogPostDiv.className += " dark-mode";
    //     }
    //     else {
    //         blogPostDiv.classList.remove("dark-mode");
    //     }
    //     blogPostDiv.innerHTML = `
    //         ${post.title}
    //     `;
    //     blogPostDiv.addEventListener("click", function () {
    //         localStorage.setItem("selectedBlogPost", JSON.stringify(post));
    //         localStorage.setItem("currentFilter", currentFilter);
    //         window.location.href = "article_page.html";
    //     });
    //     searchRendererEl.appendChild(blogPostDiv);
    //     searchRendererEl.style.display = "flex";
    // });

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
    var listElements = document.querySelectorAll(".footer a");
    // var labelElement = document.getElementById("label");

    if (themeMode === "dark-mode") {
        buttonElements.forEach(function (button) {
            button.style.backgroundColor = "#1976D2";
            button.style.color = "white";
        });
        footerElements.forEach(function (element) {
            element.style.color = "white";
        })
        listElements.forEach(function (listElement) {
            listElement.classList.remove("text-dark");
            listElement.classList.toggle("text-white");
        });
        // labelElement.style.backgroundColor = "blue";
        searchResultsElements.backgroundColor = "#2b2b2b";
    }
    else {
        buttonElements.forEach(function (button) {
            button.style.backgroundColor = "white";
            button.style.color = "#1976D2";
        });
        searchResultsElements.backgroundColor = "white";
        listElements.forEach(function (listElement) {
            listElement.classList.remove("text-white");
            listElement.classList.toggle("text-dark");
        });
        // labelElement.style.backgroundColor = "#333";
        footerElements.forEach(function (element) {
            element.style.color = "#2b2b2b";
        })
    }
});

const fontSlider = document.getElementById('sliderFontSize');
const fontSizeLabel = document.getElementById('fontSizeLabel');
const sizes = ['XS', 'S', 'M', 'L', 'XL'];

var h2Elements = document.querySelector("h2");

fontSlider.addEventListener('input', () => {
    const fontSize = getFontSizeFromSliderValue(fontSlider.value);
    const h2FontSize = getH2FontSize(fontSlider.value);
    document.body.style.fontSize = `${fontSize}rem`;
    console.log(document.body.style.fontSize);
    fontSizeLabel.textContent = sizes[fontSlider.value - 1];
});

function getFontSizeFromSliderValue(sliderValue) {
    return sliderValue * 0.25 + 0.25;
}

function getH2FontSize(sliderValue) {
    return sliderValue * 0.25 + 0.5;
}

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
