function move_shit1() {
    Array.from(document.getElementsByClassName("anime_content")).forEach((e) => {
        e.style.display = "none";
    })
        Array.from(document.getElementsByClassName("movie_content")).forEach((e) => {
            e.style.display = "none";
        })
    
        Array.from(document.getElementsByClassName("webseries_content")).forEach((e) => {
            e.style.display = "none";
        })
    
        Array.from(document.getElementsByClassName("games_content")).forEach((e) => {
            e.style.display = "none";
        })
    Array.from(document.getElementsByClassName("scroll_anime")).forEach((e) => {
        e.style.display = "grid";
        e.classList.add("scroll_animation_1");
        let btn = document.querySelector(".anime_btn");
        var x=100
        setInterval(() => {
            if(x>60)
            {
                btn.style.background= "linear-gradient(320deg, red "+x+"%,blue  60%)";
                x--;  
            }
        }, 50);
    })

    Array.from(document.getElementsByClassName("scroll_movies")).forEach((e) => {
        e.style.display = "none";
    })

    Array.from(document.getElementsByClassName("scroll_web_series")).forEach((e) => {
        e.style.display = "none";
    })

    Array.from(document.getElementsByClassName("scroll_games_and_resources")).forEach((e) => {
        e.style.display = "none";
    })
}
function move_shit2() {
    Array.from(document.getElementsByClassName("anime_content")).forEach((e) => {
        e.style.display = "none";
    })
        Array.from(document.getElementsByClassName("movie_content")).forEach((e) => {
            e.style.display = "none";
        })
    
        Array.from(document.getElementsByClassName("webseries_content")).forEach((e) => {
            e.style.display = "none";
        })
    
        Array.from(document.getElementsByClassName("games_content")).forEach((e) => {
            e.style.display = "none";
        })
    Array.from(document.getElementsByClassName("scroll_anime")).forEach((e) => {
        e.style.display = "none";
    })

    Array.from(document.getElementsByClassName("scroll_movies")).forEach((e) => {
        e.style.display = "grid";
        e.classList.add("scroll_animation_2");
        let btn = document.querySelector(".movie_btn");
        var x=100
        setInterval(() => {
            if(x>60)
            {
                btn.style.background= "linear-gradient(320deg, rgb(163, 163, 163) "+x+"%,black  60%)";
                x--;  
            }
        }, 50);
    })

    Array.from(document.getElementsByClassName("scroll_web_series")).forEach((e) => {
        e.style.display = "none";
    })

    Array.from(document.getElementsByClassName("scroll_games_and_resources")).forEach((e) => {
        e.style.display = "none";
    })
}
function move_shit3() {
    Array.from(document.getElementsByClassName("anime_content")).forEach((e) => {
        e.style.display = "none";
    })
        Array.from(document.getElementsByClassName("movie_content")).forEach((e) => {
            e.style.display = "none";
        })
    
        Array.from(document.getElementsByClassName("webseries_content")).forEach((e) => {
            e.style.display = "none";
        })
    
        Array.from(document.getElementsByClassName("games_content")).forEach((e) => {
            e.style.display = "none";
        })
    Array.from(document.getElementsByClassName("scroll_anime")).forEach((e) => {
        e.style.display = "none";
    })

    Array.from(document.getElementsByClassName("scroll_movies")).forEach((e) => {
        e.style.display = "none";
    })

    Array.from(document.getElementsByClassName("scroll_web_series")).forEach((e) => {
        e.style.display = "flex";
        e.classList.add("scroll_animation_2");
        let btn = document.querySelector(".web_btn");
        var x=100
        setInterval(() => {
            if(x>60)
            {
                btn.style.background= "linear-gradient(320deg, rgb(163, 163, 163) "+x+"%,black  60%)";
                x--;
            }
        }, 50);
    })

    Array.from(document.getElementsByClassName("scroll_games_and_resources")).forEach((e) => {
        e.style.display = "none";
    })
}
function move_shit4() {
    Array.from(document.getElementsByClassName("anime_content")).forEach((e) => {
        e.style.display = "none";
    })
        Array.from(document.getElementsByClassName("movie_content")).forEach((e) => {
            e.style.display = "none";
        })
    
        Array.from(document.getElementsByClassName("webseries_content")).forEach((e) => {
            e.style.display = "none";
        })
    
        Array.from(document.getElementsByClassName("games_content")).forEach((e) => {
            e.style.display = "none";
        })
    Array.from(document.getElementsByClassName("scroll_anime")).forEach((e) => {
        e.style.display = "none";
    })

    Array.from(document.getElementsByClassName("scroll_movies")).forEach((e) => {
        e.style.display = "none";
    })

    Array.from(document.getElementsByClassName("scroll_web_series")).forEach((e) => {
        e.style.display = "none";
    })

    Array.from(document.getElementsByClassName("scroll_games_and_resources")).forEach((e) => {
        e.style.display = "flex";
        e.classList.add("scroll_animation_3");
        let btn = document.querySelector(".game_btn");
        var x=100
        setInterval(() => {
            if(x>60)
            {
                btn.style.background= "linear-gradient(320deg, red "+x+"%,blue  60%)";
                x--;  
            }
        }, 50);
    })
}

/**************locomotive**************/

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    lerp: 0.05,
    getSpeed: true,
    getDirection: true,
});



/*********SHOWING THE CONTENT BOXES***********/
function show_content1() {
    Array.from(document.getElementsByClassName("anime_content")).forEach((e) => {
        e.style.display = "grid";
        e.classList.add("show_content_box_1_2");
    })
        Array.from(document.getElementsByClassName("movie_content")).forEach((e) => {
            e.style.display = "none";
        })
    
        Array.from(document.getElementsByClassName("webseries_content")).forEach((e) => {
            e.style.display = "none";
        })
    
        Array.from(document.getElementsByClassName("games_content")).forEach((e) => {
            e.style.display = "none";
        })
}
function show_content2() {
    Array.from(document.getElementsByClassName("anime_content")).forEach((e) => {
        e.style.display = "none";
    })
        Array.from(document.getElementsByClassName("movie_content")).forEach((e) => {
            e.style.display = "grid";
            e.classList.add("show_content_box_1_2");
        })
    
        Array.from(document.getElementsByClassName("webseries_content")).forEach((e) => {
            e.style.display = "none";
        })
    
        Array.from(document.getElementsByClassName("games_content")).forEach((e) => {
            e.style.display = "none";
        })
}
function show_content3() {
    Array.from(document.getElementsByClassName("anime_content")).forEach((e) => {
        e.style.display = "none";
    })
        Array.from(document.getElementsByClassName("movie_content")).forEach((e) => {
            e.style.display = "none";
        })
    
        Array.from(document.getElementsByClassName("webseries_content")).forEach((e) => {
            e.style.display = "grid";
            e.classList.add("show_content_box_3_4");
        })
    
        Array.from(document.getElementsByClassName("games_content")).forEach((e) => {
            e.style.display = "none";
        })
}
function show_content4() {
    Array.from(document.getElementsByClassName("anime_content")).forEach((e) => {
        e.style.display = "none";
    })
        Array.from(document.getElementsByClassName("movie_content")).forEach((e) => {
            e.style.display = "none";
        })
    
        Array.from(document.getElementsByClassName("webseries_content")).forEach((e) => {
            e.style.display = "none";
        })
    
        Array.from(document.getElementsByClassName("games_content")).forEach((e) => {
            e.style.display = "grid";
            e.classList.add("show_content_box_3_4");
        })
}