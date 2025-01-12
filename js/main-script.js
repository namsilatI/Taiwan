export function mainScript(){
    const sectionsData = [
        {
          title: "Introduction",
          leftText: [
            `<b>Republic of China (ROC)</b>, 
                commonly referred to as Taiwan, is an island nation located in East Asia. 
                It lies approximately 180 kilometers off the southeastern coast of mainland China, separated by the Taiwan Strait. 
                Renowned for its vibrant democracy, technological innovation, and rich cultural heritage, Taiwan has emerged as a global leader in industries such as semiconductors and electronics. 
                The island’s landscape is characterized by rugged mountains, lush forests, and bustling urban centers, with Taipei, the capital, serving as a hub for politics, culture, and commerce.`,
            `With a population of over 23 million, Taiwan is a densely populated nation where traditional Chinese traditions blend seamlessly with modern influences. 
                Although its international status is a subject of geopolitical contention, Taiwan operates as a self-governing entity with its own government, military, and constitution. 
                The country is celebrated for its dynamic economy, commitment to human rights, and unique contributions to global culture, such as its famous night markets, bubble tea, and innovative tech industry.`
          ],
          rightImages: [
            { src: "../img/Taipei-tip-Taiwan-island.webp", alt: "big-map-island" },
            { src: "../img/Taiwan-mapbig.jpg", alt: "small-map-island" }
          ],
          flagImage: { src: "../img/taiwan-flag.jpg", alt: "main-flag" }
        },
        {
          title: "History",
          leftText: [
            `Taiwan’s history spans thousands of years, beginning with its indigenous Austronesian peoples who have inhabited the island for millennia. 
             In the 17th century, it became a site of European colonization, with the Dutch and Spanish establishing settlements. 
             By 1683, Taiwan was incorporated into the Qing Dynasty, marking its integration into Chinese administration.`,
            `In 1895, following the First Sino-Japanese War, Taiwan was ceded to Japan, which ruled the island for 50 years and significantly modernized its infrastructure. 
             After Japan's defeat in World War II in 1945, Taiwan was returned to Chinese control under the Republic of China (ROC).`,
            `The Chinese Civil War (1945–1949) led to the ROC government retreating to Taiwan after the Communist Party established the People’s Republic of China (PRC) on the mainland. 
             In Taiwan, the ROC transformed into a highly industrialized and democratic society over the latter half of the 20th century.`,
            `Today, Taiwan operates as a self-governing democracy, while its international status remains a point of geopolitical tension with the PRC, which claims the island as part of its territory.`
          ],
          rightImages: [
            { src: "../img/ChiangKai.jpeg", alt: "big-map-island" }
          ]
        }
      ];
    
      const createSection = ({ title, leftText, rightImages, flagImage }) => `
        <section class="main-container_part container-part">
            <article class="container-part_block part-block">
                <h1 class="part-block_title">${title}</h1>
                <div class="part-block_info block-info">
                    <div class="block-info_left info-left">
                        ${leftText.map(text => `<p class="info-left_text">${text}</p>`).join('')}
                    </div>
                    <div class="block-info_right info-right">
                        <picture class="info-right_map right-map">
                            <div class="right-map_container map-container">
                                ${rightImages.map(img => `<img src="${img.src}" alt="${img.alt}">`).join('')}
                            </div> 
                            <figcaption class="right-map_caption">Map of territories administered by the ROC (Taiwan Area)</figcaption>    
                        </picture>
                        ${flagImage ? `
                            <picture class="info-right_flag right-flag">
                                <img src="${flagImage.src}" alt="${flagImage.alt}">
                                <figcaption class="right-map_caption">Flag of the ROC (Taiwan)</figcaption>    
                        </picture>` : ''}
                    </div>
                </div>
            </article>
        </section>
      `;
 
      const mainContainer = document.getElementById("main-container");
    
      sectionsData.forEach(sectionData => {
        mainContainer.innerHTML += createSection(sectionData);
      });
}