document.addEventListener("DOMContentLoaded", function () {
    var articleContainer = document.getElementById("article-container");

    function getBlogPostData() {
        var blogPostData = JSON.parse(localStorage.getItem("selectedBlogPost"));
        return blogPostData;
    }

    function renderArticle() {
        var blogPostData = getBlogPostData();

        if (blogPostData) {
            var articleDiv = document.createElement("div");
            articleDiv.className = "article-content";
            articleDiv.innerHTML = `
                <h1>${blogPostData.title}</h1>
                <img src="assets/image1.jpg" alt="${blogPostData.title}">
                <p>${blogPostData.fullname} | ${blogPostData.jobTitle} | ${blogPostData.readingTime}</p>
                <p>${blogPostData.date}</p>
                <div class="desc">
                    <p>${blogPostData.description}</p>
                </div>
            `;
            articleContainer.appendChild(articleDiv);
        }
    }

    renderArticle();
});

