import { ImgProps } from "next/dist/shared/lib/get-img-props";

export type Skills = {
    name: string,
    src: string
}


export type SkillArr = Skills[];

export const allSkills : SkillArr = [
    {
        name: "React",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
    },
    {
        name: "Typescript",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
    },
    {
        name: "Express",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
    },
    {
        name: "Git",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
    },
    {
        name: "MongoDB",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
    },
    {
        name: "Prisma",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg"
    },
    {
        name: "PostgresSQL",
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg'
    },
    {
        name: "NodeJS",
        src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg"
    },
    {
        name: "TailwindCSS",
        src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
    },
    {
        name: "MaterialUI",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg"
    },
    {
        name: "Bash",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg"
    },
    {
        name: "NextJS",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
    },
    {
        name: "Java",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
    },
    {
        name: "Cloudflare",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg"
    }
]
