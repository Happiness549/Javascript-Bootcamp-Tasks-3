const studentDatabase = [{
    firstName: "Happiness",
    lastName: "Mhlongo",
    email: "happymhlongo@gmail.com",
    course: "Software Engineering",
    age: 22,
    id: 1

    },{
    firstName: "Yandisa",
    lastName: "Ncayiyana",
    email: "Yandincayiyana@gmail.com",
    course: "Software Development",
    age: 30,
    id: 2

    },{
    firstName: "Pretty",
    lastName: "Hadebe",
    email: "prettylady@gmail.com",
    course: "Frontend Development",
    age: 33,
    id: 3
    },{
    firstName: "Andisa",
    lastName: "Duna",
    email: "andisaduna@gmail.com",
    course: "Backend Development",
    age: 19,
    id: 4
    },{
    firstName: "Polite",
    lastName: "Sibalukhulu",
    email: "sibapolite@gmail.com",
    course: "Computer Science",
    age: 20,
    id: 5
    }
]

function synchronousDemo() {
    console.log("The function is starting");
    console.log("The Process is in action");
    console.log("The function reached the final stage");


}

synchronousDemo()



function displayStudents() {
    setTimeout(function () {
        console.log(studentDatabase);
    }, 3000);
}

displayStudents();


 
