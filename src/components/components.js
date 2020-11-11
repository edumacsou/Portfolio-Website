class social{
    constructor(name, link, icon){
        this.name = name;
        this.link = link;
        this.icon = icon;
    }
}

class projectData{
    constructor(name, photo, description, link){
        this.name = name;
        this.photo = photo;
        this.description = description;
        this.link = link;
    }
}

export const projectsData = [
    new projectData('Snake Game', 'https://i.imgur.com/82afSt6.jpg?1','A simple snake game created with the Pygame library, and original sprites.','https://github.com/edumacsou/Snake-Game'),
    new projectData('Enigma Machine', 'https://i.imgur.com/yxZpmSE.png',"A digital version of an electromechanical dispositive. The concepts of object-oriented programming make it possible to transcript this machine into a code. It was developed with the purpose of learning about cipher and developing programing skills.",'https://github.com/edumacsou/Enigma-Machine'),
    new projectData('Fractal Tree', 'https://i.imgur.com/OqMi59f.png','A fractal is a figure with a repetitive pattern: a small part of it is similar to the entire figure, which is called self-similar. This project is a python visual application that uses recursion to construct a colored fractal tree.','https://github.com/edumacsou/Fractal-Tree'),
    new projectData('Numerical Analysis', 'https://i.imgur.com/nLAHaDb.jpg','An implementation of the functions used in numerical analysis: Chebyshev, Newton, Lagrange, and divided differences.','https://github.com/edumacsou/Numerical-Analysis'),
    new projectData('DevMedia Jr. Exam', 'https://i.imgur.com/g7MwyoX.jpg','A Front-End application in pure HTML and CSS made in just 120 minutes as a personal challenge.','https://github.com/edumacsou/DevMedia-Exam'),
    new projectData('Sudoku Solver', 'https://i.imgur.com/EZWWgYF.png','A command-line application that solves sudoku using the brute force method and recursion. Sudoku is a Japanese game where you must complete a table with 81 cells.','https://github.com/edumacsou/Sudoku-Solver'),
]

export const socials = [
    new social("GitHub", "https://github.com/edumacsou", 'https://i.imgur.com/S7DEfre.png'),
    new social("LinkedIn", "https://www.linkedin.com/in/edumacsou/", 'https://i.imgur.com/L1EgGWH.png'),
    new social("WhatsApp", "https://api.whatsapp.com/send?phone=5511992344399", 'https://i.imgur.com/HBQJINK.png'),
    new social("E-mail", "mailto:edu.maciel@yahoo.com.br",'https://i.imgur.com/mJwCye1.png?2'),
    // new social("Curriculum", "./CV_Portugues.pdf",'https://i.imgur.com/DHgkLl8.png')
]