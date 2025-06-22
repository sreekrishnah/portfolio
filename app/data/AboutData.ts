export interface TechStack {
    [key: string]: string;
  }
  
  export interface Role {
    id: string;
    title: string;
    description: string;
    image: string;
    gradient: string;
  }
  
  export interface Technology {
    name: string;
    icon: string;
    category: 'frontend' | 'backend' | 'database' | 'tools' | 'cloud';
  }
  
  export const techStack: TechStack = {
    javascript:"I have a solid command of JavaScript, including its advanced concepts, with hands-on experience through building several practical projects. These applications demonstrate my ability to apply JavaScript principles effectively to real-world scenarios. You can explore these projects in detail on my GitHub profile.",
    react:"I am well-versed in both fundamental and advanced React concepts, and I am actively applying this knowledge to real-world projects. Notable examples include a weather forecasting web app, a QR code generator, and an Amazon best-seller bookshelf application. I am passionate about building dynamic, responsive interfaces and continuously enhancing my skills through practical development.",
    MERN:"I am advancing my expertise in the MERN stack, particularly focusing on Express.js and MongoDB. Recently, I built a CRUD application like Live Markdown Editor, Exam enrollment . I am committed to expanding my MERN stack knowledge by working on progressively challenging projects and continuously refining my backend and full-stack development skills.",
    tailwind: "I am proficient in using Tailwind CSS and Bootstrap to accelerate the development of modern, responsive user interfaces. While I value the efficiency these frameworks provide, I also take pride in writing custom styles for enhanced precision and creativity. I tailor my styling approach based on project needs, ensuring a balance between speed, consistency, and unique design."
  };
  
  export const technologies: Technology[] = [
    { name: 'JavaScript', icon: 'javascript', category: 'frontend' },
    { name: 'TypeScript', icon: 'typescript', category: 'frontend' },
    { name: 'React', icon: 'react', category: 'frontend' },
    { name: 'Next.js', icon: 'nextjs', category: 'frontend' },
    { name: 'Node.js', icon: 'nodejs', category: 'backend' },
    { name: 'Express.js', icon: 'express', category: 'backend' },
    { name: 'MongoDB', icon: 'mongodb', category: 'database' },
    { name: 'MySQL', icon: 'mysql', category: 'database' },
    { name: 'Python', icon: 'python', category: 'backend' },
    { name: 'C', icon: 'c', category: 'backend' },
    { name: 'PHP', icon: 'php', category: 'backend' },
    { name: 'HTML5', icon: 'html5', category: 'frontend' },
    { name: 'CSS3', icon: 'css3', category: 'frontend' },
    { name: 'Tailwind CSS', icon: 'tailwindcss', category: 'frontend' },
    { name: 'Bootstrap', icon: 'bootstrap', category: 'frontend' },
    { name: 'Redux', icon: 'redux', category: 'frontend' },
    { name: 'Git', icon: 'git', category: 'tools' },
    { name: 'GitHub', icon: 'github', category: 'tools' },
    { name: 'VS Code', icon: 'vscode', category: 'tools' },
    { name: 'AWS', icon: 'aws', category: 'cloud' },
    { name: 'Linux', icon: 'linux', category: 'tools' },
    { name: 'Windows', icon: 'windows', category: 'tools' }
  ];  
  
  export const roles: Role[] = [
    {
      id: '1',
      title: 'Full Stack Developer',
      description: 'Architecting scalable web solutions from concept to deployment',
      image: 'cyberdesigner.jpg',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      id: '2',
      title: 'Software Architect',
      description: 'Design systems that are scalable, secure, and efficient.',
      image: 'designer.jpg',
      gradient: 'from-pink-500 to-orange-500'
    },
    {
      id: '3',
      title: 'Problem Solver',
      description: 'Transforming complex challenges into elegant solutions',
      image: 'coder.jpg',
      gradient: 'from-green-500 to-teal-600'
    }
  ];
  
  export const personalInfo = {
    name: 'Srithar',
    title: 'Full Stack Developer',
    subtitle: 'Transforming Ideas Into Digital Experiences',
    description: "I'm so called Levy, on a mission to turn challenges into opportunities. With a keen eye for design and a love for clean code, I specialize in crafting engaging and user-friendly web experiences.",
    quote: "Code is like humor. When you have to explain it, it's bad.",
    skills: ['Innovation', 'Leadership', 'Collaboration', 'Problem Solving'],
    experience: '1+ Years',
    projects: '20+ Projects',
    // clients: '30+ Happy Clients'
  };