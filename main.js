var getHubergerIcon = document.getElementById("hamburger-menu");
    var getHubergerCrossIcon = document.getElementById("hamburger-cross");
    var getMobileMenu = document.getElementById("mobile-menu");

    getHubergerIcon.addEventListener("click", function () {
        console.log("hello");
        getMobileMenu.style.display = "flex";
        setTimeout(function () {
            getMobileMenu.style.transform = "translateX(0%)"; // Slide in the menu
        }, 50); // Add a small delay for better transition effect
    });

    getHubergerCrossIcon.addEventListener("click", function () {
        console.log("hello");
        getMobileMenu.style.transform = "translateX(-100%)"; // Slide out the menu
        setTimeout(function () {
            getMobileMenu.style.display = "none";
        }, 300); // Wait for the transition to end before hiding
    });

    // Check if screen size changes to desktop view and hide mobile menu
    window.addEventListener("resize", function () {
        if (window.innerWidth > 770) {
            getMobileMenu.style.display = "none";
        }
    });





    

    const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        buttons.forEach(btn => {
            if (btn !== button) {
                btn.classList.add('blur');
            }
        });
    });

    button.addEventListener('mouseout', () => {
        buttons.forEach(btn => {
            btn.classList.remove('blur');
        });
    });
});


let h1 = document.querySelectorAll(".what-do-i-h1");

let checkBox0 = () => {
    let trigBottom = (window.innerHeight / 5) * 4;

    h1.forEach((box) => {
        let boxTop = box.getBoundingClientRect().top;

        if (boxTop < trigBottom) {
            box.classList.add("h-1");
        } else {
            box.classList.remove("h-1");
        }
    });
};

window.addEventListener('scroll', checkBox0);
checkBox0();





let boxes1 = document.querySelectorAll(".what-do-container-mini");

let checkBox1 = () => {
    let trigBottom = (window.innerHeight / 5) * 4;

    boxes1.forEach((box) => {
        let boxTop = box.getBoundingClientRect().top;

        if (boxTop < trigBottom) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    });
};

window.addEventListener('scroll', checkBox1);
checkBox1();


let boxes2 = document.querySelectorAll(".what-do-box-2");

let checkBox2 = () => {
    let trigBottom = (window.innerHeight / 5) * 4;

    boxes2.forEach((box) => {
        let boxTop = box.getBoundingClientRect().top;

        if (boxTop < trigBottom) {
            box.classList.add("show-2");
        } else {
            box.classList.remove("show-2");
        }
    });
};

window.addEventListener('scroll', checkBox2);
checkBox2();


let boxes3 = document.querySelectorAll(".what-do-container-mini-2");

let checkBox3 = () => {
    let trigBottom = (window.innerHeight / 5) * 4;

    boxes3.forEach((box) => {
        let boxTop = box.getBoundingClientRect().top;

        if (boxTop < trigBottom) {
            box.classList.add("show-3");
        } else {
            box.classList.remove("show-3");
        }
    });
};

window.addEventListener('scroll', checkBox3);
checkBox3();



let donut = document.querySelectorAll(".professional-skills");

let checkBox4 = () => {
    let trigBottom = (window.innerHeight / 5) * 4;

    donut.forEach((box) => {
        let boxTop = box.getBoundingClientRect().top;

        if (boxTop < trigBottom) {
            box.classList.add("show-4");
        } else {
            box.classList.remove("show-4");
        }
    });
};

window.addEventListener('scroll', checkBox4);
checkBox4();



let Skill = document.querySelectorAll(".technical-skill");

let checkBox5 = () => {
    let trigBottom = (window.innerHeight / 5) * 4;

    Skill.forEach((box) => {
        let boxTop = box.getBoundingClientRect().top;

        if (boxTop < trigBottom) {
            box.classList.add("show-5");
        } else {
            box.classList.remove("show-5");
        }
    });
};

window.addEventListener('scroll', checkBox5);
checkBox5();















let education = document.querySelectorAll(".education-container");

