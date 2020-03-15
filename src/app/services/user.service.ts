import { JobOpportunities } from './../Models/JobOpportunities';
import { User } from './../Models/User';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {
    
    
  }

  currentUser :User = {};

  Users: User[] = [
    {
      id: 1,
      userName: 'bella',
      email: 'bella@gmail.com',
      password: 'bella123',
      About: 'joined ITI, looking for front end position ',
      workExp: {
        id: 1,
        title: 'frontend developer',
        employmentType: { id: 1, name: 'full-time' },
        companyName: 'Information Technology Institute (ITI)',
        location: 'cairo',
        isWorking: false,
        startDate: 'June',
        endDate: 'October',
        description: 'ITI is good' , 
        Headline:'Trainee Web & UI Development at Information Technology Institute(ITI)'
      },
      userInfo: {
        profilePhoto: 'bella.jpg',
        jobOpps: [
          {
            id: 1,
            title: 'UI and Web development',
            jobLocation: ['maadi', 'mokattam'],
            jobTypes: [
              { id: 2, name: 'part-time' },
              { id: 3, name: 'temporary' }
            ]
          }, {
            id: 2,
            title: 'Frontend Web developer',
            jobLocation: ['October'],
            jobTypes: [
              { id: 2, name: 'part-time' },
              { id: 3, name: 'temporary' }
            ]
          }, {
            id: 3,
            title: 'full stack Web developer',
            jobLocation: ['October'],
            jobTypes: [
              { id: 2, name: 'part-time' },
              { id: 3, name: 'temporary' }
            ]
          }
        ]
      },
      education: {
        id: 1,
        schoolName: 'Cairo University',
        degree: 'Bachelors degree, Computer Science',
        fieldOfStudy: ['computer programming', 'information technology'],
        startYear: 2015,
        endYear: 2019,
        grade: 'good',
        activity: 'joined SCCI',
        description: 'computer science is good'
      },
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
          body:
            // tslint:disable-next-line:max-line-length
            'Looking to make a positive difference? Take part in our internship challenge and compete to win a 6-month paid global internship at JTI, Japan Tobacco International.',
          likes: 200,
          ImageUrls: ['JTI.jpg'],
          comments: [
            {
              commentId: 1,
              body: 'Sevgi metin salihoglu ask olsun.cvbh.'
            }
          ]
        }
      ],
      friendsId: [2, 3]
    },
    {
      id: 2,
      userName: 'sara',
      email: 'sara@gmail.com',
      password: 'sara123',
      About: 'joined ITI, looking for front end position ',
      workExp: {
        id: 1,
        title: 'frontend developer',
        employmentType: { id: 1, name: 'full-time' },
        companyName: 'Information Technology Institute (ITI)',
        location: 'cairo',
        isWorking: false,
        startDate: 'October',
        endDate: 'June',
        description: 'vodafone is good',
        Headline:'Trainee Web & UI Development at Information Technology Institute(ITI)'

      },
      userInfo: {
        profilePhoto: 'bella.jpg',
        jobOpps: [
          {
            id: 1,
            title: 'UI and Web development',
            jobLocation: ['madinaty'],
            jobTypes: [
              { id: 2, name: 'part-time' },
              { id: 3, name: 'temporary' }
            ]
          }, {
            id: 2,
            title: 'Frontend Web developer',
            jobLocation: ['October'],
            jobTypes: [
              { id: 2, name: 'part-time' },
              { id: 3, name: 'temporary' }
            ]
          }, {
            id: 3,
            title: 'full stack Web developer',
            jobLocation: ['October'],
            jobTypes: [
              { id: 2, name: 'part-time' },
              { id: 3, name: 'temporary' }
            ]
          }
        ]
      },
      education: {
        id: 1,
        schoolName: 'computer science',
        degree: 'bachelors',
        fieldOfStudy: ['computer programming', 'information technology'],
        startYear: 2015,
        endYear: 2019,
        grade: 'good',
        activity: 'joined SCCI',
        description: 'computer science is good'
      },
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
          ImageUrls: ['JTI.jpg'],
          comments: [
            {
              commentId: 1,
              body: 'Sevgi metin salihoglu ask olsun.cvbh.'
            }
          ]
        }
      ],
      friendsId: [1]
    },
    {
      id: 3,
      userName: 'hala',
      email: 'hala@gmail.com',
      password: 'hala123',
      About: 'joined ITI, looking for front end position ',
      workExp: {
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

      },
      userInfo: {
        profilePhoto: 'bella.jpg',
        jobOpps: [
          {
            id: 1,
            title: 'UI and Web development',
            jobLocation: ['October'],
            jobTypes: [
              { id: 2, name: 'part-time' },
              { id: 3, name: 'temporary' }
            ]
          }, {
            id: 2,
            title: 'Frontend Web developer',
            jobLocation: ['October'],
            jobTypes: [
              { id: 2, name: 'part-time' },
              { id: 3, name: 'temporary' }
            ]
          }, {
            id: 3,
            title: 'full stack Web developer',
            jobLocation: ['October'],
            jobTypes: [
              { id: 2, name: 'part-time' },
              { id: 3, name: 'temporary' }
            ]
          }
        ]
      },
      education: {
        id: 1,
        schoolName: 'computer science',
        degree: 'bachelors',
        fieldOfStudy: ['computer programming', 'information technology'],
        startYear: 2015,
        endYear: 2019,
        grade: 'good',
        activity: 'joined SCCI',
        description: 'computer science is good'
      },
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
          ImageUrls: ['JTI.jpg'],
          comments: [
            {
              commentId: 1,
              body: 'Sevgi metin salihoglu ask olsun.cvbh.'
            }
          ]
        }
      ],
      friendsId: [1]
    }
  ];
  getAll(): User[] {
    return this.Users;
  }

  getById(id: number): User {
    id = +id;

    if (id >= 0) {
      const user = this.Users.find(u => u.id === id);
      console.log(user);

      return user;
    }
  }
  getByName(name: string): User[] {
    return this.Users.filter(user => user.userName.includes(name));
  }
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
  updateById(newUser: User) {
    const index = this.Users.findIndex(u => u.id === newUser.id);
    this.Users[index] = newUser;
    console.log(this.Users);
  }
}
