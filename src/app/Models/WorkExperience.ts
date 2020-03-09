import { EmploymentType } from './EmploymentType';

export interface WorkExperience 
{
    id ? :number , 
    title ?:string ,
    employmentType? : EmploymentType,
    companyName?:string,
    location ?:string,
    isWorking?:boolean,
    startDate?:string,
    endDate?:string,
    description?:string,
    Headline?:string

}