import { createContext, useContext, useEffect, useState, useMemo } from "react";
import { type Umi, some, PublicKey, type KeypairSigner } from '@metaplex-foundation/umi';
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";

import type {
    Project,
    PageMetadata,
    PageNode,
    PageTree
} from "@dedoc/sdk";
import { useWallet } from "@solana/wallet-adapter-react";
import { randomId } from '../util';
import { createCollection,  getUser, merkleTreePublic, mint, type Collection } from '@dedoc/sdk';
import { publicKey } from "@metaplex-foundation/umi";
import { useUmi } from "./use-umi";
import { updateProject as updateProjectNft } from "@dedoc/sdk";
import { useNavigate } from "react-router-dom";
import { Check, Copy } from "lucide-react";

const DEFAULT_CONTEXT = () => ({
    projects: [],
    project: null,
    page: null,
    selectedProject: "",
    selectedPage: "",
    isFetchingProjects: false,
    isFetchingProject: false,
    
    addPage: () => {},
    setProjects: () => {},
    selectPage: () => {},
    updatePage: () => {},
    deletePage: () => {},
    updateProject: async () => {},
    createProject: async () => {},
    deleteProject: async () => {},
    selectProject: () => {},
    saveProject: () => {},
    moveCurrentPage: () => {},
    openNewProject: () => {},
    setIsFetchingProjects: () => {},
    setIsFetchingProject: () => {},
});

const ProjectContext = createContext<{
    // State
    projects: Project[],
    project: Project | null,
    page: PageMetadata | null,
    selectedProject: string,
    selectedPage: string,
    isFetchingProjects: boolean,
    isFetchingProject: boolean,
    
    // User actions
    addPage: (path: number[]) => void,
    setProjects: (projects: Project[]) => void,
    selectPage: (pageId: string) => void,
    deletePage: () => void,
    updatePage: (pageId: string, metadata: PageMetadata) => void,
    updateProject: (projectId: string, metadata: Project) => void,
    createProject: (projectName: string, teamId: string) => Promise<void>,
    deleteProject: (projectId: string) => Promise<void>,
    selectProject: (projectId: string) => void,
    saveProject: () => void,
    moveCurrentPage: (direction: "up" | "down") => void,
    openNewProject: () => void,
    setIsFetchingProjects: (isFetching: boolean) => void,  
    setIsFetchingProject: (isFetching: boolean) => void,  
}>(DEFAULT_CONTEXT());

export function useProjects() { 
    return useContext(ProjectContext);
}

const openInitializeAccountModal = () => { 
    // @ts-expect-error
    document?.getElementById('create_account_modal')?.showModal()
}

export const openNewProject = () => {
    // @ts-expect-error
    document?.getElementById('new_project_modal')?.showModal()
}

const openSaveSucccessModal = () => {
    // @ts-expect-error
    document?.getElementById('save_success_modal')?.showModal()
}

function NewProjectModal({ createProject }: { createProject: (projectName: string) => void }) {
    const [projectName, setProjectName] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleCreateProject = async () => {
        if (!projectName.trim()) return;
        setIsLoading(true);
        await createProject(projectName);
        setIsLoading(false);

        setTimeout(() => {
            setProjectName('');
            const modal = document.getElementById('new_project_modal');
            //@ts-expect-error
            if (modal) modal.close();
        }, 1000);
    };

    return (
        <dialog id="new_project_modal" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Create Project</h3>
                <p className="py-3">Create and mint a new project.</p>
                <input
                    required
                    type="text"
                    placeholder="Project Name"
                    className="input input-bordered w-full"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    disabled={isLoading}
                />
                <div className="modal-action">
                    {isLoading ? (
                        <span className="loading loading-spinner my-2 loading-lg"></span>
                    ) : (
                        <button className="btn btn-outline" onClick={handleCreateProject} disabled={!projectName.trim()}>Save</button>
                    )}
                </div>
            </div>
        </dialog>
    );
}

