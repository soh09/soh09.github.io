let screenWidth = document.documentElement.clientWidth;
document.addEventListener('DOMContentLoaded', function() {
    function updateGalleryLayout() {
        screenWidth = document.documentElement.clientWidth;
        console.log(screenWidth);

        const gallery = document.querySelector('.gallery');

        let cols = [];

        gallery.innerHTML = ''; // Clear existing content

        if (screenWidth < 500) {
            console.log('screen small');
            gallery.style.setProperty('grid-template-columns', 'repeat(1, minmax(0px, 1fr))');
            // Single column layout
            const galleryColumn = document.createElement('div');
            galleryColumn.classList.add('gallery-col');

            cols.push(galleryColumn);

            gallery.appendChild(galleryColumn);
        } else if (screenWidth <= 1000) {
            console.log('screen mid');
            gallery.style.setProperty('grid-template-columns', 'repeat(2, minmax(0px, 1fr))');
            
            // Two columns layout
            for (let i = 0; i < 2; i++) {
                const galleryColumn = document.createElement('div');
                galleryColumn.classList.add('gallery-col');
                cols.push(galleryColumn);
                gallery.appendChild(galleryColumn);
            }
        } else if (screenWidth <= 2500) {
            console.log('screen big');
            gallery.style.setProperty('grid-template-columns', 'repeat(3, minmax(0px, 1fr))');

            // Default layout (three columns)
            for (let i = 0; i < 3; i++) {
                const galleryColumn = document.createElement('div');
                galleryColumn.classList.add('gallery-col');
                cols.push(galleryColumn);
                gallery.appendChild(galleryColumn);
            }
        } else {
            console.log('screen extra big');
            gallery.style.setProperty('grid-template-columns', 'repeat(4, minmax(0px, 1fr))');

            // Default layout (three columns)
            for (let i = 0; i < 4; i++) {
                const galleryColumn = document.createElement('div');
                galleryColumn.classList.add('gallery-col');
                cols.push(galleryColumn);
                gallery.appendChild(galleryColumn);
            }
        }


        console.log(cols);

        let image_fps = [
            ["../assets/photography/r2_tsuchinshan.jpeg", "\"The Comet\"<br>📍Crater Lake,<br>Oregon"],
            ["../assets/photography/r1_milkyway.JPG", "\"The Milkyway\"<br>📍SDSU Observatory,<br>Julian, CA"],
            ["../assets/photography/r1_towards_baybridge.JPG", "\"Towards Bay Bridge\"<br>📍California St,<br>San Francisco, CA"],
            ["../assets/photography/r1_chinatown_pacific.JPG", "\"Towards the Pacific\"<br>📍California St,<br>San Francisco, CA"],
            ["../assets/photography/r2_plastic_lens.JPG", "📍Gliderport,<br>San Diego, CA<br>shot with a disposable lens"],
            ["../assets/photography/r2_national_masjid.JPG", "National Masjid<br>📍Kuala Lumpur, Malaysia"],
            ["../assets/photography/r1_putra_masjid.JPG", "📍Putra Masjid,<br>Putrajaya, Malaysia"],
            ["../assets/photography/r1_merdeka_with_masjid.JPG", "Sultan Abdul Samad Building<br>📍Kuala Lumpur, Malaysia"],
            ["../assets/photography/r1_cat.JPG", "📍Subang Jaya,<br>Selangor, Malaysia"],
            ["../assets/photography/r2_bamboo_everyone.JPG", "Bamboo Forest<br>📍Kyoto, Japan"],
            ["../assets/photography/r1_blue_firework.JPG", "Tone River Firework Festival<br>📍Ibaraki, Japan"],
            ["../assets/photography/r1_purple_firework.JPG", "Tone River Firework Festival<br>📍Ibaraki, Japan"],
            ["../assets/photography/r1_blue_circle_firework.JPG", "Tone River Firework Festival<br>📍Ibaraki, Japan"],
            ["../assets/photography/r1_spider_lily.JPG", "\"Spider Lily\"<br>📍Ibaraki, Japan"],
            ["../assets/photography/r2_me_with_ethan.JPG", "Tone River banks<br>📍Ibaraki, Japan"],
            ["../assets/photography/r2_bamboo_forest.JPG", "Bamboo Forest<br>📍Kyoto, Japan"],
            ["../assets/photography/r1_skytree.JPG", "Tokyo Skytree<br>📍Asakusa, Tokyo"],
            ["../assets/photography/r1_jiji.JPG", "\"Grandpa\"<br>📍Little Italy,<br>San Diego, CA"],
            ["../assets/photography/r1_colorful_sunset.JPG", "📍Tierra del Sol,<br>San Diego, CA"]
        ]
        
        // // in order insertion
        // let i = 0
        // n_cols = cols.length
        // for (const image_fp of image_fps) {
        //     const photo_div = document.createElement('div');
        //     photo_div.classList.add('gallery-photo');

        //     const photo = document.createElement('img');
        //     photo.src = image_fp;
        //     photo_div.appendChild(photo);

        //     cols[i % n_cols].appendChild(photo_div);

        //     i++;
        // }
        
        // // height order insertion (tries to keep height relatively constant)

        function getColHeight(div) {
            return div.offsetHeight;
        }

        function findShortestColumn(cols) {
            let shortestH = getColHeight(cols[0]);
            let shortestCol = cols[0];

            for (const col of cols) {
                if (getColHeight(col) < shortestH) {
                    shortestCol = col;
                    shortestH = getColHeight(col);
                }
            }

            return shortestCol;
        }


        for (const image_fp_desc of image_fps) {
            const image_fp = image_fp_desc[0]
            const image_desc = image_fp_desc[1]

            const photo_div = document.createElement('div');
            photo_div.classList.add('gallery-photo');

            const img_overlay = document.createElement('div');
            img_overlay.classList.add("gallery-photo-overlay");

            desc = document.createElement('p');
            desc.classList.add("overlay-text");
            desc.innerHTML = image_desc
            img_overlay.appendChild(desc)

            const photo = document.createElement('img');
            photo.classList.add("photo");
            
            // Attach event listener to the load event of each image
            photo.addEventListener('load', function() {
                // Append the loaded image to the photo_div
                photo_div.appendChild(photo);
                
                // Find the shortest column
                const shortestColumn = findShortestColumn(cols);
                
                // Append the photo_div to the shortest column
                shortestColumn.appendChild(photo_div);
                photo_div.appendChild(img_overlay);
            });
            
            photo_div.appendChild(photo);
            photo.src = image_fp;

        }


    }

    // Initial call to set up the gallery layout
    updateGalleryLayout();

    // // Update gallery layout whenever the window is resized
    window.addEventListener('resize', function() {
        console.log("this is the first call: " + screenWidth);
        if(screenWidth !== document.documentElement.clientWidth){ 
            updateGalleryLayout();
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const galleryPhotos = document.querySelectorAll('.gallery-photo');

    galleryPhotos.forEach(function(galleryPhoto) {
        // Attach a touchstart event listener to each gallery photo
        galleryPhoto.addEventListener('touchstart', function(event) {
            // Toggle the visibility of the overlay
            console.log('touch detected')
            const overlay = galleryPhoto.querySelector('.gallery-photo-overlay');
            overlay.style.opacity = overlay.style.opacity === '1' ? '0' : '1';
            event.preventDefault();
        }, {passive: false});
    });
});