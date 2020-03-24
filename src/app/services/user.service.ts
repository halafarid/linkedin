import { JobTypes } from "./../Models/JobTypes";
import { JobOpportunities } from "./../Models/JobOpportunities";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { WorkExperience } from "./../Models/WorkExperience";
import { Education } from "../Models/Education";
import { User } from "src/app/Models/User";
import { Courses } from "./../Models/Courses";
import { BindingFlags } from "@angular/compiler/src/core";
import { PendingRequest } from "./../Models/pendingReaquest";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor() {}

  // educationForm = {};
  workExpId = 0;
  experienceForm: WorkExperience = {};

  educationId = 0;
  educationForm: Education = {};
  isReply:boolean=false;
  userToReply : number;
  isSearchedFor: boolean = false;
  searchedForProfile: User = {};
  SignedInId: number;
  invitorId: number;
  isPopUp:boolean = false;
  // currentUser: User = {};
  pendingRequests: PendingRequest[] = [];

  privacy: string[] = [
    "Anyone",
    "Anyone + Twitter",
    "Connections Only",
    "Advanced Settings"
  ];
  jopTypes: JobTypes[] = [
    { id: 1, name: "Full-time" },
    { id: 2, name: "Contract" },
    { id: 3, name: "Part-time" },
    { id: 4, name: "Internship" },
    { id: 5, name: "Volunteer" },
    { id: 6, name: "Temporary" },
    { id: 7, name: "Remote" }
  ];

  // educationForm = {
  //   id: 1
  // };

  currentUser: User = {
    id: 1,
    userName: "bella",
    email: "bella@gmail.com",
    password: "bella123",
    About: "joined ITI, looking for front end position ",
    workExp: [
      {
        id: 1,
        title: "frontend developer",
        employmentType: { id: 1, name: "Full-time" },
        companyName: "Information Technology Institute (ITI)",
        location: "cairo",
        isWorking: false,
        startDate: "June",
        endDate: "October",
        description: "ITI is good",
        Headline:
          "Trainee Web & UI Development at Information Technology Institute(ITI)"
      }
    ],
    userInfo: {
      profilePhoto: "bella.jpg",
      jobOpps: {
        id: 1,
        title: ["UI and Web development", "front end"],
        jobLocation: ["maadi", "mokattam"],
        jobTypes: [
          { id: 2, name: "part-time" },
          { id: 3, name: "temporary" }
        ]
      }
    },
    education: [
      {
        id: 1,
        schoolName: "Cairo University",
        degree: "Bachelors degree, Computer Science",
        fieldOfStudy: "information technology",
        startYear: 2015,
        endYear: 2019,
        grade: "good",
        activity: "joined SCCI",
        description: "computer science is good"
      }
    ],
    skills: [
      { id: 1, name: "problem solver" },
      { id: 2, name: "communication" }
    ],
    courses: [
      {
        id: 1,
        name: "Object-Oriented Programming in JavaScript, Udemy",
        association: []
      },
      {
        id: 2,
        name: "JavaScript Tutorial, Udemy",
        association: []
      },
      {
        id: 3,
        name: "Mastering React, Udemy",
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
          "salsabils's post",
        likes: 50,
        replies: 20,
        imageUrls: [],
        comments: [
          {
            userId: 3,
            commentId: 1,
            body: "comment",
            likes: 5,
            replies: 0,
            liked: false
          }
        ],
        onComment: false,
        onHover: false,
        onHoverReact: false,
        liked: ""
      }
    ],
    friendsId: [2, 3],
    invitations: [],
    invitationsSend: []
  };

  months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  years = [2015, 2016, 2017, 2018, 2019, 2020];
  employmentTypes = [
    "Full-time",
    "Part-time",
    "Self-employed",
    "Freelance",
    "Contract",
    "Internship",
    "Apprenticeship"
  ];
  Users: User[] = [
    {
      id: 1,
      userName: "bella",
      email: "bella@gmail.com",
      password: "bella123",
      About: "joined ITI, looking for front end position ",
      workExp: [
        {
          id: 1,
          title: "frontend developer",
          employmentType: { id: 1, name: "Full-time" },
          companyName: "Information Technology Institute (ITI)",
          location: "cairo",
          isWorking: false,
          startDate: "June",
          endDate: "October",
          description: "ITI is good",
          Headline:
            "Trainee Web & UI Development at Information Technology Institute(ITI)"
        }
      ],
      userInfo: {
        profilePhoto: "bella.jpg",
        jobOpps: {
          id: 1,
          title: ["UI and Web development", "front end"],
          jobLocation: ["maadi", "mokattam"],
          jobTypes: [
            { id: 2, name: "part-time" },
            { id: 3, name: "temporary" }
          ]
        }
      },
      education: [
        {
          id: 1,
          schoolName: "Cairo University",
          degree: "Bachelors degree, Computer Science",
          fieldOfStudy: "information technology",
          startYear: 2015,
          endYear: 2019,
          grade: "good",
          activity: "joined SCCI",
          description: "computer science is good"
        }
      ],
      skills: [
        { id: 1, name: "problem solver" },
        { id: 2, name: "communication" }
      ],
      courses: [
        {
          id: 1,
          name: "Object-Oriented Programming in JavaScript, Udemy",
          association: []
        },
        {
          id: 2,
          name: "JavaScript Tutorial, Udemy",
          association: []
        },
        {
          id: 3,
          name: "Mastering React, Udemy",
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
            "salsabils's post",
          likes: 50,
          replies: 20,
          imageUrls: [],
          comments: [
            {
              userId: 3,
              commentId: 1,
              body: "comment",
              likes: 5,
              replies: 0,
              liked: false
            }
          ],
          onComment: false,
          onHover: false,
          onHoverReact: false,
          liked: ""
        }
      ],
      friendsId: [2, 3],
      invitations: [],
      invitationsSend: [],
      messages:[{senderId:2,senderName:'sara',isPopUp:false,message:"Hi Can We Connect ? "}]
    },
    {
      id: 2,
      userName: "sara",
      email: "sara@gmail.com",
      password: "sara123",
      About: "joined Vodafone, looking for front end position ",
      workExp: [
        {
          id: 1,
          title: "Full Stack developer",
          employmentType: { id: 1, name: "Full-time" },
          companyName: "Vodafone Egypt",
          location: "cairo",
          isWorking: true,
          startDate: "October",
          endDate: "June",
          description: "vodafone is good",
          Headline: "Full Stack Developer in Web Development at Vodafone Egypt"
        }
      ],
      userInfo: {
        profilePhoto: "bella.jpg",
        jobOpps: {
          id: 1,
          title: ["full stack"],
          jobLocation: ["madinaty"],
          jobTypes: [
            { id: 2, name: "part-time" },
            { id: 3, name: "temporary" }
          ]
        }
      },
      education: [
        {
          id: 1,
          schoolName: "computer science & Information Systems",
          degree: "bachelors",
          fieldOfStudy: "information technology",
          startYear: 2015,
          endYear: 2019,
          grade: "good",
          activity: "joined SCCI",
          description: "computer science is good"
        }
      ],
      skills: [
        { id: 1, name: "problem solver" },
        { id: 2, name: "communication" },
        { id: 3, name: "fast learner" }
      ],
      courses: [
        {
          id: 1,
          name: "Object-Oriented Programming in JavaScript, Udemy",
          association: []
        },
        {
          id: 2,
          name: "JavaScript Tutorial, Udemy",
          association: []
        },
        {
          id: 3,
          name: "Mastering React, Udemy",
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
          userId: 2,
          id: 1,
          body:
            // tslint:disable-next-line:max-line-length
            "Looking to make a positive difference? Take part in our internship challenge and compete to win a 6-month paid global internship at JTI, Japan Tobacco International.",
          likes: 200,
          replies: 0,
          imageUrls: [],
          comments: [],
          onComment: false,
          onHover: false,
          onHoverReact: false,
          liked: ""
        }
      ],
      friendsId: [1],
      invitations: [3],
      invitationsSend: [4],
      messages:[
        {senderId:1,senderName:'bella',isPopUp:false,message:"Hi Can We Connect ? "},
        {senderId:4,senderName:'mariam',isPopUp:false,message:"What About Your Company Job Offers ? "}]

    },
    {
      id: 3,
      userName: "hala",
      email: "hala@gmail.com",
      password: "hala123",
      About: "joined ITI, looking for front end position ",
      workExp: [
        {
          id: 1,
          title: "frontend developer",
          employmentType: { id: 1, name: "full-time" },
          companyName: "vodafone",
          location: "cairo",
          isWorking: false,
          startDate: "October",
          endDate: "June",
          description: "vodafone is good",
          Headline:
            "Trainee Web & UI Development at Information Technology Institute(ITI)"
        }
      ],
      userInfo: {
        profilePhoto: "bella.jpg",
        jobOpps: {
          id: 1,
          title: ["software developer"],
          jobLocation: ["October"],
          jobTypes: [
            { id: 2, name: "part-time" },
            { id: 3, name: "temporary" }
          ]
        }
      },
      education: [
        {
          id: 1,
          schoolName: "computer science",
          degree: "bachelors",
          fieldOfStudy: "information technology",
          startYear: 2015,
          endYear: 2019,
          grade: "good",
          activity: "joined SCCI",
          description: "computer science is good"
        }
      ],
      skills: [
        { id: 1, name: "problem solver" },
        { id: 2, name: "communication" }
      ],
      courses: [
        {
          id: 1,
          name: "oop",
          association: []
        }
      ],
      posts: [
        {
          id: 1,
          userId: 3,
          body:
            // tslint:disable-next-line:max-line-length
            "All of us know the compiler and some of them know the interpreter, but a lot of us don't know the transpiler.",
          likes: 100,
          replies: 20,
          imageUrls: ["../../../assets/JTI.jpg"],
          comments: [
            {
              commentId: 1,
              userId: 2,
              body: ".1Sevgi metin salihoglu ask olsun.cvbh.",
              likes: 20,
              replies: 10,
              liked: false
            },
            {
              commentId: 1,
              userId: 3,
              body: ".2Sevgi metin salihoglu ask olsun.cvbh.",
              likes: 0,
              replies: 0,
              liked: false
            }
          ],
          onComment: false,
          onHover: false,
          onHoverReact: false,
          liked: ""
        },
        {
          userId: 3,
          id: 2,
          body:
            // tslint:disable-next-line:max-line-length
            "post 3",
          likes: 0,
          replies: 0,
          imageUrls: [],
          comments: [
            {
              commentId: 1,
              userId: 2,
              body: "comment 1",
              likes: 5,
              replies: 2,
              liked: false
            }
          ],
          onComment: false,
          onHover: false,
          onHoverReact: false,
          liked: ""
        }
      ],
      friendsId: [1],
      invitations: [],
      invitationsSend: [],
      messages:[{senderId:2,senderName:'sara',isPopUp:false,message:"Hi Can We Connect ? "}]

    },
    {
      id: 4,
      userName: "mariam",
      email: "mariam@gmail.com",
      password: "mariam123",
      About: "joined ITI, looking for front end position ",
      workExp: [
        {
          id: 1,
          title: "frontend developer",
          employmentType: { id: 1, name: "Full-time" },
          companyName: "Information Technology Institute (ITI)",
          location: "cairo",
          isWorking: false,
          startDate: "June",
          endDate: "October",
          description: "ITI is good",
          Headline:
            "Trainee Web & UI Development at Information Technology Institute(ITI)"
        }
      ],
      userInfo: {
        profilePhoto: "bella.jpg",
        jobOpps: {
          id: 1,
          title: ["manager"],
          jobLocation: ["october"],
          jobTypes: [
            { id: 2, name: "part-time" },
            { id: 3, name: "temporary" }
          ]
        }
      },
      education: [
        {
          id: 1,
          schoolName: "Cairo University",
          degree: "Bachelors degree, Computer Science",
          fieldOfStudy: "information technology",
          startYear: 2015,
          endYear: 2019,
          grade: "good",
          activity: "joined SCCI",
          description: "computer science is good"
        }
      ],
      skills: [
        { id: 1, name: "problem solver" },
        { id: 2, name: "communication" }
      ],
      courses: [
        {
          id: 1,
          name: "Object-Oriented Programming in JavaScript, Udemy",
          association: []
        },
        {
          id: 2,
          name: "JavaScript Tutorial, Udemy",
          association: []
        },
        {
          id: 3,
          name: "Mastering React, Udemy",
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
            "salsabil's post",
          likes: 50,
          replies: 20,
          imageUrls: [],
          comments: [
            {
              userId: 3,
              commentId: 1,
              body: "comment",
              likes: 5,
              replies: 0,
              liked: false
            }
          ],
          onComment: false,
          onHover: false,
          onHoverReact: false,
          liked: ""
        }
      ],
      friendsId: [3],
      invitations: [2],
      invitationsSend: [5],
      messages:[
        {senderId:1,senderName:'bella',isPopUp:false,message:"Hi Can We Connect ? "},
        {senderId:3,senderName:'mariam',isPopUp:false,message:"What About Your Company Job Offers ? "}]
    },
    {
      id: 5,
      userName: "mirna",
      email: "mirna@gmail.com",
      password: "mirna123",
      About: "joined ITI, looking for front end position ",
      workExp: [
        {
          id: 1,
          title: "frontend developer",
          employmentType: { id: 1, name: "Full-time" },
          companyName: "Information Technology Institute (ITI)",
          location: "cairo",
          isWorking: false,
          startDate: "June",
          endDate: "October",
          description: "ITI is good",
          Headline:
            "Trainee Web & UI Development at Information Technology Institute(ITI)"
        }
      ],
      userInfo: {
        profilePhoto: "bella.jpg",
        jobOpps: {
          id: 1,
          title: ["civil engineer"],
          jobLocation: ["october"],
          jobTypes: [
            { id: 2, name: "part-time" },
            { id: 3, name: "temporary" }
          ]
        }
      },
      education: [
        {
          id: 1,
          schoolName: "Cairo University",
          degree: "Bachelors degree, Computer Science",
          fieldOfStudy: "information technology",
          startYear: 2015,
          endYear: 2019,
          grade: "good",
          activity: "joined SCCI",
          description: "computer science is good"
        }
      ],
      skills: [
        { id: 1, name: "problem solver" },
        { id: 2, name: "communication" }
      ],
      courses: [
        {
          id: 1,
          name: "Object-Oriented Programming in JavaScript, Udemy",
          association: []
        },
        {
          id: 2,
          name: "JavaScript Tutorial, Udemy",
          association: []
        },
        {
          id: 3,
          name: "Mastering React, Udemy",
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
            "salsabil's post",
          likes: 50,
          replies: 20,
          imageUrls: [],
          comments: [
            {
              userId: 3,
              commentId: 1,
              body: "comment",
              likes: 5,
              replies: 0,
              liked: false
            }
          ],
          onComment: false,
          onHover: false,
          onHoverReact: false,
          liked: ""
        }
      ],
      friendsId: [],
      invitations: [4],
      invitationsSend: [],
      messages:[
        {senderId:1,senderName:'bella',isPopUp:false,message:"Hi Can We Connect ? "},
        {senderId:3,senderName:'hala',isPopUp:false,message:"What About Your Company Job Offers ? "}]
    },
  ];

  update(newUser: User) {
    const index = this.Users.findIndex(u => u.id === newUser.id);
    this.Users[index] = newUser;
    console.log(this.Users);
  }

  getAll(): User[] {
    return this.Users;
  }

  getByName(name: string): User[] {
    return this.Users.filter(user =>user.id !== this.currentUser.id&&
      user.userName.toLowerCase().includes(name.toLowerCase())
    );
  }

  getByJob(name: string): User[] {
    const users = [];
    for (const user of this.Users) {
      const title = user.userInfo.jobOpps.title.filter(t =>
        t.toLowerCase().includes(name.toLowerCase())
      );
      if (title.length !== 0 && user.id !== this.currentUser.id) {
        users.push(user);
      }
    }
    return users;
  }

  getByLoc(name: string): User[] {
    const users = [];
    for (const user of this.Users) {
      const title = user.userInfo.jobOpps.jobLocation.filter(t =>
        t.toLowerCase().includes(name.toLowerCase())
      );
      if (title.length !== 0 && user.id !== this.currentUser.id) {
        users.push(user);
      }
    }
    return users;
  }

  getFriends = () => {
    const friends: User[] = [];
    for (const userid of this.currentUser.friendsId) {
      const friendUser = this.getById(userid);
      friends.push(friendUser);
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
    for (const userid of this.currentUser.invitations) {
      const inviteUser = this.getById(userid);
      const index = network.indexOf(inviteUser);
      network.splice(index, 1);
    }
    return network;
  }

  // getUserById, getEducationById, getExperienceById
  getById<T>(id: number, obj: string = '') {
    const selectUser = this.Users.filter( user => user.id === this.currentUser.id)[0];
    let form ;

    if (obj === '') {
      return selectUser;
    } else {
      form = selectUser[obj].filter(ob => ob.id === id)[0];

      if (obj === 'workExp') {
        this.workExpId = id;
      } else if (obj === 'education') {
        form = selectUser[obj].filter(ob => ob.id === id)[0];
        this.educationId = id;
      }
    }
    return form;
  }

  // addUser, addEducationForm, addCourses, addSkills
  addGeneric = (form, obj: string) => {
    const selectUser = this.Users.filter( user => user.id === this.currentUser.id)[0];

    if (obj === 'registration') {
      form.id = this.Users.length + 1;
      this.Users.push(form);
    } else {
      form.id = selectUser[obj].length + 1;
      selectUser[obj].push(form);
      this.currentUser[obj].push(form);
    }

    console.log(this.currentUser);
    console.log(this.Users);
  }

  // editEducation ..
  editGeneric = (form, id, obj: string) => {
    const selectUser = this.Users.filter( user => user.id === this.currentUser.id)[0];
    selectUser[obj][id - 1] = form;
    selectUser[obj][id - 1].id = id;
    this.currentUser[obj][id - 1] = form;
    this.currentUser[obj][id - 1].id = id;
  }

  // deleteEducation ..
  deleteGeneric = (id, obj: string) => {
    const selectUser = this.Users.filter( user => user.id === this.currentUser.id)[0];
    selectUser[obj].splice(id - 1, 1);
    this.currentUser[obj].splice(id - 1, 1);
  }



  
  // deleteById(id: number) {
  //   id = +id;

  //   const index = this.Users.findIndex(a => a.id === id);
  //   this.Users.splice(index, 1);
  //   console.log(this.Users);
  // }
}