function WelcomeModal({ onContinue, onCancel }: { onContinue: () => void; onCancel: () => void; }) {
    return (
        <dialog id="welcome_modal" className="modal" open>
            <div className="modal-box" style={{ padding: '0' }}>
                <img src="./preview.jpg" alt="Welcome" className="w-full h-48 object-cover" />
                <div className="p-5">
                    <h3 className="font-bold text-lg text-left mt-2">Welcome to DeDoc</h3>
                    <p className="text-left my-2">Create an account to get started.</p>
                    <p className="text-xs italic">~0.02 SOL</p>
                    <div className="modal-action justify-between">
                        <button className="btn btn-outline" onClick={onCancel}>Cancel</button>
                        <button className="btn btn-primary" onClick={onContinue}>Create Account</button>
                    </div>
                </div>
            </div>
        </dialog>
    );
}

function InitializeAccountModal({ createAccount }: { createAccount: () => Promise<KeypairSigner | undefined> }) {
    const [isLoading, setIsLoading] = useState(false);

    const handleCreateAccount = async () => {
        setIsLoading(true);
        await createAccount();
        setIsLoading(false);

        setTimeout(() => {
            const modal = document.getElementById('create_account_modal');
            //@ts-expect-error
            if (modal) modal.close();
        }, 1000);
    };

    return (
        <dialog id="create_account_modal" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Create Account</h3>
                <p className="py-3">Initialize your account to start creating projects.</p>
                <div className="modal-action">
                    {isLoading ? (
                        <span className="loading loading-spinner my-2 loading-lg"></span>
                    ) : (
                        <button className="btn btn-outline" onClick={handleCreateAccount}>Create</button>
                    )}
                </div>
            </div>
        </dialog>
    );
}


export function ProjectSavedModal()  {
    const { project, updateProject } = useProjects();

    const [ didCopy, setDidCopy ] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(`${window?.location?.origin}/#/${project?.id}`);

        setDidCopy(true);

        setTimeout(() => {
            setDidCopy(false);
        }, 3000);
    }

    return (
        <dialog id="save_success_modal" className="modal">
            <div className="modal-box">
                <div className="flex items-center">
                    <h3>Project Saved</h3>
                </div>

                <div className="my-3">
                    <div className="flex items-center justify-between">
                        <p className="text-xs uppercase font-semibold">URL</p>
                        <button className="btn btn-sm btn-ghost text-xs" onClick={handleCopy}>
                            {didCopy ? (
                                <Check size={13}/>
                            ) : (
                                <Copy size={13}/>
                            )}

                            {didCopy ? (
                                "Copied"
                            ) : (
                                "Copy"
                            )}
                        </button>
                    </div>
                    <a
                        className="bg-black bg-opacity-80 p-2 rounded-lg text-xs flex break-all link"
                        target='_blank'
                        href={`${window?.location?.origin}/#/${project?.id}`}
                    >
                        {window?.location?.origin}/#/{project?.id}
                    </a>
                </div>

                <div className="modal-action">
                    <form method="dialog" className="flex w-full justify-between">
                        <button className="btn btn-outline">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}

