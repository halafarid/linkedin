import { JobTypes } from './../Models/JobTypes';
import { JobOpportunities } from './../Models/JobOpportunities';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from 'src/app/Models/User';
import { Courses } from './../Models/Courses';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  privacy:string[]=[
    "Anyone",
    "Anyone + Twitter",
    "Connections Only",
    "Advanced Settings"

  ]
  jopTypes:JobTypes[]=[
    {id:1,name:"Full-time"},
    {id:2,name:"Contract"},
    {id:3,name:"Part-time"},
    {id:4,name:"Internship"},
    {id:5,name:"Volunteer"},
    {id:6,name:"Temporary"},
    {id:7,name:"Remote"},
  ]
<<<<<<< HEAD
  educationForm = {};
  currentUser: User = {id: 1,
=======
  educationForm = {
    id: 1
  };
  // currentUser: User = {};
  currentUser: User = {
    id: 1,
>>>>>>> 849e0e31a1ea9a2058dd6f7b6d8c9407767ccbaa
    userName: 'bella',
    email: 'bella@gmail.com',
    password: 'bella123',
    About: 'joined ITI, looking for front end position ',
    workExp: [{
      id: 1,
      title: 'frontend developer',
      employmentType: { id: 1, name: 'Full-time' },
      companyName: 'Information Technology Institute (ITI)',
      location: 'cairo',
      isWorking: false,
      startDate: 'June',
      endDate: 'October',
      description: 'ITI is good' , 
      Headline:'Trainee Web & UI Development at Information Technology Institute(ITI)'
    }],
    userInfo: {
      profilePhoto: 'bella.jpg',
      jobOpps: 
        {
          id: 1,
          title: ['UI and Web development','Full Stack'],
          jobLocation: ['maadi', 'mokattam'],
          jobTypes: [
            { id: 2, name: 'part-time' },
            { id: 3, name: 'temporary' }
          ]
        }, 
      
    },
    education: [{
      id: 1,
      schoolName: 'Cairo University',
      degree: 'Bachelors degree, Computer Science',
      fieldOfStudy: 'information technology',
      startYear: 2015,
      endYear: 2019,
      grade: 'good',
      activity: 'joined SCCI',
      description: 'computer science is good'
    }],
    skills: [
      { id: 1, name: 'problem solver' },
      { id: 2, name: 'communication' }
    ],
    courses: [
      {
        id: 1,
        name: 'Object-Oriented Programming in JavaScript, Udemy',
        association: []
      },{
        id: 2,
        name: 'JavaScript Tutorial, Udemy',
        association: []
      },{
        id: 3,
        name: 'Mastering React, Udemy',
        association: []
      }
      // },{
      //   id: 4,
      //   name: 'The Complete JQuery Course from Beginner To Advanced, Udemy',
      //   association: []
      // }
    ],
    posts: [
      {
        id: 1,
        userId: 1,
        body:
          // tslint:disable-next-line:max-line-length
          'salsabils\'s post',
        likes: 50,
        replies: 20,
        imageUrls: [],
        comments: [
          {
            userId:3,
            commentId: 1,
            body: 'comment',
            likes: 5,
            replies: 0,
            liked:false,

          },
        ],
        onComment:false,
        onHover:false,
        onHoverReact:false,
        liked:false,
      },

    ],
    friendsId:[2,3],
<<<<<<< HEAD
  };
=======
  
  };

