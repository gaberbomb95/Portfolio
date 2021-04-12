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
})
//.catch in case of an error
.catch((error) => {
    console.error(error)
})