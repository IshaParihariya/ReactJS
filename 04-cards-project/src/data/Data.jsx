
//for data of job openings
//just an array not a component 

   const arr = [
  {
    img: "https://i.pinimg.com/1200x/89/61/31/8961313816abd158bb3beae2edf64f63.jpg",
    companyName: "Amazon",
    timeAgo: 5,
    post: "Senior UI/UX Designer",
    type: "Part-Time",
    level: "Senior level",
    pay: 140,
    city: "Mumbai",
    country: "India"
  },

  {
    img: "https://i.pinimg.com/1200x/37/55/df/3755df15d92e7c4f68294fcb54b25599.jpg",
    companyName: "Microsoft",
    timeAgo: 8,
    post: "Frontend Developer",
    type: "Full-Time",
    level: "Mid level",
    pay: 120,
    city: "Bengaluru",
    country: "India"
  },

  {
    img: "https://i.pinimg.com/1200x/62/3c/b6/623cb67a352ad783bfa394952dc56af2.jpg",
    companyName: "Adobe",
    timeAgo: 12,
    post: "Product Designer",
    type: "Full-Time",
    level: "Junior level",
    pay: 90,
    city: "Noida",
    country: "India"
  },

  {
    img: "https://i.pinimg.com/736x/35/90/b1/3590b1f6634aa063297f7cfc0531d56c.jpg",
    companyName: "Google",
    timeAgo: 3,
    post: "Software Engineer",
    type: "Full-Time",
    level: "Senior level",
    pay: 180,
    city: "Hyderabad",
    country: "India"
  },

  {
    img: "https://i.pinimg.com/1200x/f4/d1/08/f4d108f38beb7855e2cb0ad17c9d157f.jpg",
    companyName: "Atlassian",
    timeAgo: 15,
    post: "Backend Developer",
    type: "Full-Time",
    level: "Mid level",
    pay: 110,
    city: "Bengaluru",
    country: "India"
  },

  {
    img: "https://i.pinimg.com/736x/e2/b7/48/e2b74811d8f20d1373ec2d085d1fcfb7.jpg",
    companyName: "Spotify",
    timeAgo: 20,
    post: "UX Researcher",
    type: "Part-Time",
    level: "Mid level",
    pay: 85,
    city: "Pune",
    country: "India"
  },

  {
    img: "https://i.pinimg.com/1200x/e5/5e/8a/e55e8af0607d1e57122667ab40a1dd1a.jpg",
    companyName: "Netflix",
    timeAgo: 10,
    post: "Product Manager",
    type: "Full-Time",
    level: "Senior level",
    pay: 150,
    city: "Delhi",
    country: "India"
  },

  {
    img: "https://i.pinimg.com/1200x/89/61/31/8961313816abd158bb3beae2edf64f63.jpg",
    companyName: "Amazon",
    timeAgo: 5,
    post: "Senior UI/UX Designer",
    type: "Part-Time",
    level: "Senior level",
    pay: 130,
    city: "Chennai",
    country: "India"
  }
  ,
  {
  img: "https://i.pinimg.com/1200x/37/55/df/3755df15d92e7c4f68294fcb54b25599.jpg",
  companyName: "JPMorgan Chase",
  timeAgo: 6,
  post: "Java Backend Developer",
  type: "Full-Time",
  level: "Mid level",
  pay: 135,
  city: "Mumbai",
  country: "India"
},

{
  img: "https://i.pinimg.com/736x/35/90/b1/3590b1f6634aa063297f7cfc0531d56c.jpg",
  companyName: "Goldman Sachs",
  timeAgo: 9,
  post: "Software Engineer",
  type: "Full-Time",
  level: "Junior level",
  pay: 125,
  city: "Bengaluru",
  country: "India"
},

{
  img: "https://i.pinimg.com/1200x/62/3c/b6/623cb67a352ad783bfa394952dc56af2.jpg",
  companyName: "Morgan Stanley",
  timeAgo: 14,
  post: "Data Analyst",
  type: "Full-Time",
  level: "Mid level",
  pay: 115,
  city: "Mumbai",
  country: "India"
},

{
  img: "https://i.pinimg.com/1200x/e5/5e/8a/e55e8af0607d1e57122667ab40a1dd1a.jpg",
  companyName: "American Express",
  timeAgo: 4,
  post: "Backend Engineer",
  type: "Full-Time",
  level: "Senior level",
  pay: 145,
  city: "Gurugram",
  country: "India"
},

{
  img: "https://i.pinimg.com/1200x/f4/d1/08/f4d108f38beb7855e2cb0ad17c9d157f.jpg",
  companyName: "Visa",
  timeAgo: 11,
  post: "Software Developer",
  type: "Full-Time",
  level: "Junior level",
  pay: 105,
  city: "Bengaluru",
  country: "India"
},

{
  img: "https://i.pinimg.com/736x/e2/b7/48/e2b74811d8f20d1373ec2d085d1fcfb7.jpg",
  companyName: "Mastercard",
  timeAgo: 7,
  post: "Cloud Engineer",
  type: "Full-Time",
  level: "Mid level",
  pay: 130,
  city: "Pune",
  country: "India"
},

{
  img: "https://i.pinimg.com/1200x/89/61/31/8961313816abd158bb3beae2edf64f63.jpg",
  companyName: "Walmart",
  timeAgo: 18,
  post: "Frontend Engineer",
  type: "Full-Time",
  level: "Mid level",
  pay: 118,
  city: "Bengaluru",
  country: "India"
},

{
  img: "https://i.pinimg.com/1200x/37/55/df/3755df15d92e7c4f68294fcb54b25599.jpg",
  companyName: "Oracle",
  timeAgo: 13,
  post: "Java Developer",
  type: "Full-Time",
  level: "Senior level",
  pay: 155,
  city: "Hyderabad",
  country: "India"
},

{
  img: "https://i.pinimg.com/736x/35/90/b1/3590b1f6634aa063297f7cfc0531d56c.jpg",
  companyName: "Salesforce",
  timeAgo: 16,
  post: "React Developer",
  type: "Full-Time",
  level: "Junior level",
  pay: 100,
  city: "Hyderabad",
  country: "India"
},

{
  img: "https://i.pinimg.com/1200x/e5/5e/8a/e55e8af0607d1e57122667ab40a1dd1a.jpg",
  companyName: "Adobe",
  timeAgo: 21,
  post: "UI/UX Designer",
  type: "Part-Time",
  level: "Junior level",
  pay: 80,
  city: "Noida",
  country: "India"
},

{
  img: "https://i.pinimg.com/1200x/62/3c/b6/623cb67a352ad783bfa394952dc56af2.jpg",
  companyName: "Uber",
  timeAgo: 5,
  post: "Backend Software Engineer",
  type: "Full-Time",
  level: "Senior level",
  pay: 165,
  city: "Bengaluru",
  country: "India"
},

{
  img: "https://i.pinimg.com/736x/e2/b7/48/e2b74811d8f20d1373ec2d085d1fcfb7.jpg",
  companyName: "Flipkart",
  timeAgo: 17,
  post: "Software Engineer Intern",
  type: "Part-Time",
  level: "Junior level",
  pay: 60,
  city: "Bengaluru",
  country: "India"
}
];

export default arr;