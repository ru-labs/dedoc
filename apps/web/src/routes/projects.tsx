import { Key, Plus } from "lucide-react";
import { useProjects } from "../lib/hooks/use-projects";
import { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { Project, createCollection,  getUser, merkleTreePublic, mint } from '@dedoc/sdk';
import { useUmi } from "../lib/hooks/use-umi";
import { publicKey } from "@metaplex-foundation/umi";

const openNewProject = () => {
    // @ts-expect-error
    document?.getElementById('new_project_modal')?.showModal()
}

const initializeNewAccount = () => { 
    // @ts-expect-error
    document?.getElementById('create_account_modal')?.showModal()
}

export function NewProjectModal({ createProject }: { createProject: (projectName: string) => void }) {
    let projectNameInput: HTMLInputElement | null = null;

    return (
        <dialog id="new_project_modal" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Create Project</h3>
                <p className="py-3">Create and mint a new project.</p>
                <input required type="text" placeholder="Project Name" className="input input-bordered w-full" ref={(input) => { projectNameInput = input; }} />
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn btn-outline" onClick={() => projectNameInput && createProject(projectNameInput.value)}>Save</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
}


export function InitializeAccountModal({ createAccount }: { createAccount: () => void }) {
    return (
        <dialog id="create_account_modal" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Create Account</h3>
                <p className="py-3">Initialize your account to start creating projects.</p>
                <div className="modal-action">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-outline" onClick={createAccount}>Create</button>
                </form>
                </div>
            </div>
        </dialog>
    )
}

export function NewTeamModal()  {
    return (
        <dialog id="new_team_modal" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Create Team</h3>
                <p className="py-3">Create and mint a new project.</p>
                <input type="text" placeholder="Project Name" className="input input-bordered w-full" />
                <div className="modal-action">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-outline">Save</button>
                </form>
                </div>
            </div>
        </dialog>
    )
}

function ProjectCard(props: { project: Project }) {
    return (
        <a href={`/#/project/${props.project.id}`} className="min-h-[10rem] flex flex-col justify-between bg-base-300 p-5 rounded-xl hover:opacity-50">
            <h3 className="font-semibold">
                {props.project.name}
            </h3>
            <div className="flex items-center gap-2 text-xs font-semibold">
                <div className="w-3 h-3 bg-green-400 rounded-full">
                </div>
                {props.project.id.slice(0, 6) + "..."}
            </div>
        </a>
    )
}

export function Projects()  {
    const wallet = useWallet();
    const umi = useUmi(wallet);
    const { updateProject, projects } = useProjects();

    useEffect(() => {
        console.log({projects}, [projects])
    })

    const fetchProjects = async () => {
        const [ collection ] = await getUser(umi);

        if(!collection) return initializeNewAccount();
        
        for(const project of collection.projects) {
            updateProject(project.id, project);
        }
    };

    const createProject = async (projectName: string) => {
        const [ collection ] = await getUser(umi);
        const key = publicKey(collection.id);

        const {
            id
        } = collection

        console.log({id});

        if (key) {
            const minted = await mint(merkleTreePublic, key, { name: projectName }, umi);
        }
    };
   
    const createAccount = async () => {
        const collection = await createCollection(umi);
        return collection;
    } 

    useEffect(() => {
        if (wallet.connected) {
            fetchProjects();
        }
    }, [wallet.connected]);

    return (
        <>
            <div className="mx-auto max-w-6xl">
                <div className="flex justify-between">
                    <h1 className="text-3xl font-bold">Projects</h1>
                    <button className="btn btn-outline" onClick={openNewProject}>
                        <Plus />
                        New Project
                    </button>
                </div>
                <div className="grid md:grid-cols-3 gap-8 my-5">
                {projects.map((project, idx) => (
                        <ProjectCard
                            key={idx}
                            project={project}
                        />
                    ))}
                </div>
            </div>
            <NewProjectModal createProject={createProject} />
            <InitializeAccountModal createAccount={createAccount}/> 
        </>
    );
}