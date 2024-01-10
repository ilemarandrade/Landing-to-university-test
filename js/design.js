function desingCourseCard(container, elements) {
    var print = "";

    elements.forEach(function ({ name, img }, index) {
        print += `
                <div class="col-12 col-sm py-2 py-sm-4 d-flex justify-content-${index % 2 ? "end" : "start"} justify-content-sm-start">
                    <div class="card d-flex flex-column bg-light">
                        <div class="card-container-img-course">
                            <img class="w-100" src="${img}" />
                        </div>
                        <div class="p-2 pb-3 card-content-course d-flex flex-column align-items-center justify-content-between">
                            <p class="font-weight-bold">${name}</p>
                            <button class="btn btn-secondary">Read More</button>
                        </div>
                    </div>
                </div>
        `;
    })


    printer(container, print)

}

function desingBenefits(container, elements) {
    var print = "";

    elements.forEach(function ({ name, img }) {
        print += `
               <div class="d-flex justify-content-center align-items-center col-lg-3 col-6 mb-4 mb-lg-0">
                    <div class="benefits d-flex flex-column align-items-center">     
                        <div class="bg-light rounded-circle p-4 w-50">
                            <img class="fill-with-img" src="${img}" />
                        </div>
                        <h3 class="h4 h3-md font-weight-bold text-center text-light mt-2 mt-md-4">${name}</h3>
                    </div>
                </div>
        `;
    })


    printer(container, print)

}

function desingOurTeam(container, elements) {
    var print = "";

    elements.forEach(function ({ name, role, img }) {
        print += `
        
        <div class="slide py-2">
            <div class="card">
                <div class="wall position-relative">
                    <div class="position-absolute bg-filter-main w-100 h-100"></div>
                    <img class="fill-with-img" src="/assets/backgrounds/IMAGEBACKGROUNDWALLTEAM.jpg" />
                    <div class="container-avatar d-flex justify-content-center">
                    <img class="avatar fill-with-img" src="${img}" />
                    </div>
                </div>
                <div class="d-flex flex-column flex-grow-1 pb-4 ">
                    <div class="flex-1"></div>
                    <div class="flex-1 justify-content-center d-flex flex-column">
                    <p class="text-center h5 h4-md text-primary font-weight-bold mb-0">${name}</p>
                    <p class="text-center h5 h4-md text-secondary mb-0">${role}</p>
                    </div>
                    <div class="flex-1 d-flex justify-content-center align-items-end">
                    <button class="btn btn-outline-secondary px-3" style="font-size: 0.8rem">Read More</button>
                    </div>
                </div>
            </div>
        </div>    
        `;
    })


    printer(container, print, "team")
}


function desingReviewsCarousel(container, elements) {
    var print = "";

    elements.forEach(function ({ name, img }) {
        print += `
        <div class="slide pb-3 h-100">
            <div class="w-100 position-relative h-100 w-100 d-flex align-items-center">
                <img class="review-video" src="${img}" />
                <div class="container-name-review">
                    <p>${name}</p>
                </div>
                <div class="play-button" data-toggle="modal" data-target="#modal-video" data-name="${name}"><i class="bi bi-play-fill"></i></div>
            </div>
        </div>
        `;

    })

    printer(container, print, "reviews");
}


function desingCareers(container, elements) {
    var print = "";

    elements.forEach((carrers) => {
        let careersElements = ""
        console.log(carrers)
        carrers.forEach(({ name, img, classCustom }, index) => {
            careersElements += `
                <div class="${classCustom} py-2">
                        <div class="career p-3 d-flex align-items-end " style="background-image: linear-gradient(45deg, #02557d7a, #02557d7a), url('${img}'); background-size: cover; background-repeat: no-repeat">
                            <div class="w-100">
                                <p class="w-100 h4 text-white mb-3 font-weight-bold text-truncate">${name}</p>
                                <button class="btn-border-white btn btn-secondary">Explore</button>
                            </div>
                        </div>
                </div>
                `});

        print += `
        <div class="col-12 col-md-6">
            <div class="row h-100">
                ${careersElements}
            </div>
        </div>    

    `})
    printer(container, print)

}