let checkBox6 = () => {
    let trigBottom = (window.innerHeight / 5) * 4;

    education.forEach((box) => {
        let boxTop = box.getBoundingClientRect().top;

        if (boxTop < trigBottom) {
            box.classList.add("show-6");
        } else {
            box.classList.remove("show-6");
        }
    });
};

window.addEventListener('scroll', checkBox6);
checkBox6();



let experience = document.querySelectorAll(".work-experince");

let checkBox7 = () => {
    let trigBottom = (window.innerHeight / 5) * 4;

    experience.forEach((box) => {
        let boxTop = box.getBoundingClientRect().top;

        if (boxTop < trigBottom) {
            box.classList.add("show-7");
        } else {
            box.classList.remove("show-7");
        }
    });
};

window.addEventListener('scroll', checkBox7);
checkBox7();

let portfolio = document.querySelectorAll(".portfolio-container");

let checkBox8 = () => {
    let trigBottom = (window.innerHeight / 5) * 4;

    portfolio.forEach((box) => {
        let boxTop = box.getBoundingClientRect().top;

        if (boxTop < trigBottom) {
            box.classList.add("show-8");
        } else {
            box.classList.remove("show-8");
        }
    });
};

window.addEventListener('scroll', checkBox8);
checkBox8();




window.addEventListener('scroll', checkBox7);
checkBox7();



let portfolio2 = document.querySelectorAll(".portfolio-container-2");

let checkBox9 = () => {
    let trigBottom = (window.innerHeight / 5) * 4;

    portfolio2.forEach((box) => {
        let boxTop = box.getBoundingClientRect().top;

        if (boxTop < trigBottom) {
            box.classList.add("show-9");
        } else {
            box.classList.remove("show-9");
        }
    });
};

window.addEventListener('scroll', checkBox9);
checkBox9();


let footer1 = document.querySelectorAll(".footer-big-box-1");

let checkBox10 = () => {
    let trigBottom = (window.innerHeight / 5) * 4;

    footer1.forEach((box) => {
        let boxTop = box.getBoundingClientRect().top;

        if (boxTop < trigBottom) {
            box.classList.add("footer1");
        } else {
            box.classList.remove("footer1");
        }
    });
};

window.addEventListener('scroll', checkBox10);
checkBox10();



// let footer2 = document.querySelectorAll(".footer-big-box-2");

// let checkBox11 = () => {
//     let trigBottom = (window.innerHeight / 5) * 4;

//     footer2.forEach((box) => {
//         let boxTop = box.getBoundingClientRect().top;

//         if (boxTop < trigBottom) {
//             box.classList.add("footer2");
//         } else {
//             box.classList.remove("footer2");
//         }
//     });
// };

// window.addEventListener('scroll', checkBox11);
// checkBox11();




// let footer3 = document.querySelectorAll(".footer-big-box-3");

// let checkBox12 = () => {
//     let trigBottom = (window.innerHeight / 5) * 4;

//     footer3.forEach((box) => {
//         let boxTop = box.getBoundingClientRect().top;

//         if (boxTop < trigBottom) {
//             box.classList.add("footer3");
//         } else {
//             box.classList.remove("footer3");
//         }
//     });
// };

// window.addEventListener('scroll', checkBox12);
// checkBox12();


function handleScrollAnimation(footerBoxes, className) {
    const trigBottom = (window.innerHeight / 5) * 4;

    footerBoxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < trigBottom) {
           
            box.classList.add(className);
        } else {
            box.classList.remove(className);
        }
    });
}

const footer2 = document.querySelectorAll(".footer-big-box-2");
const footer3 = document.querySelectorAll(".footer-big-box-3");
const email = document.querySelectorAll(".footer-email-box");
const rightText = document.querySelectorAll(".right-text");
const rightBtn = document.querySelectorAll(".right-btn");


function checkBoxAnimation() {
    handleScrollAnimation(footer2, "footer2");
    handleScrollAnimation(footer3, "footer3");
    handleScrollAnimation(email, "email1");
    handleScrollAnimation(rightText, "right-text1");
    handleScrollAnimation(rightBtn, "right-btn1");
}

