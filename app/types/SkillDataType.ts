export interface SkillExperience {
    id: string;
    title: string;
    organization: string;
    date: string;
    thumbnail: string;
    description: string;
    link?: string;
    status?: 'completed' | 'in-progress';
    skills?: unknown;
}