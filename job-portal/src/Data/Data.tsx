import { IconBriefcase, IconCalendar, IconMapPin, IconSearch } from "@tabler/icons-react";

export const companies = ["Google", "Amazon", "Figma", "Netflix", "Meta", "Microsoft", "Pinterest", "Spotify", "Walmart"]

export const work = [
    {
        "name": "Build your resume",
        "desc": "Create a standout resume with your skills."
    },
    {
        "name": "Apply for job",
        "desc": "Find and apply for jobs that match your skills."
    },
    {
        "name": "Get hired",
        "desc": "Connect with employers and start your new job."
    }
]

export const jobCategory = [
    {
        name: "Digital Marketing",
        desc: "Seo optimization and and advertisements of social media",
        jobs: "1K"
    },
    {
        name: "UI-UX Designer",
        desc: "User interface and enhance user expirience",
        jobs: "800"
    },
    {
        name: "Content Writing",
        desc: "Write and edit content for various platforms",
        jobs: "1.5K"
    },
    {
        name: "Data Entry",
        desc: "Input data into systems accurately and efficiently",
        jobs: "1K"
    },
    {
        name: "Customer Support",
        desc: "Assist Customer with inquiries and bussiness",
        jobs: "1K"
    },
    {
        name: "Sales",
        desc: "Sell product and service to customers",
        jobs: "1K"
    },
]


export const testimonials = [
    {
        "name": "Shivam Patel",
        "testimonial": "This job portal made job search easy and quick. Recommend to all job seekers!",
        "rating": 5
    },
    {
        "name": "Ravi Kumar",
        "testimonial": "Great platform with a wide variety of jobs. It helped me find my dream job in no time!",
        "rating": 4
    },
    {
        "name": "Aditi Sharma",
        "testimonial": "The interface is very user-friendly and the application process is seamless. Highly recommend!",
        "rating": 5
    },
    {
        "name": "Neha Verma",
        "testimonial": "I found excellent career opportunities and got a job within weeks of using this platform.",
        "rating": 4
    }
];


export const footerLinks = [
    { title: "Product", link: ["Find Jobs", "Find Company", "Find Employee"] },
    { title: "Company", link: ["About Us", "Contact Us", " Privacy Policy", "Terms & Conditions"] },
    { title: "Support", link: ["Help & Support", "Feedback", "FAQs"] }
]

export const dropdownData = [
    {
        title: "Job Title",
        icon: IconSearch,
        options: [
            "Designer",
            "Developer",
            "Product Manager",
            "Marketing Specialist",
            "Data Analyst",
            "Sales Executive",
            "Content Writer",
            "Customer Support"
        ]
    },
    {
        title: "Location",
        icon: IconMapPin,
        options: [
            "New York",
            "San Francisco",
            "London",
            "Berlin",
            "Sydney",
            "Toronto",
            "Mumbai",
            "Singapore"
        ]
    },
    {
        title: "Job Type",
        icon: IconBriefcase,
        options: [
            "Full-time",
            "Part-time",
            "Contract",
            "Freelance",
            "Internship"
        ]
    },
    {
        title: "Experience",
        icon: IconCalendar,
        options: [
            "Entry Level",
            "Mid Level",
            "Senior Level",
            "Manager",
            "Director",
            "Executive"
        ]
    }
];
