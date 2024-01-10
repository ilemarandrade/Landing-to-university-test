function desingCourseCard(container, elements) {
    var print = "";

    elements.forEach(function ({ name, img }) {
        print += `
                <div class="col-6 col-md py-2 py-sm-4 d-flex justify-content-center justify-content-lg-start">
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
               <div class="benefits d-flex flex-column justify-content-center align-items-center col-lg-3 col-6 mb-4 mb-lg-0">
                    <div class="bg-light rounded-circle p-4 w-50">
                        <img class="fill-with-img" src="${img}" />
                    </div>
                    <h3 class="text-center text-light mt-2 mt-md-4">${name}</h3>
                </div>
        `;
    })


    printer(container, print)

}

function desingOurTeam(container, elements) {
    var print = "";

    elements.forEach(function ({ name, role, img }) {
        print += `
        <div class="col-6 col-md py-2 py-sm-4 d-flex justify-content-center justify-content-lg-start">
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
                    <p class="text-center h3 text-primary font-weight-bold mb-0">${name}</p>
                    <p class="text-center h3 text-secondary mb-0">${role}</p>
                    </div>
                    <div class="flex-1 d-flex justify-content-center align-items-end">
                    <button class="btn btn-outline-secondary">Read More</button>
                    </div>
                </div>
            </div>
        </div>    
        `;
    })


    printer(container, print)

}


function desingOurTeamCarousel(container, elements) {
    var print = "";

    elements.forEach(function ({ name, role, img }, index) {
        print += `
    <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 ${!index ? "active": "" }">    
        <div class="py-2 py-sm-4 d-flex justify-content-center justify-content-lg-start">
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
                    <p class="text-center h3 text-primary font-weight-bold mb-0">${name}</p>
                    <p class="text-center h3 text-secondary mb-0">${role}</p>
                    </div>
                    <div class="flex-1 d-flex justify-content-center align-items-end">
                    <button class="btn btn-outline-secondary">Read More</button>
                    </div>
                </div>
            </div>
        </div>    
    </div>    
        `;

    })

    // print+= `
    // <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">    
    // </div>

    // `
    printer(container, print)

}

