let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
    }
   ];

   
  
  // 1. When does the PROG200 course start?
  let prog200Start = courses.find(course => course.CourseId === "PROG200")?.StartDate;
  console.log(`The PROG200 course starts on: ${prog200Start}`);

  console.log(courses.find(c => "PROG200" === c.CourseId).StartDate);
  
  // 2. What is the title of the PROJ500 course?
  let proj500Title = courses.find(course => course.CourseId === "PROJ500")?.Title;
  console.log(`The title of the PROJ500 course is: ${proj500Title}`);
  
  console.log(courses.find(c => "PROJ500" === c.CourseId).Title);

  // 3. What are the titles of the courses that cost $50 or less?
  let cheapCourses = courses.filter(course => parseFloat(course.Fee) <= 50).map(course => course.Title);
  console.log(`Courses that cost $50 or less: ${cheapCourses.join(', ')}`);

  courses.filter(c => Number(c.Fee) <= 50).forEach(c => console.log(c.Title));
  
  // 4. What classes meet in "Classroom 1"?
  let classroom1Courses = courses.filter(course => course.Location === "Classroom 1").map(course => course.Title);
  console.log(`Classes that meet in Classroom 1: ${classroom1Courses.join(', ')}`);
  
  courses .filter(c => c.Location === ("Classroom 1"))
          .map(c => c.Title)
          .forEach(t => console.log(t));