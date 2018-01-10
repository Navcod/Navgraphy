function displayNextImage() {
              x = (x === images.length - 1) ? 0 : x + 1;
              document.getElementById("img").src = images[x];
          }

          function displayPreviousImage() {
              x = (x <= 0) ? images.length - 1 : x - 1;
              document.getElementById("img").src = images[x];
          }

          function startTimer() {
              setInterval(displayNextImage, 50);
          }

          var images = [], x = -1;
          images[0] = "https://static1.squarespace.com/static/59220879e58c62c542e0f6bd/592ac3b9c534a5adf882f2e0/5982eda415d5db8a0c3981c8/1513436293397/Olivia+beach.jpg?format=750w";
          images[1] = "https://static1.squarespace.com/static/59220879e58c62c542e0f6bd/592ac3b9c534a5adf882f2e0/5982eda4b8a79b0ae04c5ad3/1511344574420/Olivia+down.jpg?format=1500w";
          images[2] = "https://static1.squarespace.com/static/59220879e58c62c542e0f6bd/592ac3b9c534a5adf882f2e0/5982eda415d5db8a0c3981c8/1513436293397/Olivia+beach.jpg?format=750w";
          images[3] = "https://images.unsplash.com/photo-1439524970634-649c37a69e5c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1450&h=825&fit=crop&s=bfda9916c885869b43b70738693428d9";
          images[4] = "https://images.unsplash.com/photo-1444090542259-0af8fa96557e?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450";
          images[5] = "https://images.unsplash.com/photo-1434543177303-ef2cc7707e0d?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450";
          images[6] = "https://images.unsplash.com/photo-1436262513933-a0b06755c784?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450";