window.addEventListener('scroll', checkBoxAnimation);

checkBoxAnimation();



// const text = document.querySelectorAll(".right-text");

// let checkBoxAnimation2 = () => {
//     let trigBottom = (window.innerHeight / 5) * 4;

//     text.forEach((box) => {
//         let boxTop = box.getBoundingClientRect().top;

//         if (boxTop < trigBottom) {
//             box.classList.add("footer-text");
//         } else {
//             box.classList.remove("footer-text");
//         }
//     });
// };

// window.addEventListener('scroll', checkBoxAnimation2);
// checkBoxAnimation2();




// function handleScrollRight(footerBoxes, className) {
//     const trigBottom = (window.innerHeight / 5) * 4;

//     footerBoxes.forEach((box) => {
//         const boxTop = box.getBoundingClientRect().top;

//         if (boxTop < trigBottom) {
//             box.classList.add(className);
//         } else {
//             box.classList.remove(className);
//         }
//     });
// }

// const rightText = document.querySelectorAll(".right-text");
// const rightBtn = document.querySelectorAll(".right-btn");

// function checkBoxRight() {
//     handleScrollRight(rightText, "right-text1");
//     handleScrollRight(rightBtn, "right-btn1");
// }

// window.addEventListener('scroll', checkBoxRight);

// checkBoxRight();


// let rightText = document.querySelectorAll(".right-text");
// let rightBtn = document.querySelectorAll(".right-btn");

// function handleScroll() {
//     let trigBottom = (window.innerHeight / 5) * 4;

//     rightText.forEach((box) => {
//         let boxTop = box.getBoundingClientRect().top;

//         if (boxTop < trigBottom) {
//             box.classList.add("right-text1");
//         } else {
//             box.classList.remove("right-text1");
//         }
//     });

//     rightBtn.forEach((box) => {
//         let boxTop = box.getBoundingClientRect().top;

//         if (boxTop < trigBottom) {
//             box.classList.add("right-btn1");
//         } else {
//             box.classList.remove("right-btn1");
//         }
//     });
// }

// window.addEventListener('scroll', handleScroll);
// handleScroll(); 











// document.addEventListener("DOMContentLoaded", function() {
//     const navItems = document.querySelectorAll('.nav-items>ul>li');

//     navItems.forEach(item => {
//         item.addEventListener('click', function() {
//             navItems.forEach(item => {
//                 item.classList.remove('active');
//             });

//             this.classList.add('active');
//         });
//     });
// });














document.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var uploadIcon = document.querySelector('.upload');

    if (scrollPosition > 100) {
        uploadIcon.style.bottom = '20px'; 
    } else {
        uploadIcon.style.bottom = '-100px';
    }
});



document.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var navbar = document.querySelector('.navbar');

    if (scrollPosition > 100) {
        navbar.style.backgroundColor = '#141214';
        navbar.style.transition = 'background-color 0.3s ease'; 

    } else {

        navbar.style.backgroundColor = 'rgb(16, 14, 22)';
        navbar.style.transition = 'background-color 0.3s ease'; 


    }
});




// document.addEventListener("DOMContentLoaded", () => {
//     setTimeout(() => {
//         hideLoader();
//         showContent();
//     }, 3000); 

//     function hideLoader() {
//         const loader = document.getElementById("banter-loader");
//         loader.style.display = "none";
//     }

//     function showContent() {
//         const content = document.getElementById("content");
//         content.style.display = "block";
//     }
// });


document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        hideLoader();
        showContent();
        showFooter();
    }, 3000); 

    function hideLoader() {
        const loader = document.getElementById("banter-loader");
        loader.style.display = "none";
    }

    function showContent() {
        const contentContainer = document.getElementById("content-container");
        contentContainer.classList.remove("hidden");
    }
    function showFooter() { 
        const footer = document.getElementById("footer");
        footer.classList.remove("hidden");
    }
});
