
const windowSize = $(window).width()
console.log(windowSize);

// $(window).resize(() => {

// })

//  if ($(window).width() < 768) {
//     $('i.fa-bars').on('click', (event) =>  {
//         $("a.nav-links").css("display", "unset")
//         $("a.nav-links").css("flex-direction", "column")
//         $("a.nav-links").css("position", "relative")
//         $("a.nav-links").css("left", "25rem")
//         $("a.nav-links").css("bottom", "1.3rem")
//         $("a.nav-links").css("left", "25rem")
//         $("a.nav-links").css("color", "#750ff7")  
//     })
//     } 
    // else {
    //     $("a.nav-links").css("display", "unset")
    //     $("a.nav-links").css("flex-direction", "column")
    //     $("a.nav-links").css("position", "relative")
    //     $("a.nav-links").css("left", "25rem")
    //     $("a.nav-links").css("bottom", "1.3rem")
    //     $("a.nav-links").css("left", "25rem")
    //     $("a.nav-links").css("color", "#750ff7")
    //     }

$.ajax("https://spreadsheets.google.com/feeds/list/1hoUmuy23O3N7PikDWrUvcJ3dfOLzJoTthG9BYNMTgoI/1/public/full?alt=json")
//.then for when the data when arrives
.then((data) => {
    console.log(data)
    const projects = data.feed.entry.map((item) => {
        return {
            description: item.gsx$description.$t,
            giturl: item.gsx$giturl.$t,
            project: item.gsx$project.$t,
            image: item.gsx$image.$t,
            liveurl: item.gsx$liveurl.$t
        }
    })
    console.log("projects", projects);
    projects.forEach((arrItem) => {
        // appended div to section with class of 'projects'
        // $(`<div>`).addClass("cards").appendTo("section.projects")
        // $(`<p>${arrItem.project}</p>`).addClass("project-name").appendTo("cards")
        // $(`<p> ${arrItem.description}</p>`).addClass("description").appendTo("cards")
        // $(`<a>${arrItem.giturl}</a>`).addClass("giturl").appendTo("cards")
        // $(`<a>${arrItem.liveurl}</a>`).addClass("liveurl").appendTo("cards")
        // console.log(arrItem);
        
        const $projectCard = $(`
            <div class="cards">
            <img src="${arrItem.image}">
            <h5>${arrItem.project}</h5>
            <p class="project-description">${arrItem.description}</p>
            <a href="${arrItem.liveurl}" target="_blank"><i class="fab fa-chrome"></i></a>
            <a href="${arrItem.giturl}" target="_blank"><i class="fab fa-github"></i></a>
           
            </div>
        `)
        $projectCard.appendTo(`section.projects`)
    })
}
)
//.catch in case of an error
.catch((error) => {
    console.error(error)
})
console.log($(window).width())





     
  

