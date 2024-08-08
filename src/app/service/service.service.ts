import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
// const subj = new Subject<number>();
@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  headerSubject = new Subject();
  constructor() {}
  headerNav(data: { module: string; links: string }) {
    this.headerSubject.next(data);
    
  }
  private dataSubject = new Subject<string>();
  data$ = this.dataSubject.asObservable();

  // setData(data:any): void {
  //   this.dataSubject.next(data);
  //   console.log(data)   
  // }
  organization = [
    {
      id: '44',
      organization: 'ABC Corporation',
      type: 'Public',
      industry: 'Technology',
      onboarding: '2022-01-01',
      related_orgs: ['XYZ Inc.', '123 Enterprises'],
      products: ['Product A', 'Product B', 'Product C'],
      'Org SPOC': 'John Doe',
      email: 'john.doe@abccorp.com',
      phone: '123-456-7890',
      contact:[
        {  id:1,
          name:"shami",
          email:"viveksengar921927",
          phone:2423535,
          role:"developer"
        },
        {  id:2,
          name:"vivek",
          email:"viveksengar921927",
          phone:35353,
          role:"developer"
        },
      ]
    },
    {
      id: '2',
      organization: 'XYZ Inc.',
      type: 'Private',
      industry: 'Finance',
      onboarding: '2021-12-15',
      related_orgs: ['ABC Corporation', '123 Enterprises'],
      products: ['Product X', 'Product Y'],
      'Org SPOC': 'Jane Smith',
      email: 'jane.smith@xyzinc.com',
      phone: '987-654-3210',
      contact:[
        {   id:3,
          name:"vivek",
          email:"viveksengaemail",
          phone:53534532,
          role:"developer"
        },
        {  id:4,
          name:"vivek1",
          email:"viveksengaremail",
          phone:455343454672,
          role:"manager"
        },
        
      ]
      
    },
    {
      "id": '3',
      organization: '123 Enterprises',
      type: 'Public',
      industry: 'Retail',
      onboarding: '2022-02-05',
      related_orgs: ['ABC Corporation', 'XYZ Inc.'],
      products: ['Product M', 'Product N'],
      'Org SPOC': 'Michael Johnson',
      email: 'michael.johnson@123ent.com',
      phone: '555-123-4567',
      contact:[
        {  id:5,
          name:"vivek1",
          email:"viveksengar921927",
          phone:987867532,
          role:"manager"
        },
        {
          name:"aman",
          email:"viveksengaremail",
          phone:56456464878790,
          role:"developer"
        },
      ]
    },
    
    {
      id: '4',
      organization: 'Tech Solutions Ltd.',
      type: 'Private',
      industry: 'IT Services',
      onboarding: '2022-03-10',
      related_orgs: [],
      products: ['Tech Service 1', 'Tech Service 2'],
      'Org SPOC': 'Emily Brown',
      email: 'emily.brown@techsolutions.com',
      phone: '111-222-3333',
      contact:[
        {  id:6,
          name:"sita",
          email:"viveksengar921927",
          phone:8778779,
          role:"developer"
        },
        {   id:7,
          name:"vivek",
          email:"viveksengar921927",
          phone:789788978,
          role:"developer"
        },
      ]
    },
    {
      id: '5',
      organization: 'Global Pharma Inc.',
      type: 'Public',
      industry: 'Pharmaceuticals',
      onboarding: '2022-04-20',
      related_orgs: [],
      products: ['Drug A', 'Drug B', 'Drug C'],
      'Org SPOC': 'David Lee',
      email: 'david.lee@globalpharma.com',
      phone: '444-555-6666',
      contact:[
        {   id:9,
          name:"geta",
          email:"viveksengar921927",
          phone:798789,
          role:"developer"
        },
        {   id:10,
          name:"vivek",
          email:"viveksengar921927",
          phone:356465,
          role:"developer"
        },
      ]
    },
    {
      id: '6',
      organization: 'Construction Enterprises Ltd.',
      type: 'Private',
      industry: 'Construction',
      onboarding: '2022-05-12',
      related_orgs: [],
      products: ['Building Material X', 'Building Material Y'],
      'Org SPOC': 'Sarah Adams',
      email: 'sarah.adams@constructionent.com',
      phone: '777-888-9999',
      contact:[
        {   id:12,
          name:"ram",
          email:"viveksengar921927",
          phone:4565466463,
          role:"developer"
        },
        {  id:13,
          name:"shyam",
          email:"viveksengar921927",
          phone:908907878,
          role:"developer"
        },
      ]
    },
    {
      id: '7',
      organization: 'Energy Solutions Inc.',
      type: 'Public',
      industry: 'Energy',
      onboarding: '2022-06-30',
      related_orgs: [],
      products: ['Solar Panels', 'Wind Turbines'],
      'Org SPOC': 'Kevin Wilson',
      email: 'kevin.wilson@energysolutions.com',
      phone: '333-444-5555',
      contact:[
        {  id:14,
          name:"vivek2132",
          email:"viveksengar921927",
          phone:5675676,
          role:"developer"
        },
        {  id:15,
          name:"vivek123",
          email:"viveksengar921927",
          phone:567575765242,
          role:"developer"
        },
      ]
    },
    {
      id: '8',
      organization: 'Healthcare Innovations Ltd.',
      type: 'Private',
      industry: 'Healthcare',
      onboarding: '2022-07-17',
      related_orgs: [],
      products: ['Medical Equipment X', 'Medical Equipment Y'],
      'Org SPOC': 'Jessica Garcia',
      email: 'jessica.garcia@healthcareinnov.com',
      phone: '666-777-8888',
      contact:[
        { id:16,
          name:"vivek12341421",
          email:"viveksengar921927",
          phone:807887667,
          role:"developer"
        },
        { id:17,
          name:"vivek3255434",
          email:"viveksengar921927",
          phone:67568568865,
          role:"developer"
        },
      ]
    },
    {
      id: '9',
      organization: 'Media Solutions Inc.',
      type: 'Public',
      industry: 'Media',
      onboarding: '2022-08-25',
      related_orgs: [],
      products: ['Advertising Platform', 'Media Streaming Service'],
      'Org SPOC': 'Andrew Roberts',
      email: 'andrew.roberts@mediasolutions.com',
      phone: '888-999-0000',
      contact:[
        { id:18,
          name:"vivek435345",
          email:"viveksengar921927",
          phone:575733554,
          role:"developer"
        },
        {
          name:"vivek65654",
          email:"viveksengar921927",
          phone:7689868667,
          role:"tester"
        },
      ]
    },
    {
      id: '10',
      organization: 'Consultancy Group Ltd.',
      type: 'Private',
      industry: 'Consulting',
      onboarding: '2022-09-08',
      related_orgs: [],
      products: ['Business Strategy Services', 'IT Consulting'],
      'Org SPOC': 'Michelle Turner',
      email: 'michelle.turner@consultancygroup.com',
      phone: '000-111-2222',
      contact:[
        { id:19,
          name:"vivek45745",
          email:"viveksengar921927",
          phone:56568878,
          role:"developer"
        },
        {  id:20,
          name:"vivek457656",
          email:"viveksengar921927",
          phone:2425753535776575734532,
          role:"developer"
        },
      ]
    },
  ];

  contactSubject=new BehaviorSubject<any>(this.organization);
  // setContact(data:any){
  //   this.contactSubject.next(data);
  // }

}
