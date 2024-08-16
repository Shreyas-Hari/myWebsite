const baseUrl = "https://api.github.com/repos/Shreyas-Hari/my-website/contents/";

document.getElementById("dark-mode-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const toggleBtn = document.getElementById("dark-mode-toggle");
    const isDarkModeOn = document.body.classList.contains("dark-mode");

    toggleBtn.innerText = isDarkModeOn ? "☀️" : "🌓";
});

function showSkills(category) {
    const languages = document.getElementById('languages');
    const technologies = document.getElementById('technologies');
    const languagesTab = document.getElementById('languagesTab');
    const technologiesTab = document.getElementById('technologiesTab');

    if (category === 'languages') {
        languages.classList.remove('hidden');
        technologies.classList.add('hidden');
        languagesTab.classList.add('bg-gray-400');
        technologiesTab.classList.remove('bg-gray-400');
    } else {
        languages.classList.add('hidden');
        technologies.classList.remove('hidden');
        languagesTab.classList.remove('bg-gray-400');
        technologiesTab.classList.add('bg-gray-400');
    }
}

function showCoursework(category) {
    const mathCs = document.getElementById('mathCs');
    const business = document.getElementById('business');
    const mathCsTab = document.getElementById('mathCsTab');
    const businessTab = document.getElementById('businessTab');

    if (category === 'mathCs') {
        mathCs.classList.remove('hidden');
        business.classList.add('hidden');
        mathCsTab.classList.add('bg-gray-400');
        businessTab.classList.remove('bg-gray-400');
    } else {
        mathCs.classList.add('hidden');
        business.classList.remove('hidden');
        mathCsTab.classList.remove('bg-gray-400');
        businessTab.classList.add('bg-gray-400');
    }
}

document.getElementById('mathCsTab').click();

particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#888888'
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            },
            polygon: {
                nb_sides: 5
            }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#888888',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: false
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});

const elevator = new Elevator({
    mainAudio: "https://raw.githubusercontent.com/tholman/elevator.js/master/demo/music/elevator.mp3",
    endAudio: "https://raw.githubusercontent.com/tholman/elevator.js/master/demo/music/ding.mp3",
    duration: 5000,
});

const footer = document.createElement("footer");
footer.className = "mt-8 mb-4";
const footerContent = document.createElement("div");
footerContent.className = "flex items-center justify-between";
footer.appendChild(footerContent);

const elevatorBtnDiv = document.createElement("div");
elevatorBtnDiv.innerHTML = 'Click Me - Enjoy :)&nbsp;&nbsp;<i class="fas fa-elevator"></i>&nbsp;&nbsp;';
elevatorBtnDiv.className = "absolute bottom-4 right-4 flex items-center cursor-pointer";
elevatorBtnDiv.onclick = () => {
    elevator.elevate();
};

footerContent.appendChild(elevatorBtnDiv);
document.body.appendChild(footer);

const scrollDownBtn = document.getElementById('scroll-down-btn');
const headerContainer = document.getElementById('header-container');

const toggleScrollButtonVisibility = () => {
    if (window.pageYOffset === 0) {
        scrollDownBtn.style.display = 'flex';
    } else {
        scrollDownBtn.style.display = 'none';
    }
};

scrollDownBtn.addEventListener('click', () => {
    const yOffset = headerContainer.getBoundingClientRect().bottom + window.pageYOffset;
    window.scrollTo({top: yOffset, behavior: 'smooth'});
});

window.addEventListener('scroll', toggleScrollButtonVisibility);
toggleScrollButtonVisibility();
