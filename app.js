const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

function toggleSubmenu(e) {
    if (window.innerWidth <= 1010) {
        e.preventDefault();
        const parent = e.target.closest('li');
        parent.classList.toggle('active');
    }
}

if (window.innerWidth > 768) {
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.8
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
}


const image = document.getElementById('caseImage');
const section = document.querySelector('.sticky-section');

window.addEventListener('scroll', () => {
    const rect = section.getBoundingClientRect();
    const scrollY = window.scrollY;
    if (scrollY > 100 && scrollY < 800) {
        image.classList.add('hidden');
    } else {
        image.classList.remove('hidden');
        image.classList.add('visible');
    }
});


const track = document.getElementById("carousel-track");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let scrollAmount = 0;
const cardWidth = 320; // 300px card + 20px margin

function moveNext() {
    scrollAmount += cardWidth;
    if (scrollAmount >= track.scrollWidth - track.clientWidth) {
        scrollAmount = 0; // loop to start
    }
    track.style.transform = `translateX(-${scrollAmount}px)`;
}

function movePrev() {
    scrollAmount -= cardWidth;
    if (scrollAmount < 0) {
        scrollAmount = track.scrollWidth - track.clientWidth;
    }
    track.style.transform = `translateX(-${scrollAmount}px)`;
}

nextBtn.addEventListener("click", moveNext);
prevBtn.addEventListener("click", movePrev);

// Auto-scroll every 4 seconds
setInterval(moveNext, 4000);


// tab section

const techStacks = {
    frontend: [
        { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
        { name: 'Ember', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ember/ember-original-wordmark.svg' },
        { name: 'Meteor', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/meteor/meteor-original.svg' },
        { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg' },
    ],
    backend: [
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'Ruby', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg' },
    ],
    mobile: [
        { name: 'Android', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
        { name: 'iOS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg' },
        { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
        { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    ],
    bigdata: [
        { name: 'Hadoop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg' },
        { name: 'Spark', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg' },
    ],
    database: [
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    ],
    cloud: [
        { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
        { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
        { name: 'Google Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
    ]
};

function loadTech(tab) {
    const content = document.getElementById('techContent');
    content.innerHTML = `
      <div class="tech-grid">
        ${techStacks[tab].map(item => `
          <div class="tech-item">
            <img src="${item.icon}" alt="${item.name}" />
            <span>${item.name}</span>
          </div>
        `).join('')}
      </div>
    `;
}

document.querySelectorAll('#menuList li').forEach(li => {
    li.addEventListener('click', () => {
        document.querySelectorAll('#menuList li').forEach(el => el.classList.remove('active'));
        li.classList.add('active');
        const tab = li.getAttribute('data-tab');
        loadTech(tab);
    });
});

// Load default tab
loadTech('frontend');


const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        faqItems.forEach(i => {
            if (i !== item) i.classList.remove('open');
        });
        item.classList.toggle('open');
    });
});
