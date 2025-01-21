import { Injectable } from "@angular/core"
import { Faq } from "src/app/interfaces"

@Injectable({
  providedIn: 'root',
})

export class FaqService{
    faqs: Faq[]= [
        { 
          question: 'What is your area of expertise?', 
          answer: 'I\'m a full-stack developer with expertise in building scalable web applications using the MEAN/MERN stack (MongoDB, Express.js, Angular, React.js, Node.js). I also have experience in front-end technologies like HTML, CSS, and JavaScript, as well as back-end server management.', 
          isActive: false 
        },
        { 
          question: 'How many years of experience do you have?', 
          answer: 'I have over 8 years of experience in web development, working with clients on various projects ranging from startups to enterprise-level applications.', 
          isActive: false 
        },
        { 
          question: 'What services do you offer?', 
          answer: 'I offer a range of services, including full-stack web development, custom web application development, web design, and consulting on optimizing user interfaces and user experiences (UI/UX).', 
          isActive: false 
        },
        { 
          question: 'Can you work on both front-end and back-end?', 
          answer: 'Yes! As a MEAN stack developer, I specialize in both front-end (Angular) and back-end (Node.js, Express.js) development. I can build end-to-end solutions and integrate them seamlessly.', 
          isActive: false 
        }
      ]

    getFaqs(): Faq[]{
        return this.faqs
    }
}