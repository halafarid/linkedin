import { WorkExperience } from './WorkExperience';
import { Education } from './Education';
import { Skills } from './Skills';
import { Courses } from './Courses';
import { Posts } from './Posts';
import { UserInfo } from './UserInfo';
export interface User{

    userName?: string , 
    password? : string,
    About? :string,
    workExp?:WorkExperience,
    userInfo?:UserInfo
    education?:Education,
    skills ?:Skills[],
    courses?:Courses[],
    posts?:Posts[]


}