>>>>>>> 849e0e31a1ea9a2058dd6f7b6d8c9407767ccbaa

  months = [
    'January', 'February', 'March', 'April', 'May',
    'June', 'July', 'August', 'September',
    'October', 'November', 'December'
    ];
    years = [2015,2016,2017,2018,2019,2020];
    employmentTypes=["Full-time","Part-time","Self-employed","Freelance","Contract","Internship","Apprenticeship"];
  Users: User[] = [
    {
      id: 1,
      userName: 'bella',
      email: 'bella@gmail.com',
      password: 'bella123',
      About: 'joined ITI, looking for front end position ',
      workExp: [{
        id: 1,
        title: 'frontend developer',
        employmentType: { id: 1, name: 'Full-time' },
        companyName: 'Information Technology Institute (ITI)',
        location: 'cairo',
        isWorking: false,
        startDate: 'June',
        endDate: 'October',
        description: 'ITI is good' , 
        Headline:'Trainee Web & UI Development at Information Technology Institute(ITI)'
      }],
      userInfo: {
        profilePhoto: 'bella.jpg',
        jobOpps: 
          {
            id: 1,
            title: ['UI and Web development','Full Stack'],
            jobLocation: ['maadi', 'mokattam'],
            jobTypes: [
              { id: 2, name: 'part-time' },
              { id: 3, name: 'temporary' }
            ]
          }, 
        
      },
      education: [{
        id: 1,
        schoolName: 'Cairo University',
        degree: 'Bachelors degree, Computer Science',
        fieldOfStudy: 'information technology',
        startYear: 2015,
        endYear: 2019,
        grade: 'good',
        activity: 'joined SCCI',
        description: 'computer science is good'
      }],
      skills: [
        { id: 1, name: 'problem solver' },
        { id: 2, name: 'communication' }
      ],
      courses: [
        {
          id: 1,
          name: 'Object-Oriented Programming in JavaScript, Udemy',
          association: []
        },{
          id: 2,
          name: 'JavaScript Tutorial, Udemy',
          association: []
        },{
          id: 3,
          name: 'Mastering React, Udemy',
          association: []
        }
        // },{
        //   id: 4,
        //   name: 'The Complete JQuery Course from Beginner To Advanced, Udemy',
        //   association: []
        // }
      ],
      posts: [
        {
          id: 1,
          userId: 1,
          body:
            // tslint:disable-next-line:max-line-length
            'salsabils\'s post',
          likes: 50,
          replies: 20,
          imageUrls: [],
          comments: [
            {
              userId:3,
              commentId: 1,
              body: 'comment',
              likes: 5,
              replies: 0,
              liked:false,

            },
          ],
          onComment:false,
          onHover:false,
          onHoverReact:false,
          liked:"",
        },

      ],
      friendsId:[2,3],
    
    },
    {
      id: 2,
      userName: 'sara',
      email: 'sara@gmail.com',
      password: 'sara123',
      About: 'joined ITI, looking for front end position ',
      workExp: [{
        id: 1,
        title: 'frontend developer',
        employmentType: { id: 1, name: 'Full-time' },
        companyName: 'Information Technology Institute (ITI)',
        location: 'cairo',
        isWorking: false,
        startDate: 'October',
        endDate: 'June',
        description: 'vodafone is good',
        Headline:'Trainee Web & UI Development at Information Technology Institute(ITI)'

      }],
      userInfo: {
        profilePhoto: 'bella.jpg',
        jobOpps: 
          {
            id: 1,
            title: ['UI and Web development','Full Stack'],
            jobLocation: ['madinaty'],
            jobTypes: [
              { id: 2, name: 'part-time' },
              { id: 3, name: 'temporary' }
            ]
          }, 
        
      },
      education: [{
        id: 1,
        schoolName: 'computer science',
        degree: 'bachelors',
        fieldOfStudy: 'information technology',
        startYear: 2015,
        endYear: 2019,
        grade: 'good',
        activity: 'joined SCCI',
        description: 'computer science is good'
      }],
      skills: [
        { id: 1, name: 'problem solver' },
        { id: 2, name: 'communication' }
      ],
      courses: [
        {
          id: 1,
          name: 'oop',
          association: []
        }
      ],
      posts: [
        {
          userId: 2,
          id: 1,
          body:
            // tslint:disable-next-line:max-line-length
            'Looking to make a positive difference? Take part in our internship challenge and compete to win a 6-month paid global internship at JTI, Japan Tobacco International.',
          likes: 200,
          replies: 0,
          imageUrls: [],
          comments: [ ],
          onComment:false,
          onHover:false,
          onHoverReact:false,
          liked:"",

        },
        
      ],
      
      friendsId:[1],
      

    },
    {
      id: 3,
      userName: 'hala',
      email: 'hala@gmail.com',
      password: 'hala123',
      About: 'joined ITI, looking for front end position ',
      workExp:[ {
        id: 1,
        title: 'frontend developer',
        employmentType: { id: 1, name: 'full-time' },
        companyName: 'vodafone',
        location: 'cairo',
        isWorking: false,
        startDate: 'October',
        endDate: 'June',
        description: 'vodafone is good',
        Headline:'Trainee Web & UI Development at Information Technology Institute(ITI)'

      }],
      userInfo: {
        profilePhoto: 'bella.jpg',
        jobOpps: 
          {
            id: 1,
            title: ['UI and Web development','Full Stack'],
            jobLocation: ['October'],
            jobTypes: [
              { id: 2, name: 'part-time' },
              { id: 3, name: 'temporary' }
            ]
          }, 
      },
      education: [{
        id: 1,
        schoolName: 'computer science',
        degree: 'bachelors',
        fieldOfStudy: 'information technology',
        startYear: 2015,
        endYear: 2019,
        grade: 'good',
        activity: 'joined SCCI',
        description: 'computer science is good'
      }],
      skills: [
        { id: 1, name: 'problem solver' },
        { id: 2, name: 'communication' }
      ],
      courses: [
        {
          id: 1,
          name: 'oop',
          association: []
        }
      ],
      posts: [
        {
          id: 1,
          userId: 3,
          body:
            // tslint:disable-next-line:max-line-length
            'All of us know the compiler and some of them know the interpreter, but a lot of us don\'t know the transpiler.',
          likes: 100,
          replies: 20,
          imageUrls: ['../../../assets/JTI.jpg'],
          comments: [
            {
              commentId: 1,
              userId: 2,
              body: '.1Sevgi metin salihoglu ask olsun.cvbh.',
              likes: 20,
              replies: 10,
              liked:false,

            },
            {
              commentId: 1,
              userId: 3,
              body: '.2Sevgi metin salihoglu ask olsun.cvbh.',
              likes: 0,
              replies: 0,
              liked:false,

            },
            
          ],
          onComment:false,
          onHover:false,
          onHoverReact:false,
          liked:"",

        },
        {
          userId: 3,
          id: 2,
          body:
            // tslint:disable-next-line:max-line-length
            'post 3',
          likes: 0,
          replies: 0,
          imageUrls: [],
          comments: [
            {
              commentId: 1,
              userId: 2,
              body: 'comment 1',
              likes: 5,
              replies: 2,
              liked:false,

            }
          ],
          onComment:false,
          onHover:false,
          onHoverReact:false,
          liked:"",
        }
      ],
      friendsId:[1],
      

    },
    {
      id: 4,
      userName: 'mariam',
      email: 'mariam@gmail.com',
      password: 'mariam123',
      About: 'joined ITI, looking for front end position ',
      workExp: [{
        id: 1,
        title: 'frontend developer',
        employmentType: { id: 1, name: 'Full-time' },
        companyName: 'vodafone',
        location: 'cairo',
        isWorking: false,
        startDate: 'October',
        endDate: 'June',
        description: 'vodafone is good'
      }],
      userInfo: {
        profilePhoto: 'bella.jpg',
        jobOpps: 
          {
            id: 1,
            title: ['UI and Web development','Full Stack'],
            jobLocation: ['October'],
            jobTypes: [
              { id: 2, name: 'part-time' },
              { id: 3, name: 'temporary' }
            ]
          }
        
      },
      education: [{
        id: 1,
        schoolName: 'computer science',
        degree: 'bachelors',
        fieldOfStudy: 'information technology',
        startYear: 2015,
        endYear: 2019,
        grade: 'good',
        activity: 'joined SCCI',
        description: 'computer science is good'
      }],
      skills: [
        { id: 1, name: 'problem solver' },
        { id: 2, name: 'communication' }
      ],
      courses: [
        {
          id: 1,
          name: 'oop',
          association: []
        }
      ],
      posts: [
        {
          id: 1,
          body:
            // tslint:disable-next-line:max-line-length
            'Looking to make a positive difference? Take part in our internship challenge and compete to win a 6-month paid global internship at JTI, Japan Tobacco International.',
          likes: 200,
          imageUrls: ['JTI.jpg'],
          comments: [
            {
              commentId: 1,
              body: 'Sevgi metin salihoglu ask olsun.cvbh.',
              liked:false
            }
          ],
          onComment:false,
          onHover:false,
          onHoverReact:false,
          liked:"",

        }
      ],
      friendsId:[1],
      

    },
  ];

  getAll(): User[] {
    return this.Users;
  }

  getById(id: number): User {
    id = +id;

    if (id >= 0) {
      const user = this.Users.find(u => u.id === id);
      return user;
    }
  }
  getByName(name: string): User[] {
    return this.Users.filter(user => user.userName.includes(name));
  }

  // addIdGeneric<T>(param:T , arr:[T])
  // {   
  //     param.id=arr.length+1;
  //     arr.push(param);
  //   }

  add(user: User) {
    user.id = this.Users.length + 1;
    this.Users.push(user);
    console.log(this.Users);
  }
  deleteById(id: number) {
    id = +id;

    const index = this.Users.findIndex(a => a.id === id);
    this.Users.splice(index, 1);
    console.log(this.Users);
  }
  update(newUser: User) {
    const index = this.Users.findIndex(u => u.id === newUser.id);
    this.Users[index] = newUser;
    console.log(this.Users);
  }
  getFriends=()=>
  { let friends:User[]=[];
    for (const userid of this.currentUser.friendsId) {
      const friendUser=this.getById(userid)
      friends.push(friendUser)
    }
    return friends;
  }
  getAllExceptCurr = () => {
    const network = this.Users.filter(u => u.id !== this.currentUser.id);
    for (const userid of this.currentUser.friendsId) {
      const friendUser = this.getById(userid);
      const index = network.indexOf(friendUser);
      network.splice(index, 1);
    }
    return network;
  }

  addEducation = form => {
    const selectUser = this.Users.filter(user => user.id === this.currentUser.id)[0];
    form.id = selectUser.education.length + 1;
    selectUser.education.push(form);
    this.currentUser.education.push(form);
  }

  getEducationById = id => {
    const selectUser = this.Users.filter(user => user.id === this.currentUser.id)[0];
    this.educationForm = selectUser.education[id - 1];
  }

  editEducation = (form, id) => {
    const selectUser = this.Users.filter(user => user.id === this.currentUser.id)[0];
    selectUser.education[id - 1] = form;
    selectUser.education[id - 1].id = id;
    this.currentUser.education[id - 1] = form;
    this.currentUser.education[id - 1].id = id;
    console.log(this.Users);
  }

  deleteEducation = id => {
    const selectUser = this.Users.filter(user => user.id === this.currentUser.id)[0];
    selectUser.education.splice(id - 1, 1);
    this.currentUser.education.splice(id - 1, 1);
    console.log(this.Users);
  }

  addcourses = courseForm => {
    // tslint:disable-next-line: no-shadowed-variable
    const User = this.Users.filter(user => user.id === this.currentUser.id)[0];
    courseForm.id = User.courses.length + 1;
    this.currentUser.courses.push(courseForm);
  }
}
