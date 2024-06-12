function changeReviews() {
    const reviews = [
        {
            name: "Karel D.",
            review: "Ik heb De Tuinspecialist ingeschakeld voor het onderhoud van mijn tuin, en ik ben meer dan tevreden. Paul en zijn team zijn zeer betrouwbaar en hebben mijn tuin altijd in perfecte staat gehouden. Ze werken efficiënt en hebben een scherp oog voor detail. Het is een geruststelling om te weten dat mijn tuin in goede handen is.",
        },
        {
            name: "Monique J.",
            review: "De Tuinspecialist heeft mijn tuin volledig getransformeerd. Het ontwerp dat Paul voorstelde, was precies wat ik voor ogen had, en de aanleg werd met uiterste precisie uitgevoerd. Mijn tuin ziet er nu uit als een waar paradijs, en ik krijg constant complimenten van buren en vrienden. Ik ben enorm dankbaar voor hun professionaliteit en creativiteit!",
        },
        {
            name: "Jeroen V.",
            review: "Na jaren van verwaarlozing had mijn achtertuin dringend een make-over nodig. Paul van De Tuinspecialist heeft een geweldig plan voorgesteld en het resultaat is verbluffend. De nieuwe beplanting en het vernieuwde terras maken mijn tuin tot een heerlijke plek om te ontspannen. De vakkennis en passie van het team zijn duidelijk te zien in het eindresultaat. Ik kan hen van harte aanbevelen!",
        },
    ];

    $('.dot').removeClass('active');
    $(this).addClass('active');

    const dotIndex = $('.dot').index(this);
    const reviewContainer = $('.review-wrapper');

    reviewContainer.find('.review-author').text(reviews[dotIndex].name);
    reviewContainer.find('.review-body').text(reviews[dotIndex].review);
};

$('.dot').click(changeReviews);

function animate(obj, initVal, lastVal, duration) {
    let startTime = null;
    
    const step = (currentTime) => {
        if (!startTime) {
            startTime = currentTime;
        }
    
        const progress = Math.min((currentTime - startTime) / duration, 1);
        obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);
    
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    
    window.requestAnimationFrame(step);
}

let text1 = document.getElementById('animated-1');
let text2 = document.getElementById('animated-2');
let text3 = document.getElementById('animated-3');

let animatedSection = document.getElementById('animated-section');

function load() {
    animate(text1, 0, 15127, 3000);
    animate(text2, 0, 167400, 3000);
    animate(text3, 0, 2100, 3000);
}

// Intersection Observer configuration
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
};

// Flag to ensure load() runs only once
let hasRun = false;

const sectionObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !hasRun) {
        load();
        hasRun = true;
        // Disconnect the observer after running the animation
        sectionObserver.disconnect();
    }
}, observerOptions);

sectionObserver.observe(animatedSection);