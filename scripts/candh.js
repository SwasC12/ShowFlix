document.addEventListener("DOMContentLoaded", function() {
    const movieContainer = document.getElementById("candhContainer");

    // Fetch JSON data
    fetch("../data_link/candh.json")
        .then(response => response.json())
        .then(data => {
            // Iterate over each movie entry in the JSON data
            data.forEach(episode => {
                // Create a card element
                const card = document.createElement("div");
                card.classList.add("card");

                // Create a title element for the movie name
                const title = document.createElement("h2");
                title.textContent = episode.name;
                title.classList.add("episode-title"); // Add a class to the title element

                // Create an iframe for embedding the video
                const iframe = document.createElement("iframe");
                iframe.setAttribute("src", episode.embeddedLink);
                iframe.setAttribute("allowfullscreen", "");
                iframe.setAttribute("frameborder", "0");

                // Append title and iframe to the card
                card.appendChild(title);
                card.appendChild(iframe);

                // Append the card to the movie container
                movieContainer.appendChild(card);
            });
        })
        .catch(error => console.log("Error fetching JSON:", error));
});