export function ProjectsProvider(props: { children: React.ReactNode }) {
    const [ projects, setProjects ] = useState<Project[]>([]);
    const [ selectedProject, setSelectedProject ] = useState<string>("");
    const [ selectedPage, setSelectedPage ] = useState<string>("");
    const wallet = useWallet();
    const umi = useUmi(wallet);
    const [ collections, setCollections ] = useState<Collection[]>([]);
    const [ isFetchingProjects, setIsFetchingProjects] = useState(true);
    const [ isFetchingProject, setIsFetchingProject ] = useState(true);
    const [showWelcomeModal, setShowWelcomeModal] = useState(false);

    const [ showErrorToast, setSHowErrorToast ] = useState(false);
    const [ showSuccessToast, setShowSuccessToast ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(false);
    const navigate = useNavigate();

    const showSuccess = () => {
        setShowSuccessToast(true);
        setTimeout(() => setShowSuccessToast(false), 2000);
    }

    const showError = () => {
        setSHowErrorToast(true);
        setTimeout(() => setSHowErrorToast(false), 2000);
    }
    const handleCancel = () => {
        wallet.disconnect();  
        setShowWelcomeModal(false);  
        navigate('/');
    };
    const handleWelcomeContinue = () => {
        setShowWelcomeModal(false); 
        openInitializeAccountModal(); 
    };

    const project = projects.find((project) => project.id === selectedProject) || null
    const page = project?.pages.metadata[selectedPage] || null;

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

        selectPage(pageId);
    
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

    function deletePage() {
        if(!project) return;

        const updatedProject = project;

        const updatedPagesTree = project.pages.tree;

        const removePage = (pageId: string, pages: PageTree) => {
            return pages.filter((page) => {
                if(page.id === pageId) {
                    return false;
                }

                page.children = removePage(pageId, page.children);

                return true;
            });
        }

        updatedProject.pages.tree = removePage(selectedPage, updatedPagesTree);

        delete updatedProject.pages.metadata[selectedPage];

        setProjects([
            ...projects.filter((project) => project.id !== updatedProject.id),
            updatedProject
        ]);
    }

    async function saveProject() {
        if(!project) return;

        try {
            setIsLoading(true);

            await updateProjectNft(umi, project?.collection || "", project);

            showSuccess();
            openSaveSucccessModal();
        } catch (error) {
            showError();

            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    function moveCurrentPage(direction: "up" | "down") {
        if(!project) return;

        const newProject = project;

        function getPageParent(tree: PageTree, parent?: PageTree) {
            for(const node of tree) {
                if(node.id === selectedPage) {
                    return tree;
                }

                if(node.children.length) {
                    return getPageParent(node.children, tree);
                }
            }
        }

        const parent = getPageParent(newProject.pages.tree);

        const childIndex = parent?.findIndex((node) => node.id === selectedPage);

        if(childIndex === undefined || !parent) return;

        const newIndex = direction === "up" ? childIndex - 1 : childIndex + 1;

        if(newIndex < 0 || newIndex >= parent.length) return;

        const itemA = parent[childIndex];
        const itemB = parent[newIndex];

        parent[childIndex] = itemB;
        parent[newIndex] = itemA;

        setProjects([
            ...projects.filter((project) => project.id !== newProject.id),
            newProject
        ]);
    }

    const fetchProjects = async () => {
        setIsFetchingProjects(true);

        try {
            const [ collection ] = await getUser(umi);
    
            if(!collection) return setShowWelcomeModal(true);
    
            setProjects(collection.projects);
        } catch (error) {
            console.error(error);
        }

        setIsFetchingProjects(false);
    };

    const createProject = async (projectName: string) => {
        const result = await getUser(umi);
        setCollections(result);

        const [ collection ] = result;
        const key = publicKey(collection.id);

        if(!key) return;

        const minted = await mint(
            merkleTreePublic,
            key,
            { name: projectName },
            umi
        );

        // TODO auto navigate to the project page
        // navigate("/projects/" + minted || "");

        fetchProjects();
    };
   
    const createAccount = async () => {
        const collection = await createCollection(umi);
        return collection;
    } 
    
    async function selectProject(projectId: string) {
        setSelectedProject(projectId);
    };

    async function deleteProject(projectId: string) {};

    useEffect(() => {
        if (wallet.connected) {
            fetchProjects();
        }
    }, [wallet.connected]);

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
            saveProject,
            moveCurrentPage,
            deletePage,
            openNewProject,
            setIsFetchingProjects,
            setIsFetchingProject,
            isFetchingProjects,
            isFetchingProject
        }}>
            {props.children}
            
            {isLoading && (
                <div className="toast toast-end">
                    <div className="alert">
                        <span className="loading loading-spinner loading-sm"></span>
                        <span>Loading...</span>
                    </div>
                </div>
            )}

            {
                showSuccessToast && (
                    <div className="toast toast-end">
                        <div className="alert alert-success">
                            <span>Success!</span>
                        </div>
                    </div>
                )
            }

            {
                showErrorToast && (
                    <div className="toast toast-end">
                        <div className="alert alert-error">
                            <span>Something went wrong</span>
                        </div>
                    </div>
                )
            
            }
            {showWelcomeModal && <WelcomeModal onContinue={handleWelcomeContinue} onCancel={handleCancel} />}
            <ProjectSavedModal />
            <NewProjectModal createProject={createProject} />
            <InitializeAccountModal createAccount={createAccount}/> 

            {showSuccessToast && (
                <Fireworks autorun={{ speed: 3 }} />
            )}
        </ProjectContext.Provider>
    )
}