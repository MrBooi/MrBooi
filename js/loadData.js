
const skillsElem = document.querySelector(".ul-skills");
const projectElem = document.querySelector('.project-display');

const templateSource = document.querySelector(".skills-Template").innerHTML;
const skillsTemplate = Handlebars.compile(templateSource);

const projectTemplateSource = document.querySelector('.project-Template').innerHTML;
const projectTemplate = Handlebars.compile(projectTemplateSource);




let listOfSkills = [
    'Flutter',
    'Dart',
    'JavaScript',
    'Node js',
    'Firebase',
    'MongoDB',
    'PostgreSql',
    'CSS',
    'React',
    'Bootstrap',
    'Java',
    'Mocha',
    'HandleBars',
    'Travis CI',
    // 'Jest',
    // 'Redis',
    // 'Docker'
];

const projects = [{
    'projectName': "CHATTING APP",
    'projectDescription': "Small chatting app build with Flutter",
    'poster': './img/background6.jpg',
    'githubUrl': 'https://github.com/MrBooi/chattingAppWithFlutter',
    'projectUrl': '',
    'status': 'Coming soon'

},

{
    'projectName': "Brain App",
    'projectDescription': "Face Recognition app build with React",
    'poster': './img/smart-brain.jpeg',
    'githubUrl': 'https://github.com/MrBooi/React-faceRecognitionBrain-App',
    'projectUrl': 'https://mrbooi.github.io/React-faceRecognitionBrain-App/',
    'status': 'View project'

},

// {
//     'projectName': "Waiter App",
//     'projectDescription': "Allow waiter's to sechedule their working days",
//     'poster': './img/background6.jpg',
//     'githubUrl': 'https://github.com/MrBooi/waiter_webapp',
//     'projectUrl': 'https://booi-waiter-app.herokuapp.com/',
//     'status': 'View project'
// },
{
    'projectName': "Registration App",
    'projectDescription': "Allow user to add and filter registrations",
    'poster': './img/registration.jpeg',
    'githubUrl': 'https://github.com/MrBooi/registration_number-webapp',
    'projectUrl': 'https://booi-registration-webapp.herokuapp.com/',
    'status': 'View project'
}



]

const skills = () => listOfSkills;

const latestProjects = () => projects;


window.addEventListener('DOMContentLoaded', (event) => {
    console.log(skills())
    skillsElem.innerHTML =
        skillsTemplate({
            skills: skills()
        });

    // projectElem.innerHTML = projectTemplate({
    //     data: latestProjects()
    // });
});