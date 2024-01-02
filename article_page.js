import data from "/data.js";
document.addEventListener("DOMContentLoaded", function () {
    var mainElement = document.getElementById("main");
    var relatedPostsElement = document.getElementById("related_posts");
    var currentBlog = {
        image: 'Technology1.jpg',
        category: 'Technology',
        fullname: 'Michael Chang',
        jobTitle: '',
        readingTime: '10 min',
        date: '2023-05-20',
        title: '',
        description: 'A glimpse into the latest technological advancements and their potential impact on various industries.',
    };

    function getBlogPostData() {
        var blogPostData = JSON.parse(localStorage.getItem("selectedBlogPost"));
        // console.log(blogPostData);
        currentBlog = blogPostData;
        return blogPostData;
    }

    function renderArticle() {
        var blogPostData = getBlogPostData();

        if (blogPostData) {
            var articleDiv = document.createElement("div");
            articleDiv.className = "article-content";
            articleDiv.innerHTML = `
            <div class="back">
            <img src="assets/back.svg" alt="back">
            <a href="index.html">back</a>
        </div>
        <div class="title">
            <h1>${blogPostData.title}</h1>
        </div>
        <div class="author_image">
            <img src="assets/author_image.png" alt="author_image">
            <p>${blogPostData.fullname} | ${blogPostData.jobTitle}</p>
            <p>${blogPostData.date} | ${blogPostData.readingTime}</p>
            <img src="share_image.jpg" alt="share_image">
        </div>
        <img class="image" src="assets/image1.jpg" alt="image1">
        <div class="container-2">
            <p>
                ${blogPostData.description}
                Lorem ipsum dolor sit amet consectetur, adipisicing
                elit.
                Harum
                recusandae illo ab, officiis adipisci, quia nulla
                repellendus,
                alias magnam maxime est obcaecati voluptate amet totam
                fugit
                distinctio rem minus optio id earum. Voluptatum minima
                esse,
                maiores dignissimos perspiciatis laboriosam quaerat sed
                non
                fuga! Dolor recusandae quasi, vel culpa quisquam omnis
                dolore
                earum fugiat amet, nisi itaque. Eaque, consectetur.
                Nobis!
            </p>
            <a href="#">Learn more</a>
            <button class="btn">Technology</button>
        </div>
        <div class="container-3">
            <h2>
                What Are Hotspots Hints?
            </h2>

            <p>
                If your prototype has Links and you want to see where they
                are located during preview, toggle on the Hotspots Hint
                preference.
            </p>
            <p>
                These hints will highlight the clickable elements of your
                prototype when you click on something that is NOT clickable
                and help those who are not familiar with the project to
                navigate through the prototype with ease.
            </p>
            <p>1. Toggle Hotspots On/Off
                From your Anima Project’s page click on the “Run Prototype”
                preferences icon and toggle the switch on.
                2. Re-sync your Design
                In order for the Prototype Preferences to take action, the
                design needs to be re-synced.
                Go back to your design program and click Preview in Browser
                on the Anima plugin and then Sync to Project.
                3. Run Prototype
                Once the new Sync is up on the Anima Project’s page, click
                on Run Prototype, or go to the project’s Public Link (Click
                Share > Enable Public Link).
                Notice how the Links on your design are highlighted with a
                light blue Hotspot when you click anywhere on the page that
                is not clickable.
            </p>
            <p>
                What is Anima?
                Anima is automating the design-to-code process, allowing
                designers to achieve more without learning to code, and
                helping teams to deliver faster.

            </p>
        </div>
            `;
            console.log(articleDiv);
            mainElement.appendChild(articleDiv);
        }
    }

    function getReletedPostsData() {
        currentBlog = getBlogPostData();
        console.log(currentBlog);
        var relatedPosts = data.filter((post) => (post.title != currentBlog.title) && (post.category === currentBlog.category));
        return relatedPosts;
    }

    function renderRelatedPosts() {
        var relatedPosts = getReletedPostsData();
        console.log(relatedPosts);
        var newRelatedPosts = [relatedPosts[0], relatedPosts[1]];
        var length = 0;
        newRelatedPosts.forEach((post) => {
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
            console.log(post.category);
            blogPostDiv.addEventListener("click", function () {
                localStorage.setItem("selectedBlogPost", JSON.stringify(post));
                window.location.href = "article_page.html";
            });
            relatedPostsElement.appendChild(blogPostDiv);
            length++;
            if (length === 2) {
                return;
            }
        })
    };

    renderRelatedPosts();
    renderArticle();
});