export interface NavItem {
    title: string;   
    routeLink: string;  
  }
  
export interface LangItem {
    title: string;   
    nickTitle: string; 
}

export interface Blog{
  name: string;
  date: string;
  description: string;
  content?: string;
  image?: string;
}

export interface Faq{
  question: string;
  answer: string;
  isActive: boolean;
}