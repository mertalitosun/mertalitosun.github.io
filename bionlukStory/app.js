class Story {
    constructor(imgSrc, title, description,link) {
      this.imgSrc = imgSrc;
      this.title = title;
      this.description = description;
      this.link=link;
    }
  
    show() {
      const storyDiv = document.createElement("div");
      storyDiv.classList.add("story-container");
      storyDiv.innerHTML = `
        <div class="story">
          <img src="${this.imgSrc}" alt="${this.title}">
        </div>
        <div class="story-text">
          <h3>${this.title}</h3>
          <p>${this.description}</p>
        </div>
      `;
      storyDiv.addEventListener("click", () => this.play());
      document.querySelector(".story-wrapper").appendChild(storyDiv);
    }
  
    play() {
      const popup = document.querySelector('.popup');
      const closeBtn = document.querySelector('.close');
      popup.style.display = 'block';

      const imgLink = document.createElement("a");
      imgLink.href=this.link;
      const storyImg = document.createElement("img");
      storyImg.classList.add("story-image");
      storyImg.src = this.imgSrc;
      document.querySelector(".popup-content").appendChild(imgLink);
      document.querySelector("a").appendChild(storyImg);
      

      closeBtn.addEventListener('click', () => {
        storyImg.remove();
        popup.style.display = 'none';
      });
    }
    
  }
  
  const story1 = new Story("bionlukStory.jpeg", "Story Title 1", "Story description goes here","https://mertalitosun.github.io/");
  story1.show();
  
  const story2 = new Story("bionlukStory.jpeg", "Story Title 2", "Story description goes here","https://mertalitosun.github.io/");
  story2.show();
  
  const story3 = new Story("bionlukStory.jpeg", "Story Title 3", "hello","https://mertalitosun.github.io/");
  story3.show();
  
  // add more stories as needed
  