import { v4 as uuid } from "uuid";

const courseModel = [
    {
        id: uuid(), // Unique identifier for the course
        name: 'Introduction to React Native',
        instructor: 'John Doe', // Name of the course instructor
        description: 'Learn the basics of React Native development and build your first mobile app.',
        enrollmentStatus: 'Open', // Can be 'Open', 'Closed', or 'InProgress'
        thumbnail: 'your.image.here', //Link to the course thumbnail
        duration: '8 weeks', // Duration of the course
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],

        syllabus: [ 
            {
            week: 1,
            topic: 'Introduction to React Native',
            content: 'Overview of React Native, setting up your development environment.'
            }, 
            {
            week: 2,
            topic: 'Building Your First App',
            content: 'Creating a simple mobile app using React Native components.'
            },
            {
            week: 3,
            topic: 'Working with Styles',
            content: 'Styling React Native components using inline styles and style sheets.'
            },
            {
            week: 4,
            topic: 'Navigation and Routing',
            content: 'Implementing navigation and routing in React Native apps.'
            },
            {
            week: 5,
            topic: 'Data Management',
            content: 'Managing data in React Native apps using state and props.'
            },
            {
            week: 6,
            topic: 'Networking and API Integration',
            content: 'Fetching data from APIs and integrating with external services.'
            },
            {
            week: 7,
            topic: 'Handling User Input',
            content: 'Capturing user input and handling events in React Native apps.'
            },
            {
            week: 8,
            topic: 'Deployment and Publishing',
            content: 'Preparing and publishing your React Native app to app stores.'
            },
        ],
        students: [
            {
            id: 101,
            name: 'Manav Singh',
            email: 'manav@example.com',
            },
            {
            id: 102,
            name: 'Bob Smith',
            email: 'bob@example.com',
            },
            {
            id: 103,
            name: 'Charlie Brown',
            email: 'charlie@example.com',
            },
            // Additional enrolled students...
        ],
    },
    {
        id: uuid(),
        name: 'Introduction to Python',
        instructor: 'Jane Doe',
        description: 'Learn the basics of Python programming and start building your first applications.',
        enrollmentStatus: 'Open',
        thumbnail: 'your.image.here',
        duration: '6 weeks',
        schedule: 'Mondays and Wednesdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic programming knowledge'],
        syllabus: [
            {
            week: 1,
            topic: 'Introduction to Python',
            content: 'Overview of Python, setting up your development environment.'
            },
            {
            week: 2,
            topic: 'Working with Data Types',
            content: 'Understanding data types and variables in Python.'
            },
            {
            week: 3,
            topic: 'Control Flow and Loops',
            content: 'Implementing control flow and loops in Python programs.'
            },
            {
            week: 4,
            topic: 'Functions and Modules',
            content: 'Creating functions and working with modules in Python.'
            },
            {
            week: 5,
            topic: 'File Handling and I/O',
            content: 'Reading from and writing to files in Python programs.'
            },
            {
            week: 6,
            topic: 'Working with Databases',
            content: 'Connecting to databases and executing queries in Python.'
            },
        ],
        students: [
            {
                id: 201,
                name: 'David Clark',
                email: 'david@example.com',
            },
        ]
    },
    {
        id: uuid(),
        name: 'Responsive Web Design',
        instructor: 'Sarah Johnson',
        description: 'Learn how to create responsive websites that adapt to different screen sizes.',
        enrollmentStatus: 'Open',
        thumbnail: 'your.image.here',
        duration: '2 weeks',
        schedule: 'Mondays and Wednesdays, 5:00 PM - 7:00 PM',
        location: 'Online',
        prerequisites: ['Basic HTML and CSS knowledge'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Responsive Web Design',
                content: 'Understanding the principles and techniques of responsive web design.'
            },
            {
                week: 2,
                topic: 'Building Responsive Websites',
                content: 'Implementing responsive design using CSS frameworks and media queries.'
            }
        ],
        students: []
    },
    {
        id: uuid(),
        name: 'JavaScript Fundamentals',
        instructor: 'Michael Smith',
        description: 'Learn the basics of JavaScript programming and enhance your web development skills.',
        enrollmentStatus: 'Open',
        thumbnail: 'your.image.here',
        duration: '3 weeks',
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic HTML and CSS knowledge'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to JavaScript',
                content: 'Overview of JavaScript, variables, and data types.'
            },
            {
                week: 2,
                topic: 'Control Flow and Functions',
                content: 'Implementing control flow statements and creating functions in JavaScript.'
            },
            {
                week: 3,
                topic: 'DOM Manipulation',
                content: 'Manipulating the Document Object Model (DOM) using JavaScript.'
            }
        ],
        students: [
            {
                id: 301,
                name: 'Emily Davis',
                email: 'emily@example.com',
            },
            {
                id: 302,
                name: 'Manav Singh',
                email: 'manav@example.com',
            }
        ]
    },
    {
        id: uuid(),
        name: 'CSS Styling Techniques',
        instructor: 'Jessica Brown',
        description: 'Master advanced CSS styling techniques to create visually appealing websites.',
        enrollmentStatus: 'Open',
        thumbnail: 'your.image.here',
        duration: '1 week',
        schedule: 'Fridays, 4:00 PM - 6:00 PM',
        location: 'Online',
        prerequisites: ['Intermediate HTML and CSS knowledge'],
        syllabus: [
            {
                week: 1,
                topic: 'CSS Flexbox',
                content: 'Understanding and using CSS Flexbox for flexible layouts.'
            }
        ],
        students: [
            {
                id: 401,
                name: 'Grace Anderson',
                email: 'grace@example.com',
            }
        ]
    },
    {
        id: uuid(),
        name: 'Introduction to React',
        instructor: 'Daniel Wilson',
        description: 'Learn the basics of React and build interactive user interfaces for web applications.',
        enrollmentStatus: 'Open',
        thumbnail: 'your.image.here',
        duration: '4 weeks',
        schedule: 'Saturdays, 10:00 AM - 12:00 PM',
        location: 'Online',
        prerequisites: ['Intermediate HTML, CSS, and JavaScript knowledge'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to React',
                content: 'Overview of React, setting up a React development environment.'
            },
            {
                week: 2,
                topic: 'Components and Props',
                content: 'Creating reusable components and passing data using props.'
            },
            {
                week: 3,
                topic: 'State and Lifecycle',
                content: 'Managing component state and lifecycle methods in React.'
            },
            {
                week: 4,
                topic: 'Handling Events and Forms',
                content: 'Handling user events and working with forms in React.'
            }
        ],
        students: [
            {
                id: 501,
                name: 'Henry Johnson',
                email: 'henry@example.com',
            },
            {
                id: 502,
                name: 'Isabella Davis',
                email: 'isabella@example.com',
            }
        ]
    },
    {
        id: uuid(),
        name: 'Node.js Basics',
        instructor: 'Robert Thompson',
        description: 'Learn the fundamentals of Node.js and build server-side applications.',
        enrollmentStatus: 'Open',
        thumbnail: 'your.image.here',
        duration: '2 weeks',
        schedule: 'Tuesdays and Thursdays, 7:00 PM - 9:00 PM',
        location: 'Online',
        prerequisites: ['Intermediate JavaScript knowledge'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Node.js',
                content: 'Overview of Node.js, setting up a Node.js development environment.'
            },
            {
                week: 2,
                topic: 'Building Server-side Applications',
                content: 'Creating server-side applications using Node.js and Express.js.'
            }
        ],
        students: [
            {
                id: 601,
                name: 'Jacob Wilson',
                email: 'jacob@example.com',
            }
        ]
    }
];
