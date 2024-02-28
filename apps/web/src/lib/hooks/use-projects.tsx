import { createContext, useContext, useEffect, useState, useMemo } from "react";

import type {
    Project,
    PageMetadata,
    PageNode,
    PageTree
} from "../types";
import { useWallet } from "@solana/wallet-adapter-react";
import { useTeam } from "./use-team";
import { randomId } from '../util';

import { useUmi } from "./use-umi";

const DEFAULT_CONTEXT = () => ({
    projects: [],
    project: null,
    page: null,
    selectedProject: "",
    selectedPage: "",
    
    addPage: () => {},
    setProjects: () => {},
    selectPage: () => {},
    updatePage: () => {},
    updateProject: async () => {},
    createProject: async () => {},
    deleteProject: async () => {},
    selectProject: () => {},
});

const ProjectContext = createContext<{
    // State
    projects: Project[],
    project: Project | null,
    page: PageMetadata | null,
    selectedProject: string,
    selectedPage: string,
    
    // User actions
    addPage: (path: number[]) => void,
    setProjects: (projects: Project[]) => void,
    selectPage: (pageId: string) => void,
    updatePage: (pageId: string, metadata: PageMetadata) => void,
    updateProject: (projectId: string, metadata: Project) => void,
    createProject: (projectName: string, teamId: string) => Promise<void>,
    deleteProject: (projectId: string) => Promise<void>,
    selectProject: (projectId: string) => void,
}>(DEFAULT_CONTEXT());

export function useProjects() { 
    return useContext(ProjectContext);
}

export function ProjectsProvider(props: { children: React.ReactNode }) {
    const [ projects, setProjects ] = useState<Project[]>([]);
    const { selectedTeam } = useTeam();
    const [ selectedProject, setSelectedProject ] = useState<string>("JCE1t78oZoBF9jogeAjWHWorAKQtxHzQoXqiNnNZskYP");
    const [ selectedPage, setSelectedPage ] = useState<string>("d2hg2g2g2h");
    const wallet = useWallet();

    useEffect(() => {
        if(wallet.connected) {
            getProjects();
        }
    }, [selectedProject]);

    const project = projects.find((project) => project.id === selectedProject) || null
    const page = project?.pages.metadata[selectedPage] || null;

    const umi = useUmi(wallet);

    function selectPage(pageId: string) {
        setSelectedPage(pageId);
    }

    function getPage(
        path: number[],
        pages: PageTree,
    ): PageNode {
        const [pathIdx, ...nextPath] = path;
    
        const current = pages[pathIdx];
    
        console.log(path, {nextPath})
    
        if (!nextPath.length) {
            return current;
        }
    
        return getPage(
            nextPath,
            current.children,
        );
    }

    function addPage(
        path: number[],
    ) {
        if(!project) return;
    
        const updatedProject = project;
    
        let newPagesTree = project.pages.tree;
    
        const current = getPage(path, newPagesTree);
    
        const pageId = randomId();
    
        const pageNode: PageNode = {
            id: pageId,
            children: []
        };
    
        const pageMetadata = {
            name: `Page ${current?.children?.length + 1}`,
            content: ""
        };
    
        current.children.push(pageNode);
    
        updatedProject.pages.metadata[pageId] = pageMetadata;
    
        setProjects([
            ...projects.filter((project) => project.id !== updatedProject.id),
            updatedProject
        ]);
    };

    function updateProject(projectId: string, metadata: Project) {
        setProjects([
            ...projects.filter((project) => project.id !== projectId),
            metadata
        ]);
    };

    function updatePage(pageId: string, metadata: PageMetadata) {
        if(!project) return;

        updateProject(project.id, {
            ...project,
            pages: {
                ...project?.pages,
                metadata: {
                    ...project?.pages.metadata,
                    [pageId]: {
                        ...project?.pages.metadata[pageId],
                        ...metadata
                    }
                }
            }
        })
    }
    
    async function getProjects() {
        setProjects([
            {
                id: "JCE1t78oZoBF9jogeAjWHWorAKQtxHzQoXqiNnNZskYP",
                name: "Test",
                theme: "dark",
                image: "",
                deployments: {
                    production: "",
                    staging: "",
                },
                pages: {
                    tree: [
                        {
                            id: "root",
                            children: [
                                {
                                    id: "d2hg2g2g2h",
                                    children: []
                                }
                            ]
                        }
                    ],
                    metadata: {
                        "d2hg2g2g2h": {
                            name: "Page 1",
                            content: ""
                        }
                    },
                }
            }
        ]);
    };

    async function selectProject(projectId: string) {};
    async function createProject(projectName: string, teamId: string) {};
    async function deleteProject(projectId: string) {};
    
    useEffect(() => {
        getProjects();
    }, [selectedTeam, wallet?.connected]);

    return (
        <ProjectContext.Provider value={{
            projects,
            project,
            page,
            selectedProject,
            selectedPage,
            addPage,
            setProjects,
            selectPage,
            updatePage,
            selectProject,
            updateProject,
            createProject,
            deleteProject,
        }}>
            {props.children}
        </ProjectContext.Provider>
    )
}