export function mainScript(){
///////////////////////////////////CONSTRUCTOR/////////////////////////////////////////
    const sectionsData = [
        {
          title: { id: "introduction", title: "Introduction"}, 
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
          flagImage: { src: "../img/taiwan-flag.jpg", alt: "main-flag" },
          captionR: "Map of territories administered by the ROC (Taiwan Area)",
          captionL: "Flag of the ROC (Taiwan)"
        },
        {
          title: { id: "history", title: "History"}, 
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
          ], 
          captionR: "Chiang Kai-Shek was a Chinese politician, revolutionary, and military commander who was the leader of the Nationalist Kuomintang head of the Nationalist government in China from 1928 to 1949 subsequently head of the Chinese Nationalist government in exile on Taiwan."
        },
        {
          title: { id: "geography", title: "Geography"}, 
          leftText: [
            `Taiwan is an island nation located in East Asia, covering an area of approximately 36,193 square kilometers. 
             It lies in the western Pacific Ocean, about 180 kilometers off the southeastern coast of mainland China, separated by the Taiwan Strait. 
             To the north is Japan, and to the south is the Philippines.`,
            `The island’s geography is characterized by rugged mountains in the east, dominated by the Central Mountain Range, and flat, fertile plains in the west, which are densely populated and serve as the economic and agricultural heart of the country. 
             Taiwan’s highest peak is Yu Shan (Jade Mountain) at 3,952 meters, making it the tallest mountain in East Asia.`,
            `Taiwan is located along the Pacific Ring of Fire, making it prone to earthquakes and typhoons. Its diverse climate ranges from tropical in the south to subtropical in the north, supporting rich biodiversity and lush forests.`,
          ],
          rightImages: [
            { src: "../img/Taiwan_NASA.jpg", alt: "taiwan-nasa" }
          ], 
          captionR: "A satellite image of Taiwan, showing it is mostly mountainous in the east, with gently sloping plains in the west. The Penghu Islands are west of the main island."
        },
        {
          title: { id: "economy", title: "Economy"}, 
          leftText: [
            `Taiwan has a highly developed and dynamic economy, known for its robust manufacturing sector, particularly in semiconductors, electronics, and information technology. 
             The country is a global leader in the production of semiconductor chips, with companies like TSMC driving its technological dominance.`,
            `Taiwan's economy is export-oriented, with major exports including electronic components, machinery, petrochemicals, and textiles. 
             It is one of the Four Asian Tigers, alongside Hong Kong, Singapore, and South Korea, having achieved rapid industrialization and growth since the 1960s.`,
            `The service sector, including finance, tourism, and retail, also plays a significant role in Taiwan's economy. 
             The country has a highly skilled labor force and a high standard of living, supported by a strong infrastructure and a business-friendly environment. 
             Despite its political challenges, Taiwan maintains a strong international trade presence and is a key player in the global supply chain.`,
          ],
          flagImage: { src: "../img/TSMC_Fab5.jpg", alt: "main-flag" },
          rightImages: [
            { src: "../img/taipei.jpeg", alt: "taiwan-taipei" },
          ], 
          captionL: "TSMC fab 5 located in Hsinchu Science Park.",
          captionR: "Taipei 101 held the world <br> record for the highest skyscraper <br> from 2004 to 2010."
        },
        {
          title: { id: "goverment", title: "Goverment and Politics"}, 
          leftText: [
            `Taiwan, officially the Republic of China (ROC), is a unitary semi-presidential constitutional republic with a vibrant multi-party democracy. 
             The government is based on a five-branch system outlined in its 1947 Constitution: Executive, Legislative, Judicial, Examination, and Control.`,
            `The President serves as the head of state and commander-in-chief of the military, while the Premier leads the Executive Yuan (cabinet). 
             Legislative power is vested in the unicameral Legislative Yuan, responsible for enacting laws and overseeing the government.`,
            `Taiwan’s political system is characterized by competitive elections, with the Democratic Progressive Party (DPP) and the Kuomintang (KMT) being the dominant parties. 
             While the DPP advocates for stronger Taiwanese identity and independence, the KMT traditionally supports closer ties with mainland China.`,
             `The country operates as a de facto independent state, but its sovereignty is contested by the People’s Republic of China (PRC), which claims Taiwan as part of its territory. 
              Despite limited formal diplomatic recognition, Taiwan maintains strong unofficial ties with many nations and is known for its progressive democracy and human rights record.`
          ],
          flagImage: { src: "../img/presBuild.jpg", alt: "presBuild" },
          rightImages: [
            { src: "../img/pres.jpg", alt: "taiwan-taipei" },
          ], 
          captionR: "Lai Ching-te, President of the Republic of China.",
          captionL: "Taiwan's popularly elected president resides <br> in the Presidential Office Building, Taipei, <br> originally built in the Japanese era <br> for colonial governors."
        },
        {
          title: { id: "status", title: "International Status"}, 
          leftText: [
            `Taiwan's international status is complex and contentious. 
             Although it operates as a de facto independent state with its own government, military, and constitution, the People’s Republic of China (PRC) claims Taiwan as part of its territory and pressures countries to adhere to the One China Policy.`,
            `Taiwan is an active participant in global trade and organizations such as the World Trade Organization (WTO) and Asia-Pacific Economic Cooperation (APEC), often under the name "Chinese Taipei." 
             Despite its diplomatic challenges, Taiwan plays a significant role in the global economy and fosters strong ties with major powers like the United States, Japan, and the European Union.`
          ],
          rightImages: [
            { src: "../img/Misiones.png", alt: "Misiones" },
          ], 
          captionR: "Level of recognition of the Republic of China (Taiwan): Red - Republic of China. Dark blue - countries that have officially recognized the Republic of China (Taiwan) and have its embassy. Blue - countries that have more than one embassy of the Republic of China. Light blue - countries that previously had unofficial representations of the Republic of China. Gray - countries that do not recognize or have no relations with Taiwan",
          captionL: "Taiwan's popularly elected president resides <br> in the Presidential Office Building, Taipei, <br> originally built in the Japanese era <br> for colonial governors."
        }
      ];
    
      const createSection = ({ title, leftText, rightImages, flagImage, captionR, captionL }) => `
        <section class="main-container_part container-part">
            <article class="container-part_block part-block">
                <h1 class="part-block_title" id=${title.id}>${title.title}</h1>
                <div class="part-block_info block-info">
                    <div class="block-info_left info-left">
                        ${leftText.map(text => `<p class="info-left_text">${text}</p>`).join('')}
                    </div>
                    <div class="block-info_right info-right">
                        <picture class="info-right_map right-map">
                            <div class="right-map_container map-container">
                                ${rightImages.map(img => `<img src="${img.src}" alt="${img.alt}">`).join('')}
                            </div> 
                            <figcaption class="right-map_caption">${captionR}</figcaption>    
                        </picture>
                        ${flagImage ? `
                            <picture class="info-right_flag right-flag">
                                <img src="${flagImage.src}" alt="${flagImage.alt}" id="image">
                                <figcaption class="right-map_caption">${captionL}</figcaption>    
                        </picture>` : ''}
                    </div>
                </div>
            </article>
        </section>
      `;
 
      const mainContainer = document.getElementById("main-container");
    
      sectionsData.forEach(sectionData => {
        const sectionHTML = createSection(sectionData);
        const sectionElement = document.createElement("div");
        sectionElement.innerHTML = sectionHTML;
        mainContainer.appendChild(sectionElement.firstElementChild);
      });
      
      
      ///////////////////////////////////SCROLL/////////////////////////////////////////
      const sections = document.querySelectorAll(".main-container_part");
        sections.forEach((section, index) => {
          if (index !== 0){
            section.classList.add("previous");
          } else {
            section.classList.add("active");
          }
        })
      document.querySelectorAll('a[href^="#"').forEach((link, index) => {
        link.addEventListener('click', function(e){
          e.preventDefault();
           sections.forEach(section => {
            section.classList.remove("active");
            section.classList.add("previous");
      });
          sections[index].classList.add("active");
          sections[index].classList.remove("previous");
        })
      })

      const modalImg = document.getElementById("modal-img");
      const modal = document.getElementById("modal");
      const openModal = (imgSrc) => {
        modal.style.display = "flex";
        modalImg.src = imgSrc;
      }
      document.querySelectorAll('.info-right_map img').forEach(image => {
        image.addEventListener('click', function(){
          openModal(image.src);
        })
      })

      document.querySelectorAll('.info-right_flag img').forEach(image => {
        image.addEventListener('click', function(){
          openModal(image.src);
        })
      })

      window.addEventListener('click', function(event){
        if (event.target === modal){
          modal.style.display = "none";
        }
      })
}

///////////////////////////////НА ДОРОБОТКУ///////////////////////////////////


// e.preventDefault();
// let href = this.getAttribute('href').substring(1);
// const scrollTarget = document.getElementById(href);
// const topOffset = 150;
// const elementPosition = scrollTarget.getBoundingClientRect().top;
// const offsetPosition = elementPosition - topOffset;
// window.scrollBy({
//   top: offsetPosition,
//   behavior: 'smooth'
// })