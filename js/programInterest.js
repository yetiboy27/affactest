$(document).ready(function(){

// new comment
//arrays for programs selection
// var pgm1 = [
//     {display: "What program are you interested in?", value: "" },
//     {display: "Undecided", value: "7f2d172c-c8e8-e211-9330-005056b8001d" },
//     {display:"Graduate: Accounting (Day)",value:"88b9c502-f3ad-e311-aa57-005056b8001d"},
//     {display:"Graduate: Accounting (Evening/Online)",value:"8522ce81-915e-e311-99a6-005056b80029"},
//     {display:"Graduate: Biomedical Sciences",value:"2038ab84-52b1-e011-b7aa-005056b8001d"},
//     {display:"Graduate: Counseling",value:"01593c21-3b8a-e511-80df-12b796d1d7f2"},
//     {display:"Graduate: Criminology",value:"8722ce81-915e-e311-99a6-005056b80029"},
//     {display:"Graduate: Data Science",value:"9a24a740-38a7-e411-a2de-005056b8001d"},
//     {display:"Graduate: Data Science (Campus Cohort)",value:"e02b7891-9101-e611-80f0-12d74673ef26"},
//     {display:"Graduate: Database Technologies",value:"8922ce81-915e-e311-99a6-005056b80029"},
//     {display:"Graduate: Development Practice",value:"79b2cc69-60c0-e511-80e9-12d74673ef26"},
//     {display:"Graduate: Education - MAE Teacher Leadership",value:"b037ae74-9af5-e311-baca-005056b8001d"},
//     {display:"Graduate: Education - MAE Teacher Licensure: Elementary",value:"8b489326-9af5-e311-baca-005056b8001d"},
//     {display:"Graduate: Education - MAE Teacher Licensure: Secondary",value:"83490f3a-9af5-e311-baca-005056b8001d"},
//     {display:"Graduate: Education - MAE Teaching the Linguistically Diverse",value:"e8bd9a5c-9af5-e311-baca-005056b8001d"},
//     {display:"Graduate: Education - MEd Added Endorsement: Reading Specialist (Colorado Only)",value:"558d9722-925e-e311-99a6-005056b80029"},
//     {display:"Graduate: Education - MEd Added Endorsement: Reading Teacher",value:"578d9722-925e-e311-99a6-005056b80029"},
//     {display:"Graduate: Education - MEd Added Endorsement: Special Education Generalist",value:"d7ea5d09-dac8-e411-ad43-005056b8001d"},
//     {display:"Graduate: Education - MEd Educational Leadership (Principal Licensure)",value:"84148eb5-d9c8-e411-ad43-005056b8001d"},
//     {display:"Graduate: Education - MEd Elementary Education with Initial Teacher Licensure",value:"8122ce81-915e-e311-99a6-005056b80029"},
//     {display:"Graduate: Education - MEd Reading",value:"bf22ce81-915e-e311-99a6-005056b80029"},
//     {display:"Graduate: Education - MEd Secondary with Initial Teacher Licensure",value:"7c2926e2-2c24-e511-80d8-0a42e3c7e6c9"},
//     {display:"Graduate: Education - MEd Special Education with Initial Teacher Licensure",value:"678d9722-925e-e311-99a6-005056b80029"},
//     {display:"Graduate: Enterprise Systems Engineering",value:"17014e03-dee7-e511-80e8-0a31e000b763"},
//     {display:"Graduate: Environmental Biology",value:"113fadb3-0dd2-e311-8ac2-005056b8001d"},
//     {display:"Graduate: Fine Arts in Creative Writing",value:"8c6d671e-b02f-e411-a418-005056b8001d"},
//     {display:"Graduate: Health Care Informatics and Information Management",value:"458fa38a-52b1-e011-b7aa-005056b8001d"},
//     {display:"Graduate: Health Services Administration",value:"468fa38a-52b1-e011-b7aa-005056b8001d"},
//     {display:"Graduate: Information Assurance",value:"8b22ce81-915e-e311-99a6-005056b80029"},
//     {display:"Graduate: Information Assurance - Cyber Security",value:"e722ce81-915e-e311-99a6-005056b80029"},
//     {display:"Graduate: Information Assurance - Policy Management",value:"e922ce81-915e-e311-99a6-005056b80029"},
//     {display:"Graduate: Information Technology Management",value:"8d22ce81-915e-e311-99a6-005056b80029"},
//     {display:"Graduate: Marriage and Family Therapy",value:"a8dcbe7d-c52a-e311-88ad-005056b8001d"},
//     {display:"Graduate: Master of Arts (Multidisciplinary Individually Designed)",value:"7f22ce81-915e-e311-99a6-005056b80029"},
//     {display:"Graduate: MBA - Finance and Accounting",value:"9d22ce81-915e-e311-99a6-005056b80029"},
//     {display:"Graduate: MBA - General",value:"9f22ce81-915e-e311-99a6-005056b80029"},
//     {display:"Graduate: MBA - Health Industry Leadership",value:"a122ce81-915e-e311-99a6-005056b80029"},
//     {display:"Graduate: MBA - Marketing",value:"a922ce81-915e-e311-99a6-005056b80029"},
//     {display:"Graduate: MBA - Operations Management",value:"ab22ce81-915e-e311-99a6-005056b80029"},
//     {display:"Graduate: MBA - Strategic Management",value:"b122ce81-915e-e311-99a6-005056b80029"},
//     {display:"Graduate: MBA (Dual) - Finance & Accounting and Health Industry Leadership",value:"891214cb-51dc-e311-baca-005056b8001d"},
//     {display:"Graduate: MBA (Dual) - Finance & Accounting and Marketing",value:"ed8803e6-51dc-e311-baca-005056b8001d"},
//     {display:"Graduate: MBA (Dual) - Finance & Accounting and Operations Management",value:"d8b7e3a2-51dc-e311-baca-005056b8001d"},
//     {display:"Graduate: MBA (Dual) - Finance & Accounting and Strategic Management",value:"218e7d11-52dc-e311-baca-005056b8001d"},
//     {display:"Graduate: MBA (Dual) - Health Industry Leadership and Marketing",value:"a744683f-52dc-e311-baca-005056b8001d"},
//     {display:"Graduate: MBA (Dual) - Health Industry Leadership and Operations Management",value:"b85f5b5e-52dc-e311-baca-005056b8001d"},
//     {display:"Graduate: MBA (Dual) - Health Industry Leadership and Strategic Management",value:"771966f8-56dc-e311-baca-005056b8001d"},
//     {display:"Graduate: MBA (Dual) - Marketing and Operations Management",value:"ab9e3180-52dc-e311-baca-005056b8001d"},
//     {display:"Graduate: MBA (Dual) - Marketing and Strategic Management",value:"06b48098-52dc-e311-baca-005056b8001d"},
//     {display:"Graduate: MBA (Dual) - Operations Management and Strategic Management",value:"b20eb1c0-52dc-e311-baca-005056b8001d"},
//     {display:"Graduate: Nonprofit Management",value:"8322ce81-915e-e311-99a6-005056b80029"},
//     {display:"Graduate: Nursing - Family Nurse Practitioner",value:"478fa38a-52b1-e011-b7aa-005056b8001d"},
//     {display:"Graduate: Nursing - Family Nurse Practitioner (CCNE Approved Applicants Only)",value:"d5ba80cb-38df-e511-80ed-0a42e3c7e6c9"},
//     {display:"Graduate: Nursing - Leadership in Health Care Systems, Education Focus",value:"498fa38a-52b1-e011-b7aa-005056b8001d"},
//     {display:"Graduate: Nursing - Leadership in Health Care Systems, Management Focus",value:"4a8fa38a-52b1-e011-b7aa-005056b8001d"},
//     {display:"Graduate: Nursing - Neonatal Nurse Practitioner",value:"4b8fa38a-52b1-e011-b7aa-005056b8001d"},
//     {display:"Graduate: Nursing Completion - FNP Specialization",value:"33e1874f-bada-e311-baca-005056b8001d"},
//     {display:"Graduate: Nursing Completion - NNP Specialization",value:"08ab0f66-bada-e311-baca-005056b8001d"},
//     {display:"Graduate: Organization Leadership - Enterprise Resource Leadership & Planning",value:"eb22ce81-915e-e311-99a6-005056b80029"},
//     {display:"Graduate: Organization Leadership - Human Resource Management & Leadership",value:"ef22ce81-915e-e311-99a6-005056b80029"},
//     {display:"Graduate: Organization Leadership - Organizational Leadership & Management",value:"f122ce81-915e-e311-99a6-005056b80029"},
//     {display:"Graduate: Organization Leadership - Project Leadership & Management",value:"ed22ce81-915e-e311-99a6-005056b80029"},
//     {display:"Graduate: Organization Leadership (Dual) - Enterprise Resource Leadership & Planning and Human Resource Management & Leadership",value:"ef73efcc-54dc-e311-baca-005056b8001d"},
//     {display:"Graduate: Organization Leadership (Dual) - Enterprise Resource Leadership & Planning and Organizational Leadership & Planning",value:"c090c5e6-54dc-e311-baca-005056b8001d"},
//     {display:"Graduate: Organization Leadership (Dual) - Enterprise Resource Leadership & Planning and Project Leadership & Management",value:"88fe080f-55dc-e311-baca-005056b8001d"},
//     {display:"Graduate: Organization Leadership (Dual) - Human Resource Management & Leadership and Organization Leadership & Management",value:"35a84932-55dc-e311-baca-005056b8001d"},
//     {display:"Graduate: Organization Leadership (Dual) - Human Resource Management & Leadership and Project Leadership & Management",value:"3c7b2b75-55dc-e311-baca-005056b8001d"},
//     {display:"Graduate: Organization Leadership (Dual) - Organizational Leadership & Management and Project Leadership & Management",value:"97d81f98-55dc-e311-baca-005056b8001d"},
//     {display:"Graduate: Post BSN to DNP, Family Nurse Practitioner",value:"4f19941a-c256-e311-9122-005056b8001d"},
//     {display:"Graduate: Post BSN to DNP, Neonatal Nurse Practitioner",value:"e97fd3ec-c356-e311-9122-005056b8001d"},
//     {display:"Graduate: Software Engineering",value:"9122ce81-915e-e311-99a6-005056b80029"},
//     {display:"Graduate: Software Engineering & Database Technologies",value:"9322ce81-915e-e311-99a6-005056b80029"},
//     {display:"Graduate: Teacher Education",value:"e15add45-3a39-e411-a418-005056b8001d"},
//     {display:"Graduate: Unknown",value:"7f2d172c-c8e8-e211-9330-005056b8001d"},
//     {display:"Graduate Certificate: Adult Education and Training",value:"59baa2f6-74ba-e311-9614-005056b8001d"},
//     {display:"Graduate Certificate: Agile Technologies",value:"d6e6e1b1-63be-e311-9614-005056b8001d"},
//     {display:"Graduate Certificate: Applied Environmental Biology",value:"e2e124df-0dd2-e311-8ac2-005056b8001d"},
//     {display:"Graduate Certificate: Autism Education",value:"3d22ce81-915e-e311-99a6-005056b80029"},
//     {display:"Graduate Certificate: Criminology",value:"3f22ce81-915e-e311-99a6-005056b80029"},
//     {display:"Graduate Certificate: Critical Care (Centura Employees Only)",value:"ead55427-841d-e411-bc83-005056b8001d"},
//     {display:"Graduate Certificate: Cybersecurity",value:"a7678ae1-63be-e311-9614-005056b8001d"},
//     {display:"Graduate Certificate: Data Science",value:"4446081b-78f1-e311-baca-005056b8001d"},
//     {display:"Graduate Certificate: Database Administration with Oracle",value:"4122ce81-915e-e311-99a6-005056b80029"},
//     {display:"Graduate Certificate: Database Development",value:"4322ce81-915e-e311-99a6-005056b80029"},
//     {display:"Graduate Certificate: Development Practice",value:"f522127c-24cf-e411-ad43-005056b8001d"},
//     {display:"Graduate Certificate: Enterprise Java Software Development",value:"4722ce81-915e-e311-99a6-005056b80029"},
//     {display:"Graduate Certificate: Enterprise Resouce Planning",value:"4922ce81-915e-e311-99a6-005056b80029"},
//     {display:"Graduate Certificate: Executive Information Technology",value:"4b22ce81-915e-e311-99a6-005056b80029"},
//     {display:"Graduate Certificate: Executive Leadership",value:"4f22ce81-915e-e311-99a6-005056b80029"},
//     {display:"Graduate Certificate: Executive Project Management",value:"5122ce81-915e-e311-99a6-005056b80029"},
//     {display:"Graduate Certificate: Full Stack+ (Frisco location only)",value:"e73a5930-080b-e611-80e9-12b796d1d7f2"},
//     {display:"Graduate Certificate: Health Care Business Management",value:"356748bf-c492-e411-83a9-005056b8001d"},
//     {display:"Graduate Certificate: Health Care Education",value:"3f8fa38a-52b1-e011-b7aa-005056b8001d"},
//     {display:"Graduate Certificate: Health Care Informatics",value:"3e8fa38a-52b1-e011-b7aa-005056b8001d"},
//     {display:"Graduate Certificate: Health Care Quality and Patient Safety",value:"428fa38a-52b1-e011-b7aa-005056b8001d"},
//     {display:"Graduate Certificate: Information Assurance Policy Management",value:"e640c6f1-63be-e311-9614-005056b8001d"},
//     {display:"Graduate Certificate: Linguistically Diverse Learner",value:"98326759-f605-e411-954f-005056b8001d"},
//     {display:"Graduate Certificate: Literacy",value:"5f22ce81-915e-e311-99a6-005056b80029"},
//     {display:"Graduate Certificate: Master of Arts Self-Designed",value:"4f8d9722-925e-e311-99a6-005056b80029"},
//     {display:"Graduate Certificate: Mobile Software Development",value:"a3241018-64be-e311-9614-005056b8001d"},
//     {display:"Graduate Certificate: Nonprofit Organizational Capacity Building",value:"6522ce81-915e-e311-99a6-005056b80029"},
//     {display:"Graduate Certificate: Software Engineering",value:"7122ce81-915e-e311-99a6-005056b80029"},
//     {display:"Graduate Certificate: Storage Area Networks",value:"7322ce81-915e-e311-99a6-005056b80029"},
//     {display:"Graduate Certificate: Strategic Business Management",value:"7522ce81-915e-e311-99a6-005056b80029"},
//     {display:"Graduate Certificate: Strategic Human Resource Integration",value:"7722ce81-915e-e311-99a6-005056b80029"},
//     {display:"Graduate Certificate: Systems Engineering",value:"7922ce81-915e-e311-99a6-005056b80029"},
//     {display:"Graduate Certificate: Teacher Leadership",value:"cbc79086-f605-e411-954f-005056b8001d"},
//     {display:"Post-Graduate Certificate: Addictions Counseling",value:"ba2f00e3-77f1-e311-baca-005056b8001d"},
//     {display:"Post-Graduate Certificate: Adult-Gerontology Acute-Care Nurse Practitioner",value:"3cd33fb3-a2d8-e411-8793-005056b8001d"},
//     {display:"Post-Graduate Certificate: Counseling Children and Adolescents",value:"50bb53e5-702b-e311-88ad-005056b8001d"},
//     {display:"Post-Graduate Certificate: Counseling Military Families",value:"e3577322-712b-e311-88ad-005056b8001d"},
//     {display:"Post-Graduate Certificate: Depth Psychotherapy",value:"79d26965-ac79-e511-80e0-0a31e000b763"},
//     {display:"Post-Graduate Certificate: Executive Nonprofit Leadership",value:"6322ce81-915e-e311-99a6-005056b80029"},
//     {display:"Post-Graduate Certificate: Family Nurse Practitioner",value:"408fa38a-52b1-e011-b7aa-005056b8001d"},
//     {display:"Post-Graduate Certificate: Health Information Management",value:"548fa38a-52b1-e011-b7aa-005056b8001d"},
//     {display:"Post-Graduate Certificate: Marriage and Family Therapy",value:"1aa5784f-712b-e311-88ad-005056b8001d"},
//     {display:"Post-Graduate Certificate: Neonatal Nurse Practitioner",value:"418fa38a-52b1-e011-b7aa-005056b8001d"},
//     {display:"Post-Professional Certificate: Orthopedic Physical Therapy",value:"ae625e75-72fd-e411-8793-005056b8001d"},
//     {display:"Graduate Certificate: Biomedical Genetics and Genomics",value:"066c5207-a3d8-e411-8793-005056b8001d"}
//     ];
   
// var pgm2 = [

//  {
//    value:"74e72a1e-c8e8-e211-9330-005056b8001d",
//    display:"Undecided",
//  }
//  {display: "What program are you interested in?", value: "" },    
//  {
//    value:"0b22ce81-915e-e311-99a6-005056b80029",
//    display:"Accelerated: Accounting",   
//  },
//  {
//    value:"0d22ce81-915e-e311-99a6-005056b80029",
//    display:"Accelerated: Applied Psychology",
//  },
//  {
//    value:"6f5c63b2-6dca-e311-9614-005056b8001d",
//    display:"Accelerated: Applied Psychology - Health Psychology",
//  },
//  {
//    value:"a4b612dd-6dca-e311-9614-005056b8001d",
//    display:"Accelerated: Applied Psychology - Positive Psychology",
//  },
//  {
//    value:"f121ce81-915e-e311-99a6-005056b80029",
//    display:"Accelerated: Applied Science",
//  },
//  {
//    value:"2f8d9722-925e-e311-99a6-005056b80029",
//    display:"Accelerated: Applied Science - Community Interpreting",
//  },
//  {
//    value:"318d9722-925e-e311-99a6-005056b80029",
//    display:"Accelerated: Applied Science - Homeland Security",
//  },
//  {
//    value:"75db8765-d089-e311-aefd-005056b80029",
//    display:"Accelerated: Applied Science - Management",
//  },
//  {
//    value:"0f22ce81-915e-e311-99a6-005056b80029",
//    display:"Accelerated: Business",
//  },
//  {
//    value:"2922ce81-915e-e311-99a6-005056b80029",
//    display:"Accelerated: Business - Finance",
//  },
//  {
//    value:"458d9722-925e-e311-99a6-005056b80029",
//    display:"Accelerated: Business - Flexible Specialization",
//  },
//  {
//    value:"2d22ce81-915e-e311-99a6-005056b80029",
//    display:"Accelerated: Business - Human Resource Management",   
//  },
//  {
//    value:"478d9722-925e-e311-99a6-005056b80029",
//    display:"Accelerated: Business - Management",   
//  },
//  {
//    value:"498d9722-925e-e311-99a6-005056b80029",
//    display:"Accelerated: Business - Marketing",   
//  },
//  {
//    value:"4b8d9722-925e-e311-99a6-005056b80029",
//    display:"Accelerated: Business - Project Management",   
//  },
//  {
//    value:"4d8d9722-925e-e311-99a6-005056b80029",
//    display:"Accelerated: Business - Public Administration",   
//  },
//  {
//    value:"1122ce81-915e-e311-99a6-005056b80029",
//    display:"Accelerated: Business - Technology Management",   
//  },
//  {
//    value:"3b8d9722-925e-e311-99a6-005056b80029",
//    display:"Accelerated: Communication",   
//  },
//  {
//    value:"77f5a136-6aca-e311-9614-005056b8001d",
//    display:"Accelerated: Communication - Conflict Management",   
//  },
//  {
//    value:"6d69408a-6aca-e311-9614-005056b8001d",
//    display:"Accelerated: Communication - Leadership",   
//  },
//  {
//    value:"1322ce81-915e-e311-99a6-005056b80029",
//    display:"Accelerated: Computer Information Systems",
//  },
//  {
//    value:"1722ce81-915e-e311-99a6-005056b80029",
//    display:"Accelerated: Computer Science",
//  },
//  {
//    value:"1922ce81-915e-e311-99a6-005056b80029",
//    display:"Accelerated: Criminology",
//  },
//  {
//    value:"fd21ce81-915e-e311-99a6-005056b80029",
//    display:"Accelerated: Elementary Education with Initial Teacher Licensure",
//  },
//  {
//    value:"1b22ce81-915e-e311-99a6-005056b80029",
//  },
//  {
//    value:"1d22ce81-915e-e311-99a6-005056b80029",
//    display:"Accelerated: Human Resource Management",
//  },
//  {
//    value:"e4148a31-6f26-e511-80d6-12b796d1d7f2",
//    display:"Accelerated: Information Technology",
//  },
//  {
//    value:"3d8d9722-925e-e311-99a6-005056b80029",
//    display:"Accelerated: Liberal Arts",
//  },
//  {
//    value:"acdf467f-49d1-e311-8ac2-005056b8001d",
//    display:"Accelerated: Management",
//  },
//  {
//    value:"1f22ce81-915e-e311-99a6-005056b80029",
//    display:"Accelerated: Marketing",
//  },
//  {
//    value:"2122ce81-915e-e311-99a6-005056b80029",
//    display:"Accelerated: Public Administration",
//  },
//  {
//    value:"2322ce81-915e-e311-99a6-005056b80029",
//    display:"Accelerated: Social Science",
//  },
//  {
//    value:"b410619a-a1b6-e311-9614-005056b8001d",
//    display:"Undergraduate Certificate: Applied Craft Brewing",
//  },
//  {
//    value:"fb22ce81-915e-e311-99a6-005056b80029",
//    display:"Undergraduate Certificate: Conflict Management",
//  },
//  {
//    value:"a97e4461-79be-e211-8b6f-005056b8001d",
//    display:"Undergraduate Certificate: Gerontology",
//  },
//  {
//    value:"0323ce81-915e-e311-99a6-005056b80029",
//  },
//  {
//    value:"0923ce81-915e-e311-99a6-005056b80029",
//    display:"Undergraduate Certificate: Leadership",
//  },
//  {
//    value:"426ab3a5-379d-e511-80e4-12d74673ef26",
//    display:"Undergraduate Certificate: Professional Liberal Studies",
//  },
//  {
//    value:"7b8d9722-925e-e311-99a6-005056b80029",
//    display:"Undergraduate Certificate: Project Management",
//  },
//  {
//    value:"1123ce81-915e-e311-99a6-005056b80029",
//    display:"Undergraduate Certificate: Public Administration",
//  },
//  {
//    value:"1323ce81-915e-e311-99a6-005056b80029",
//    display:"Undergraduate Certificate: Social Violence",
//  },
//  {
//    value:"e955ff6e-f3de-e011-8d3e-005056b8001d",
//    display:"Accounting",
//  },
//  {
//    value:"25b69fd2-e32e-e411-a418-005056b8001d",
//    display:"Anthropology",
//  },
//  {
//    value:"acd1ee8c-1c84-e211-8a97-005056b8001d",
//    display:"Art History",
//  },
//  {
//    value:"797fb60a-b0b1-e011-b7aa-005056b8001d",
//    display:"Biochemistry",
//  },
//  {
//    value:"7a7fb60a-b0b1-e011-b7aa-005056b8001d",
//    display:"Biology",
//  },
//  {
//    value:"7b7fb60a-b0b1-e011-b7aa-005056b8001d",
//    display:"Business Administration",
//  },
//  {
//    value:"7c7fb60a-b0b1-e011-b7aa-005056b8001d",
//    display:"Business Administration: Finance",
//  },
//  {
//    value:"7d7fb60a-b0b1-e011-b7aa-005056b8001d",
//    display:"Business Administration: International Business",
//  },
//  {
//    value:"7e7fb60a-b0b1-e011-b7aa-005056b8001d",
//    display:"Business Administration: Management",
//  },
//  {
//    value:"7f7fb60a-b0b1-e011-b7aa-005056b8001d",
//    display:"Business Administration: Management Information Systems",
//  },
//  {
//    value:"807fb60a-b0b1-e011-b7aa-005056b8001d",
//    display:"Business Administration: Marketing",
//  },
//  {
//    value:"75631f34-24da-e311-8ac2-005056b8001d",
//    display:"Business Technology Management",
//  },
//  {
//    value:"827fb60a-b0b1-e011-b7aa-005056b8001d",
//    display:"Chemistry",
//  },
//  {
//    value:"27af8ba8-e32e-e411-a418-005056b8001d",
//    display:"Christian Leadership",
//  },
//  {
//    value:"847fb60a-b0b1-e011-b7aa-005056b8001d",
//    display:"Communication",
//  },
//  {
//    value:"dfda0dcb-71df-e311-baca-005056b8001d",
//    display:"Computational Physics",
//  },
//  {
//    value:"93067f1e-24da-e311-8ac2-005056b8001d",
//    display:"Computer Information Systems",
//  },
//  {
//    value:"857fb60a-b0b1-e011-b7aa-005056b8001d",
//    display:"Computer Science",
//  },
//  {
//    value:"4500b9a8-e887-e511-80e3-12d74673ef26",
//    display:"Criminal Justice",
//  },
//  {
//    value:"877fb60a-b0b1-e011-b7aa-005056b8001d",
//    display:"Economics",
//  },
//  {
//    value:"887fb60a-b0b1-e011-b7aa-005056b8001d",
//    display:"Education",
//  },
//  {
//    value:"d1a993ee-71df-e311-baca-005056b8001d",
//    display:"Elementary Education",
//  },
//  {
//    value:"867fb60a-b0b1-e011-b7aa-005056b8001d",
//    display:"Engineering (Dual Degree)",
//  },
//  {
//    value:"897fb60a-b0b1-e011-b7aa-005056b8001d",
//    display:"English",
//  },
//  {
//    value:"8b7fb60a-b0b1-e011-b7aa-005056b8001d",
//    display:"Environmental Science",
//  },
//  {
//    value:"3d631f5c-8efb-e211-a12d-005056b8001d",
//    display:"Environmental Studies",
//  },
//  {
//    value:"947fb60a-b0b1-e011-b7aa-005056b8001d",
//    display:"French",
//  },
//  {
//    value:"8c7fb60a-b0b1-e011-b7aa-005056b8001d",
//    display:"Health and Exercise Science",
//  },
//  {
//    value:"baca4266-e42e-e411-a418-005056b8001d",
//    display:"Health Care Administration",
//  },
//  {
//    value:"4fb99743-24da-e311-8ac2-005056b8001d",
//    display:"Health Information Management",
//  },
//  {
//    value:"967fb60a-b0b1-e011-b7aa-005056b8001d",
//    display:"History",
//  },
//  {
//    value:"7bb6ac10-24da-e311-8ac2-005056b8001d",
//    display:"Information Technology",
//  },
//  {
//    value:"987fb60a-b0b1-e011-b7aa-005056b8001d",
//    display:"Mathematics",
//  },
//  {
//    value:"997fb60a-b0b1-e011-b7aa-005056b8001d",
//    display:"Music",
//  },
//  {
//    value:"a0434316-72df-e311-baca-005056b8001d",
//    display:"Music History and Literature",
//  },
//  {
//    value:"c3876421-72df-e311-baca-005056b8001d",
//    display:"Music Performance",
//  },
//  {
//    value:"9a7fb60a-b0b1-e011-b7aa-005056b8001d",
//    display:"Neuroscience",
//  },
//  {
//    value:"9b7fb60a-b0b1-e011-b7aa-005056b8001d",
//    display:"Nursing",
//  },
//  {
//    value:"9c7fb60a-b0b1-e011-b7aa-005056b8001d",
//    display:"Peace and Justice Studies",
//  },
//  {
//    value:"9e7fb60a-b0b1-e011-b7aa-005056b8001d",
//    display:"Philosophy",
//  },
//  {
//    value:"d9fd06f4-90d2-e011-8d3e-005056b8001d",
//    display:"Physics",
//  },
//  {
//    value:"9f7fb60a-b0b1-e011-b7aa-005056b8001d",
//    display:"Political Economy",
//  },
//  {
//    value:"a07fb60a-b0b1-e011-b7aa-005056b8001d",
//    display:"Politics",
//  },
//  {
//    value:"a17fb60a-b0b1-e011-b7aa-005056b8001d",
//    display:"Pre-Law",
//  },
//  {
//    value:"a27fb60a-b0b1-e011-b7aa-005056b8001d",
//    display:"Pre-Med/Pre-Health",
//  },
//  {
//    value:"9d7fb60a-b0b1-e011-b7aa-005056b8001d",
//    display:"Pre-Pharmacy",
//  },
//  {
//    value:"a37fb60a-b0b1-e011-b7aa-005056b8001d",
//    display:"Pre-Physical Therapy",
//  },
//  {
//    value:"a47fb60a-b0b1-e011-b7aa-005056b8001d",
//    display:"Psychology",
//  },
//  {
//    value:"a57fb60a-b0b1-e011-b7aa-005056b8001d",
//    display:"Religious Studies",
//  },
//  {
//    value:"a67fb60a-b0b1-e011-b7aa-005056b8001d",
//    display:"Sociology",
//  },
//  {
//    value:"a77fb60a-b0b1-e011-b7aa-005056b8001d",
//    display:"Spanish",
//  },
//  {
//    value:"8691f810-9fb4-e011-b7aa-005056b8001d",
//    display:"Undecided",
//  },
//  {
//    value:"42a4653e-90ee-e411-8793-005056b8001d",
//    display:"Undergraduate: Regis College (day)",
//  },
//  {
//    value:"8d7fb60a-b0b1-e011-b7aa-005056b8001d",
//    display:"Visual Arts",
//  },
//  {
//    value:"8e7fb60a-b0b1-e011-b7aa-005056b8001d",
//    display:"Visual Arts: Drawing",
//  },
//  {
//    value:"8f7fb60a-b0b1-e011-b7aa-005056b8001d",
//    display:"Visual Arts: Electronic Imaging",
//  },
//  {
//    value:"907fb60a-b0b1-e011-b7aa-005056b8001d",
//    display:"Visual Arts: Painting",
//  },
//  {
//    value:"917fb60a-b0b1-e011-b7aa-005056b8001d",
//    display:"Visual Arts: Photography",
//  },
//  {
//    value:"927fb60a-b0b1-e011-b7aa-005056b8001d",
//    display:"Visual Arts: Printmaking",
//  },
//  {
//    value:"937fb60a-b0b1-e011-b7aa-005056b8001d",
//    display:"Visual Arts: Sculpture",
//  },
//  {
//    value:"a87fb60a-b0b1-e011-b7aa-005056b8001d",
//    display:"Women and Gender Studies",
//  },
//  {
//    value:"338d9722-925e-e311-99a6-005056b80029",
//    display:"Undergraduate: Applied Science - Interdisciplinary Studies",
//  },
//  {
//    value:"4d8fa38a-52b1-e011-b7aa-005056b8001d",
//    display:"Undergraduate: Health Care Administration",
//  },
//  {
//    value:"4e8fa38a-52b1-e011-b7aa-005056b8001d",
//    display:"Undergraduate: Health Information Management",
//  },
//  {
//    value:"4f8fa38a-52b1-e011-b7aa-005056b8001d",
//    display:"Undergraduate: Nursing - Accelerated",
//  },
//  {
//    value:"518fa38a-52b1-e011-b7aa-005056b8001d",
//    display:"Undergraduate: Nursing - CHOICE",
//  },
//  {
//    value:"538fa38a-52b1-e011-b7aa-005056b8001d",
//    display:"Undergraduate: Nursing - RN to BSN",
//  },
//  {
//    value:"528fa38a-52b1-e011-b7aa-005056b8001d",
//    display:"Undergraduate: Nursing - RN to MS in Nursing Education Focus",
//  },
//  {
//    value:"03584e9d-bfb0-e111-9a7b-005056b8001d",
//    display:"Undergraduate: Nursing - RN to MS in Nursing Management Focus",
//  },
//  {
//    value:"080f4848-a0b4-e011-b7aa-005056b8001d",
//    display:"Undergraduate: Nursing - Traditional",
//  },
//  {
//    value:"c3e9e81c-8dd9-e511-80e6-0a31e000b763",
//    display:"Undergraduate: Philosophy (Seminarians Only)",
//  },
//  {
//    value:"99bf0838-3a39-e411-a418-005056b8001d",
//    display:"Undergraduate: Teacher Education",
//  }
 
// ];
   
var pgm3 = [
    {display: "What program are you interested in?", value: "" },
    {display: "Undecided", value: "7f2d172c-c8e8-e211-9330-005056b8001d" },    
    {display:"Graduate: Accounting (Evening/Online)",value:"College of Business and Economics"},
    {display:"Graduate: MBA - Finance and Accounting",value:"9d22ce81-915e-e311-99a6-005056b80029"},
    {display:"Graduate: MBA - General",value:"9f22ce81-915e-e311-99a6-005056b80029"},
    {display:"Graduate: MBA - Health Industry Leadership",value:"a122ce81-915e-e311-99a6-005056b80029"},
    {display:"Graduate: MBA - Marketing",value:"a922ce81-915e-e311-99a6-005056b80029"},
    {display:"Graduate: MBA - Operations Management",value:"ab22ce81-915e-e311-99a6-005056b80029"},
    {display:"Graduate: MBA - Strategic Management",value:"b122ce81-915e-e311-99a6-005056b80029"},
    {display:"Graduate: MBA (Dual) - Finance & Accounting and Health Industry Leadership",value:"891214cb-51dc-e311-baca-005056b8001d"},
    {display:"Graduate: MBA (Dual) - Finance & Accounting and Marketing",value:"ed8803e6-51dc-e311-baca-005056b8001d"},
    {display:"Graduate: MBA (Dual) - Finance & Accounting and Operations Management",value:"d8b7e3a2-51dc-e311-baca-005056b8001d"},
    {display:"Graduate: MBA (Dual) - Finance & Accounting and Strategic Management",value:"218e7d11-52dc-e311-baca-005056b8001d"},
    {display:"Graduate: MBA (Dual) - Health Industry Leadership and Marketing",value:"a744683f-52dc-e311-baca-005056b8001d"},
    {display:"Graduate: MBA (Dual) - Health Industry Leadership and Operations Management",value:"b85f5b5e-52dc-e311-baca-005056b8001d"},
    {display:"Graduate: MBA (Dual) - Health Industry Leadership and Strategic Management",value:"771966f8-56dc-e311-baca-005056b8001d"},
    {display:"Graduate: MBA (Dual) - Marketing and Operations Management",value:"ab9e3180-52dc-e311-baca-005056b8001d"},
    {display:"Graduate: MBA (Dual) - Marketing and Strategic Management",value:"06b48098-52dc-e311-baca-005056b8001d"},
    {display:"Graduate: MBA (Dual) - Operations Management and Strategic Management",value:"b20eb1c0-52dc-e311-baca-005056b8001d"},
    {display:"Graduate: Nonprofit Management",value:"8322ce81-915e-e311-99a6-005056b80029"},
    {display:"Graduate: Organization Leadership - Enterprise Resource Leadership & Planning",value:"eb22ce81-915e-e311-99a6-005056b80029"},
    {display:"Graduate: Organization Leadership - Human Resource Management & Leadership",value:"ef22ce81-915e-e311-99a6-005056b80029"},
    {display:"Graduate: Organization Leadership - Organizational Leadership & Management",value:"f122ce81-915e-e311-99a6-005056b80029"},
    {display:"Graduate: Organization Leadership - Project Leadership & Management",value:"ed22ce81-915e-e311-99a6-005056b80029"},
    {display:"Graduate: Organization Leadership (Dual) - Enterprise Resource Leadership & Planning and Human Resource Management & Leadership",value:"ef73efcc-54dc-e311-baca-005056b8001d"},
    {display:"Graduate: Organization Leadership (Dual) - Enterprise Resource Leadership & Planning and Organizational Leadership & Planning",value:"c090c5e6-54dc-e311-baca-005056b8001d"},
    {display:"Graduate: Organization Leadership (Dual) - Enterprise Resource Leadership & Planning and Project Leadership & Management",value:"88fe080f-55dc-e311-baca-005056b8001d"},
    {display:"Graduate: Organization Leadership (Dual) - Human Resource Management & Leadership and Organization Leadership & Management",value:"35a84932-55dc-e311-baca-005056b8001d"},
    {display:"Graduate: Organization Leadership (Dual) - Human Resource Management & Leadership and Project Leadership & Management",value:"3c7b2b75-55dc-e311-baca-005056b8001d"},
    {display:"Graduate: Organization Leadership (Dual) - Organizational Leadership & Management and Project Leadership & Management",value:"97d81f98-55dc-e311-baca-005056b8001d"},
    {display:"Graduate Certificate: Executive Leadership",value:"4f22ce81-915e-e311-99a6-005056b80029"},
    {display:"Graduate Certificate: Executive Project Management",value:"5122ce81-915e-e311-99a6-005056b80029"},
    {display:"Graduate Certificate: Nonprofit Organizational Capacity Building",value:"6522ce81-915e-e311-99a6-005056b80029"},
    {display:"Graduate Certificate: Strategic Business Management",value:"7522ce81-915e-e311-99a6-005056b80029"},
    {display:"Graduate Certificate: Strategic Human Resource Integration",value:"7722ce81-915e-e311-99a6-005056b80029"},
    {display:"Post-Graduate Certificate: Executive Nonprofit Leadership",value:"6322ce81-915e-e311-99a6-005056b80029"}
  ];    


var pgm4 = [
    {display: "What program are you interested in?", value: "" },
    {display: "Undecided", value: "74e72a1e-c8e8-e211-9330-005056b8001d" },
    {display:"Accelerated: Accounting",value:"0b22ce81-915e-e311-99a6-005056b80029"},
    {display:"Accelerated: Business",value:"0f22ce81-915e-e311-99a6-005056b80029"},
    {display:"Accelerated: Business - Finance",value:"2922ce81-915e-e311-99a6-005056b80029"},
    {display:"Accelerated: Business - Flexible Specialization",value:"458d9722-925e-e311-99a6-005056b80029"},
    {display:"Accelerated: Business - Human Resource Management",value:"2d22ce81-915e-e311-99a6-005056b80029"},
    {display:"Accelerated: Business - Management",value:"478d9722-925e-e311-99a6-005056b80029"},
    {display:"Accelerated: Business - Marketing",value:"498d9722-925e-e311-99a6-005056b80029"},
    {display:"Accelerated: Business - Project Management",value:"4b8d9722-925e-e311-99a6-005056b80029"},
    {display:"Accelerated: Business - Public Administration",value:"4d8d9722-925e-e311-99a6-005056b80029"},
    {display:"Accelerated: Finance",value:"1b22ce81-915e-e311-99a6-005056b80029"},
    {display:"Accelerated: Human Resource Management",value:"1d22ce81-915e-e311-99a6-005056b80029"},
    {display:"Accelerated: Management",value:"acdf467f-49d1-e311-8ac2-005056b8001d"},
    {display:"Accelerated: Marketing",value:"1f22ce81-915e-e311-99a6-005056b80029"},
    {display:"Accelerated: Public Administration",value:"2122ce81-915e-e311-99a6-005056b80029"},
    {display:"Undergraduate Certificate: Project Management",value:"7b8d9722-925e-e311-99a6-005056b80029"},
    {display:"Undergraduate Certificate: Public Administration",value:"1123ce81-915e-e311-99a6-005056b80029"},
    {display:"Business Administration",value:"7b7fb60a-b0b1-e011-b7aa-005056b8001d"},
    {display:"Business Administration: Finance",value:"7c7fb60a-b0b1-e011-b7aa-005056b8001d"},
    {display:"Business Administration: International Business",value:"7d7fb60a-b0b1-e011-b7aa-005056b8001d"},
    {display:"Business Administration: Management",value:"7e7fb60a-b0b1-e011-b7aa-005056b8001d"},
    {display:"Business Administration: Management Information Systems",value:"7f7fb60a-b0b1-e011-b7aa-005056b8001d"},
    {display:"Business Administration: Marketing",value:"807fb60a-b0b1-e011-b7aa-005056b8001d"},
    {display:"Economics",value:"877fb60a-b0b1-e011-b7aa-005056b8001d"},
    {display:"Political Economy",value:"9f7fb60a-b0b1-e011-b7aa-005056b8001d"}
    ];

var pgm5 = [
    {display: "What program are you interested in?", value: "" },
    {display: "Undecided", value: "7f2d172c-c8e8-e211-9330-005056b8001d" },
    {display:"Graduate: Data Science",value:"9a24a740-38a7-e411-a2de-005056b8001d"},
    {display:"Graduate: Data Science (Campus Cohort)",value:"e02b7891-9101-e611-80f0-12d74673ef26"},
    {display:"Graduate: Database Technologies",value:"8922ce81-915e-e311-99a6-005056b80029"},
    {display:"Graduate: Enterprise Systems Engineering",value:"17014e03-dee7-e511-80e8-0a31e000b763"},
    {display:"Graduate: Health Care Informatics and Information Management",value:"458fa38a-52b1-e011-b7aa-005056b8001d"},
    {display:"Graduate: Information Assurance",value:"8b22ce81-915e-e311-99a6-005056b80029"},
    {display:"Graduate: Information Assurance - Cyber Security",value:"e722ce81-915e-e311-99a6-005056b80029"},
    {display:"Graduate: Information Assurance - Policy Management",value:"e922ce81-915e-e311-99a6-005056b80029"},
    {display:"Graduate: Information Technology Management",value:"8d22ce81-915e-e311-99a6-005056b80029"},
    {display:"Graduate: Software Engineering",value:"9122ce81-915e-e311-99a6-005056b80029"},
    {display:"Graduate: Software Engineering & Database Technologies",value:"9322ce81-915e-e311-99a6-005056b80029"},
    {display:"Graduate Certificate: Agile Technologies",value:"d6e6e1b1-63be-e311-9614-005056b8001d"},
    {display:"Graduate Certificate: Cybersecurity",value:"a7678ae1-63be-e311-9614-005056b8001d"},
    {display:"Graduate Certificate: Data Science",value:"4446081b-78f1-e311-baca-005056b8001d"},
    {display:"Graduate Certificate: Database Administration with Oracle",value:"4122ce81-915e-e311-99a6-005056b80029"},
    {display:"Graduate Certificate: Database Development",value:"4322ce81-915e-e311-99a6-005056b80029"},
    {display:"Graduate Certificate: Enterprise Java Software Development",value:"4722ce81-915e-e311-99a6-005056b80029"},
    {display:"Graduate Certificate: Enterprise Resouce Planning",value:"4922ce81-915e-e311-99a6-005056b80029"},
    {display:"Graduate Certificate: Executive Information Technology",value:"4b22ce81-915e-e311-99a6-005056b80029"},
    {display:"Graduate Certificate: Full Stack+ (Frisco location only)",value:"e73a5930-080b-e611-80e9-12b796d1d7f2"},
    {display:"Graduate Certificate: Health Care Informatics",value:"3e8fa38a-52b1-e011-b7aa-005056b8001d"},
    {display:"Graduate Certificate: Information Assurance Policy Management",value:"e640c6f1-63be-e311-9614-005056b8001d"},
    {display:"Graduate Certificate: Mobile Software Development",value:"a3241018-64be-e311-9614-005056b8001d"},
    {display:"Graduate Certificate: Software Engineering",value:"7122ce81-915e-e311-99a6-005056b80029"},
    {display:"Graduate Certificate: Storage Area Networks",value:"7322ce81-915e-e311-99a6-005056b80029"},
    {display:"Graduate Certificate: Systems Engineering",value:"7922ce81-915e-e311-99a6-005056b80029"},
    {display:"Post-Graduate Certificate: Health Information Management",value:"548fa38a-52b1-e011-b7aa-005056b8001d"}  
    ];   

var pgm6 = [
    {display: "What program are you interested in?", value: "" },
    {display: "Undecided", value: "74e72a1e-c8e8-e211-9330-005056b8001d" },
    {display:"Undergraduate: Business - Technology Management",value:"1122ce81-915e-e311-99a6-005056b80029"},
    {display:"Undergraduate: Computer Information Systems",value:"1322ce81-915e-e311-99a6-005056b80029"},
    {display:"Undergraduate: Computer Science",value:"1722ce81-915e-e311-99a6-005056b80029"},
    {display:"Undergraduate: Information Technology",value:"e4148a31-6f26-e511-80d6-12b796d1d7f2"},
    {display:"Non-Degree: College of Computer & Information Sciences Graduate - Unspecified",value:"15dbd0ce-0ac1-e411-ad43-005056b8001d"},
    {display:"Non-Degree: Undergraduate  - CC&IS",value:"4de3d114-0cab-e411-a2de-005056b8001d"},
    {display:"Undergraduate: Health Information Management",value:"4e8fa38a-52b1-e011-b7aa-005056b8001d"},
    {display:"Business Technology Management",value:"75631f34-24da-e311-8ac2-005056b8001d"},
    {display:"Computer Information Systems",value:"93067f1e-24da-e311-8ac2-005056b8001d"},
    {display:"Computer Science",value:"857fb60a-b0b1-e011-b7aa-005056b8001d"},
    {display:"Health Information Management",value:"4fb99743-24da-e311-8ac2-005056b8001d"},
    {display:"Information Technology",value:"7bb6ac10-24da-e311-8ac2-005056b8001d"}
    ];

var pgm7 = [
    {display: "What program are you interested in?", value: "" },
    {display: "Undecided", value: "7f2d172c-c8e8-e211-9330-005056b8001d" },
    {display: "M.A. Education - Elementary Teacher Licensure", value: "8b489326-9af5-e311-baca-005056b8001d" },
    {display: "M.A. Education - Secondary Education Teacher Licensure", value: "83490f3a-9af5-e311-baca-005056b8001d" },
    {display: "M.A. Education - Teacher Leadership", value: "b037ae74-9af5-e311-baca-005056b8001d" },
    {display: "M.A. Education - Teaching the Linguistically Diverse", value: "e8bd9a5c-9af5-e311-baca-005056b8001d" },
    {display: "M.Ed. Curriculum, Instruction & Assessment", value: "b522ce81-915e-e311-99a6-005056b80029" },
    {display: "M.Ed. Early Childhood Special Ed with Initial Teacher Licensure", value: "618d9722-925e-e311-99a6-005056b80029" },
    {display: "M.Ed. Educational Leadership (Principal Licensure)", value: "84148eb5-d9c8-e411-ad43-005056b8001d" },
    {display: "M.Ed. Elementary Education with Initial Teacher Licensure", value: "8122ce81-915e-e311-99a6-005056b80029" },
    {display: "M.Ed. Reading", value: "bf22ce81-915e-e311-99a6-005056b80029" },
    {display: "M.Ed. Secondary Education with Licensure with various emphasis options", value: "598d9722-925e-e311-99a6-005056b80029" },
    {display: "M.Ed. Special Education with Initial Teacher Licensure", value: "678d9722-925e-e311-99a6-005056b80029" },
    {display: "M.Ed. with Added Endorsement: Reading Specialist (CO only)", value: "558d9722-925e-e311-99a6-005056b80029" },
    {display: "M.Ed. with Added Endorsement: Reading Teacher", value: "578d9722-925e-e311-99a6-005056b80029" },
    {display: "M.Ed. with Added Endorsement: Special Education Generalist", value: "d7ea5d09-dac8-e411-ad43-005056b8001d" },
    {display: "M.Ed. with Added Endorsement: Special Education Generalist", value: "d7ea5d09-dac8-e411-ad43-005056b8001d" },    
    {display: "Graduate Unknown", value: "7f2d172c-c8e8-e211-9330-005056b8001d" },
    {display: "Gifted & Talented Education graduate certificate", value: "5322ce81-915e-e311-99a6-005056b80029" },
    {display: "Literacy graduate certificate", value: "5f22ce81-915e-e311-99a6-005056b80029" },
    {display: "School Executive Leadership graduate certificate", value: "faa82b9a-04cb-e311-9614-005056b8001d" },
    {display: "Teacher Leadership graduate certificate", value: "cbc79086-f605-e411-954f-005056b8001d" }
    ];

var pgm8 = [
    {display: "What program are you interested in?", value: "" },
    {display: "Undecided", value: "74e72a1e-c8e8-e211-9330-005056b8001d" },
    {display: "B.A. Elementary Education with licensure", value: "d1a993ee-71df-e311-baca-005056b8001d" },
    {display: "B.A. Secondary Education with licensure", value: "887fb60a-b0b1-e011-b7aa-005056b8001d" }
    
    ];

var pgm9 = [
    {display: "What program are you interested in?", value: "" },
    {display: "Undecided", value: "7f2d172c-c8e8-e211-9330-005056b8001d" },
    {display:"Doctor of Nursing Practice, Advanced Leadership in Health Care",value:"3b8fa38a-52b1-e011-b7aa-005056b8001d"},
    {display:"Doctor of Nursing Practice, Advanced Practice Registered Nurse",value:"3c8fa38a-52b1-e011-b7aa-005056b8001d"},
    {display:"Doctor of Pharmacy",value:"5b8fa38a-52b1-e011-b7aa-005056b8001d"},
    {display:"Doctor of Physical Therapy",value:"5c8fa38a-52b1-e011-b7aa-005056b8001d"},
    {display:"Graduate: Counseling",value:"01593c21-3b8a-e511-80df-12b796d1d7f2"},
    {display:"Graduate: Health Services Administration",value:"468fa38a-52b1-e011-b7aa-005056b8001d"},
    {display:"Graduate: Marriage and Family Therapy",value:"a8dcbe7d-c52a-e311-88ad-005056b8001d"},
    {display:"Graduate: Nursing - Family Nurse Practitioner",value:"478fa38a-52b1-e011-b7aa-005056b8001d"},
    {display:"Graduate: Nursing - Family Nurse Practitioner (CCNE Approved Applicants Only)",value:"d5ba80cb-38df-e511-80ed-0a42e3c7e6c9"},
    {display:"Graduate: Nursing - Leadership in Health Care Systems, Education Focus",value:"498fa38a-52b1-e011-b7aa-005056b8001d"},
    {display:"Graduate: Nursing - Leadership in Health Care Systems, Management Focus",value:"4a8fa38a-52b1-e011-b7aa-005056b8001d"},
    {display:"Graduate: Nursing - Neonatal Nurse Practitioner",value:"4b8fa38a-52b1-e011-b7aa-005056b8001d"},
    {display:"Graduate: Nursing Completion - FNP Specialization",value:"33e1874f-bada-e311-baca-005056b8001d"},
    {display:"Graduate: Nursing Completion - NNP Specialization",value:"08ab0f66-bada-e311-baca-005056b8001d"},
    {display:"Graduate: Post BSN to DNP, Family Nurse Practitioner",value:"4f19941a-c256-e311-9122-005056b8001d"},
    {display:"Graduate: Post BSN to DNP, Neonatal Nurse Practitioner",value:"e97fd3ec-c356-e311-9122-005056b8001d"},
    {display:"Graduate Certificate: Fellowship in Optimal Aging",value:"388fa38a-52b1-e011-b7aa-005056b8001d"},
    {display:"Graduate Certificate: Orthopedic Manual Physical Therapy",value:"2638ab84-52b1-e011-b7aa-005056b8001d"},
    {display:"Graduate Certificate: Critical Care (Centura Employees Only)",value:"ead55427-841d-e411-bc83-005056b8001d"},
    {display:"Graduate Certificate: Health Care Business Management",value:"356748bf-c492-e411-83a9-005056b8001d"},
    {display:"Graduate Certificate: Health Care Education",value:"3f8fa38a-52b1-e011-b7aa-005056b8001d"},
    {display:"Graduate Certificate: Health Care Quality and Patient Safety",value:"428fa38a-52b1-e011-b7aa-005056b8001d"},
    {display:"Post-Graduate Certificate: Addictions Counseling",value:"ba2f00e3-77f1-e311-baca-005056b8001d"},
    {display:"Post-Graduate Certificate: Adult-Gerontology Acute-Care Nurse Practitioner",value:"3cd33fb3-a2d8-e411-8793-005056b8001d"},
    {display:"Post-Graduate Certificate: Counseling Children and Adolescents",value:"50bb53e5-702b-e311-88ad-005056b8001d"},
    {display:"Post-Graduate Certificate: Counseling Military Families",value:"e3577322-712b-e311-88ad-005056b8001d"},
    {display:"Post-Graduate Certificate: Depth Psychotherapy",value:"79d26965-ac79-e511-80e0-0a31e000b763"},
    {display:"Post-Graduate Certificate: Family Nurse Practitioner",value:"408fa38a-52b1-e011-b7aa-005056b8001d"},
    {display:"Post-Graduate Certificate: Marriage and Family Therapy",value:"1aa5784f-712b-e311-88ad-005056b8001d"},
    {display:"Post-Graduate Certificate: Neonatal Nurse Practitioner",value:"418fa38a-52b1-e011-b7aa-005056b8001d"},
    {display:"Post-Professional Certificate: Orthopedic Physical Therapy",value:"ae625e75-72fd-e411-8793-005056b8001d"}
    ]; 

var pgm10 = [
    {display: "What program are you interested in?", value: "" },
    {display: "Undecided", value: "74e72a1e-c8e8-e211-9330-005056b8001d" },
    {display:"Accelerated: Health Care Administration",value:"4d8fa38a-52b1-e011-b7aa-005056b8001d"},
    {display:"Accelerated: Nursing - Accelerated",value:"4f8fa38a-52b1-e011-b7aa-005056b8001d"},
    {display:"Accelerated: Nursing - CHOICE",value:"518fa38a-52b1-e011-b7aa-005056b8001d"},
    {display:"Accelerated: Nursing - RN to BSN",value:"538fa38a-52b1-e011-b7aa-005056b8001d"},
    {display:"Accelerated: Nursing - RN to MS in Nursing Education Focus",value:"528fa38a-52b1-e011-b7aa-005056b8001d"},
    {display:"Accelerated: Nursing - RN to MS in Nursing Management Focus",value:"03584e9d-bfb0-e111-9a7b-005056b8001d"},
    {display:"Accelerated: Nursing - Traditional",value:"080f4848-a0b4-e011-b7aa-005056b8001d"},
    {display:"Health and Exercise Science",value:"8c7fb60a-b0b1-e011-b7aa-005056b8001d"},
    {display:"Health Care Administration",value:"baca4266-e42e-e411-a418-005056b8001d"},
    {display:"Nursing",value:"9b7fb60a-b0b1-e011-b7aa-005056b8001d"},
    {display:"Pre-Med/Pre-Health",value:"a27fb60a-b0b1-e011-b7aa-005056b8001d"},
    {display:"Pre-Pharmacy",value:"9d7fb60a-b0b1-e011-b7aa-005056b8001d"},
    {display:"Pre-Physical Therapy",value:"a37fb60a-b0b1-e011-b7aa-005056b8001d"},
    {display:"Undergraduate Certificate: Gerontology",value:"a97e4461-79be-e211-8b6f-005056b8001d"}
    ];

var pgm11 = [
    {display: "What program are you interested in?", value: "" },
    {display: "Undecided", value: "7f2d172c-c8e8-e211-9330-005056b8001d" },
    {display: "M.S. Criminology", value: "8722ce81-915e-e311-99a6-005056b80029" }, 
    {display: "Master of Arts", value: "7f22ce81-915e-e311-99a6-005056b80029" }, 
    {display: "Master of Fine Arts in Creative Writing", value: "8c6d671e-b02f-e411-a418-005056b8001d" },
    {display: "Graduate Unknown", value: "7f2d172c-c8e8-e211-9330-005056b8001d" },
    {display: "Criminology graduate certificate", value: "3f22ce81-915e-e311-99a6-005056b80029" },
    {display: "Master of Arts Self-Designed graduate certificate", value: "4f8d9722-925e-e311-99a6-005056b80029" },
    ];

var pgm12 = [
    {display: "What program are you interested in?", value: "" },
    {display: "Undecided", value: "74e72a1e-c8e8-e211-9330-005056b8001d" }, 
    {display: "B.S. Art History", value: "acd1ee8c-1c84-e211-8a97-005056b8001d" },
    {display: "B.A. English", value: "897fb60a-b0b1-e011-b7aa-005056b8001d" },
    {display: "B.A. French", value: "947fb60a-b0b1-e011-b7aa-005056b8001d" }, 
    {display: "B.A. History", value: "967fb60a-b0b1-e011-b7aa-005056b8001d" }, 
    {display: "B.A. Music", value: "997fb60a-b0b1-e011-b7aa-005056b8001d" }, 
    {display: "B.A. Music History & Literature", value: "a0434316-72df-e311-baca-005056b8001d" },
    {display: "B.A. Music Performance", value: "a0434316-72df-e311-baca-005056b8001d" },
    {display: "B.A. Peace & Justice Studies", value: "9c7fb60a-b0b1-e011-b7aa-005056b8001d" },
    {display: "B.A. Philosophy", value: "9e7fb60a-b0b1-e011-b7aa-005056b8001d" }, 
    {display: "B.A. Politics", value: "a07fb60a-b0b1-e011-b7aa-005056b8001d" }, 
    {display: "B.S. Psychology", value: "a47fb60a-b0b1-e011-b7aa-005056b8001d" },
    {display: "B.A. Religious Studies", value: "2d8d9722-925e-e311-99a6-005056b80029" },
    {display: "B.A. Sociology", value: "a67fb60a-b0b1-e011-b7aa-005056b8001d" },
    {display: "B.A. Spanish", value: "a77fb60a-b0b1-e011-b7aa-005056b8001d" }, 
    {display: "B.A. Visual Arts", value: "8d7fb60a-b0b1-e011-b7aa-005056b8001d" }, 
    {display: "B.A. Women's & Gender Studies", value: "a87fb60a-b0b1-e011-b7aa-005056b8001d" }, 
    {display: "Conflict Management undergraduate certificate", value: "fb22ce81-915e-e311-99a6-005056b80029" },
    {display: "Homeland Security undergraduate certificate", value: "0323ce81-915e-e311-99a6-005056b80029" },
    {display: "Leadership undergraduate certificate", value: "0923ce81-915e-e311-99a6-005056b80029" },     
    {display: "Social Violence undergraduate certificate", value: "1323ce81-915e-e311-99a6-005056b80029" },         
    {display: "Bachelor of Applied Science", value: "f121ce81-915e-e311-99a6-005056b80029" },
    {display: "B.A. Communication", value: "3b8d9722-925e-e311-99a6-005056b80029" },
    {display: "B.A. Liberal Arts", value: "3d8d9722-925e-e311-99a6-005056b80029" }, 
    {display: "B.A. Social Science", value: "2322ce81-915e-e311-99a6-005056b80029" }, 
    {display: "B.S. Applied Psychology", value: "0d22ce81-915e-e311-99a6-005056b80029" },
    {display: "B.S. Criminology", value: "1922ce81-915e-e311-99a6-005056b80029" },
    {display: "Conflict Management undergraduate certificate", value: "fb22ce81-915e-e311-99a6-005056b80029" },
    {display: "Leadership undergraduate certificate", value: "0923ce81-915e-e311-99a6-005056b80029" },
    {display: "Social Violence undergraduate certificate", value: "1323ce81-915e-e311-99a6-005056b80029" }      
    ];

var pgm13 = [
    {display: "What program are you interested in?", value: "" },
    {display: "Undecided", value: "7f2d172c-c8e8-e211-9330-005056b8001d" },
    {display: "M.S. Biomedical Science", value: "2038ab84-52b1-e011-b7aa-005056b8001d" },
    {display: "M.S. Data Science", value: "9a24a740-38a7-e411-a2de-005056b8001d" },
    {display: "M.S. Database Technologies", value: "8922ce81-915e-e311-99a6-005056b80029" },
    {display: "M.S. Environmental Biology", value: "113fadb3-0dd2-e311-8ac2-005056b8001d" },
    {display: "M.S. Health Care Informatics & Information Management", value: "458fa38a-52b1-e011-b7aa-005056b8001d" },
    {display: "M.S. Information Assurance", value: "8b22ce81-915e-e311-99a6-005056b80029" },
    {display: "M.S. Information Technology Management", value: "8d22ce81-915e-e311-99a6-005056b80029" },
    {display: "M.S. Software Engineering", value: "9322ce81-915e-e311-99a6-005056b80029" },
    {display: "M.S. Software Engineering & Database Technologies", value: "9322ce81-915e-e311-99a6-005056b80029" },
    {display: "M.S. Systems Engineering", value: "9522ce81-915e-e311-99a6-005056b80029" },    
    {display: "Agile Technologies graduate certificate", value: "d6e6e1b1-63be-e311-9614-005056b8001d" },
    {display: "Applied Environmental Biology graduate certificate", value: "e2e124df-0dd2-e311-8ac2-005056b8001d" },
    {display: "Biomedical Genetics & Genomics graduate certificate", value: "1" },
    {display: "Cybersecurity graduate certificate", value: "a7678ae1-63be-e311-9614-005056b8001d" },
    {display: "Data Science graduate certificate", value: "4446081b-78f1-e311-baca-005056b8001d" },
    {display: "Database Administration with Oracle graduate certificate", value: "4122ce81-915e-e311-99a6-005056b80029" },
    {display: "Database Development graduate certificate", value: "4322ce81-915e-e311-99a6-005056b80029" },
    {display: "Enterprise Java Software Development graduate certificate", value: "4722ce81-915e-e311-99a6-005056b80029" },
    {display: "Enterprise Resource Planning graduate certificate", value: "4922ce81-915e-e311-99a6-005056b80029" },
    {display: "Executive Information Technology graduate certificate", value: "4b22ce81-915e-e311-99a6-005056b80029" },
    {display: "Health Care Informatics graduate certificate", value: "3e8fa38a-52b1-e011-b7aa-005056b8001d" },
    {display: "Health Information Management post-baccalaureate certificate", value: "548fa38a-52b1-e011-b7aa-005056b8001d" },
    {display: "Information Assurance Policy Management graduate certificate", value: "5722ce81-915e-e311-99a6-005056b80029" },
    {display: "Mobile Software Development graduate certificate", value: "a3241018-64be-e311-9614-005056b8001d" },
    {display: "Software Engineering graduate certificate", value: "7122ce81-915e-e311-99a6-005056b80029" },
    {display: "Storage Area Networks graduate certificate", value: "7322ce81-915e-e311-99a6-005056b80029" },
    {display: "Systems Engineering graduate certificate", value: "7922ce81-915e-e311-99a6-005056b80029" },
    {display: "Systems Engineering graduate certificate", value: "7922ce81-915e-e311-99a6-005056b80029" },  
    ];

    var pgm14 = [
    {display: "What program are you interested in?", value: "" },
    {display: "Undecided", value: "74e72a1e-c8e8-e211-9330-005056b8001d" },
    {display: "B.S. Biochemistry", value: "797fb60a-b0b1-e011-b7aa-005056b8001d" },
    {display: "B.A. Biology", value: "7a7fb60a-b0b1-e011-b7aa-005056b8001d" },
    {display: "B.S. Biology", value: "7a7fb60a-b0b1-e011-b7aa-005056b8001d" },
    {display: "B.S. Business Technology Management", value: "1122ce81-915e-e311-99a6-005056b80029" },
    {display: "B.S. Chemistry", value: "827fb60a-b0b1-e011-b7aa-005056b8001d" },
    {display: "B.S. Computer Science (day)", value: "1722ce81-915e-e311-99a6-005056b80029" },
    {display: "B.S. Computer Information Systems", value: "1322ce81-915e-e311-99a6-005056b80029" },
    {display: "B.S. Computational Physics", value: "dfda0dcb-71df-e311-baca-005056b8001d" },
    {display: "B.S. Environmental Science", value: "8a7fb60a-b0b1-e011-b7aa-005056b8001d" },
    {display: "B.A. Environmental Studies", value: "3d631f5c-8efb-e211-a12d-005056b8001d" },
    {display: "B.S. Health Information Management", value: "4e8fa38a-52b1-e011-b7aa-005056b8001d" },
    {display: "B.S. Mathematics", value: "987fb60a-b0b1-e011-b7aa-005056b8001d" },
    {display: "B.S. Neuroscience", value: "9a7fb60a-b0b1-e011-b7aa-005056b8001d" },
    {display: "B.S. Physics", value: "d9fd06f4-90d2-e011-8d3e-005056b8001d" },
    {display: "B.S. Computer Science", value: "857fb60a-b0b1-e011-b7aa-005056b8001d" },
    {display: "B.S. Information Technology", value: "1522ce81-915e-e311-99a6-005056b80029" },    
    {display: "E-Security undergraduate certificate", value: "ff22ce81-915e-e311-99a6-005056b80029" },
    {display: "Information Systems Security undergraduate certificate", value: "738d9722-925e-e311-99a6-005056b80029" },     
    ];
    
//change programs listed based on field0 and field1 selections in form
$("#field0, #field2").change(function () {
      
  var field0 = $("#field0").val();
  var field2 = $("#field2").val();

   
  if ((field0 == "0d5f51c4-8ed9-e011-8d3e-005056b8001d") && (field2 == "Business")) {
      list(pgm3);
      }
  else if ((field0 == "5ff36977-a473-e111-9cb6-005056b8001d") && (field2 == "Business")) {
      list(pgm4);
      }
  else if ((field0 == "0d5f51c4-8ed9-e011-8d3e-005056b8001d") && (field2 == "CIS")) {
      list(pgm5);
      }
  else if ((field0 == "5ff36977-a473-e111-9cb6-005056b8001d") && (field2 == "CIS")) {
      list(pgm6);
      }
  else if ((field0 == "0d5f51c4-8ed9-e011-8d3e-005056b8001d") && (field2 == "Education")) {
      list(pgm7);
      }
  else if ((field0 == "5ff36977-a473-e111-9cb6-005056b8001d") && (field2 == "Education")) {
      list(pgm8);
      }
  else if ((field0 == "0d5f51c4-8ed9-e011-8d3e-005056b8001d") && (field2 == "Healthcare")) {
      list(pgm9);
      }
  else if ((field0 == "5ff36977-a473-e111-9cb6-005056b8001d") && (field2 == "Healthcare")) {
      list(pgm10);
      }
  else if ((field0 == "0d5f51c4-8ed9-e011-8d3e-005056b8001d") && (field2 == "HSS")) {
      list(pgm11);
      }
  else if ((field0 == "5ff36977-a473-e111-9cb6-005056b8001d") && (field2 == "HSS")) {
      list(pgm12);
      }
  else if ((field0 == "0d5f51c4-8ed9-e011-8d3e-005056b8001d") && (field2 == "STEM")) {
      list(pgm13);
      }
  else if ((field0 == "5ff36977-a473-e111-9cb6-005056b8001d") && (field2 == "STEM")) {
      list(pgm14);
      }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
  else  {
      list(pgm7);
      }
  });

  //function to populate child select box
  function list(array_list)  {
  
      $("#field3").val("").html(""); //reset child options
      $(array_list).each(function (i) { //populate child options
          $("#field3").append("<option value=\"" + array_list[i].value + "\">" + array_list[i].display + "</option>");
      });
      //$("#field3").data("selectBox-selectBoxIt").refresh();
          
  }


});