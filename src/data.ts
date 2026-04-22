export interface TechnologyCategory {
    category: string;
    items: string[];
}

export interface WorkExperience {
    company: string;
    role: string;
    dateRange: string;
    achievements: string[];
}

export interface ProjectItem {
    name: string;
    description: string;
    technologies: string[];
    link?: string;
}

export interface EducationItem {
    institution: string;
    degree: string;
    dateRange: string;
    description?: string;
}

export interface ContactInfo {
    mobile: string;
    email: string;
    address: string;
}

export interface ResumeData {
    name: string;
    title: string;
    about: string;
    contact: ContactInfo;
    technologies: TechnologyCategory[];
    languages: string[];
    experience: WorkExperience[];
    projects: ProjectItem[];
    education: EducationItem[];
}

const resumeData: ResumeData = {
    name: "Javier Apesteguia Blanco",
    title: "Desarrollador Junior",
    about: "Actualmente busco ampliar mi conocimiento en el desarrollo de software y web, con el objetivo de convertirme en un profesional solvente, resolutivo y en constante evolución. Soy una persona proactiva y dispuesta a colaborar para realizar correctamente las tareas que se me asignan. Cuando hay algún contratiempo me gusta ofrecer mi ayuda para resolver el problema de una manera rápida y efectiva. Me gusta el trabajo en equipo y disfruto de igual manera trabajando por mi cuenta, por lo tanto me considero una persona polivalente.",
    contact: {
        mobile: "+34 610 129 893",
        email: "javierbasoko@gmail.com",
        address: "C/ Miguel Astráin nº 189 C, 31006 Pamplona, Navarra",
    },
    technologies: [
        {
            category: "Frameworks y librerías",
            items: [
                ".NET Framework",
                "ASP.NET MVC",
                "Blazor",
                "Angular",
                "React",
            ],
        },
    ],
    languages: [
        "Castellano: nativo",
        "Inglés: nivel C1 certificado por Cambridge",
        "Francés: 3 años de estudios escolares",
    ],
    experience: [
        {
            company: "Hiberus IT. Área de Informática y electrodomésticos",
            role: "Desarrollador Junior",
            dateRange: "Julio 2025 - Actualmente",
            achievements: [],
        },
        {
            company: "Leclerc. Área de Informática y electrodomésticos",
            role: "Dependiente",
            dateRange: "Mayo 2023 - Septiembre 2023",
            achievements: [],
        },
        {
            company: "Snipes S.L.",
            role: "Dependiente",
            dateRange: "Junio 2022 - Enero 2023",
            achievements: [],
        },
        {
            company: "Tagliatella S.L.",
            role: "Camarero",
            dateRange: "Julio 2022",
            achievements: [],
        },
    ],
    projects: [],
    education: [
        {
            institution: "Cuatrovientos Centro Integrado",
            degree: "Grado Superior en Aplicaciones Multiplataforma",
            dateRange: "2023 - Actualidad",
        },
        {
            institution: "UPV/EHU",
            degree: "Grado en Periodismo",
            dateRange: "2018 - 2021",
            description: "Pendiente de finalizar",
        },
        {
            institution: "I.E.S Basoko",
            degree: "ESO y Bachillerato",
            dateRange: "2012 - 2018",
        },
    ],
};

export default resumeData;
