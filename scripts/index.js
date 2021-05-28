"use strict"
"use strict";
let data = [{
        CourseId: "19SUM100",
        Title: "Introduction to HTML/CSS/Git",
        Instructor: "Wyatt",
        Location: "Classroom 1",
        StartDate: "07/08/19",
        Fee: 100.00,
    },
    {
        CourseId: "19SUM200",
        Title: "Introduction to JavaScript",
        Instructor: "Lynn",
        Location: "Classroom 1",
        StartDate: "07/22/19",
        Fee: 350.00,
    },
    {
        CourseId: "19SUM300",
        Title: "Introduction to Node.JS and Express",
        Instructor: "Gross",
        Location: "Classroom 3",
        StartDate: "09/09/19",
        Fee: 50.00,
    },
    {
        CourseId: "19SUM400",
        Title: "Introduction to SQL and Databases",
        Instructor: "Wyatt",
        Location: "Classroom 4",
        StartDate: "09/16/19",
        Fee: 50.00,
    },
    {
        CourseId: "19SUM500",
        Title: "Introduction to Angular",
        Instructor: "Lynn",
        Location: "Classroom 5",
        StartDate: "09/23/19",
        Fee: 50.00,
    },
    {
        CourseId: "19SUM600",
        Title: "Introduction to Ruby",
        Instructor: "Lynn",
        Location: "Classroom 6",
        StartDate: "07/22/19",
        Fee: 350.00,
    },
    {
        CourseId: "19SUM700",
        Title: "Introduction to Zoom Ettiquete",
        Instructor: "Gross",
        Location: "Classroom 7",
        StartDate: "09/09/19",
        Fee: 50.00,
    },
    {
        CourseId: "19SUM800",
        Title: "Introduction to Professionalism",
        Instructor: "Wyatt",
        Location: "Classroom 8",
        StartDate: "09/16/19",
        Fee: 50.00,
    },
    {
        CourseId: "19SUM900",
        Title: "Introduction to Sketching",
        Instructor: "Lynn",
        Location: "Classroom 9",
        StartDate: "09/23/19",
        Fee: 50.00,
    },
    {
        CourseId: "19SUM1000",
        Title: "Introduction to Physiology of the Speech and Hearing Mechanisms",
        Instructor: "Lynn",
        Location: "Classroom 10",
        StartDate: "09/23/19",
        Fee: 50.00,
    }
];

window.onload = function(){
    loadCoursesDropdown();
}
function loadCoursesDropdown(){
    const coursesDropdown = document.getElementById("coursesDropdown");

    let selectOneOption = new Option("select one ...");
    coursesDropdown.appendChild(selectOneOption);

    for(let i = 0; i < data.length; i++){
        let theOption = document.createElement("option");
        theOption.textContent = data[i].Title;
        theOption.value = data[i].CourseId;
        coursesDropdown.appendChild(theOption);
    }
}