function Card(props: {
    children: string | JSX.Element
}) {
    return (
        <div className="p-5 rounded-2xl text-center gradient-card h-full overflow-hidden">
            {props.children}
        </div>  
    )
}

export function Home()  {
    return (
        <>
            <div className="min-h-[30vh] md:min-h-[75vh] flex items-center max-w-5xl mx-auto">
                <div className="relative p-5">
                    <div className="home-spotlight aspect-square rounded-full"></div>
                    <h1 className="text-7xl md:text-[7rem]">DeDoc</h1>
                    <p className="md:text-3xl md:ml-2">Decentralized documentation</p>
                </div>
            </div>
            <div className="grid grid-cols-12 md:gap-10 max-w-7xl mx-auto">
                <div className="col-span-12 md:col-span-7">
                    <Card>
                        <h2 className="text-3xl">Write</h2>
                        <p>Craft documentation using our Markdown editor</p>
                        <svg width="100%" viewBox="0 0 610 180" className="mt-5 -mb-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.438599" width="191.162" height="44.4947" rx="5" fill="#1B1D31" fill-opacity="0.65"/>
                            <rect y="61.4128" width="191.162" height="44.4947" rx="5" fill="#1B1D31" fill-opacity="0.65"/>
                            <rect y="120.739" width="191.162" height="46.1427" rx="5" fill="#1B1D31" fill-opacity="0.65"/>
                            <rect x="206" width="404" height="180" rx="5" fill="#1B1D31" fill-opacity="0.65"/>
                            <path d="M236.953 37.8619L238.345 26.6619H240.137L238.761 37.8619H236.953ZM231.033 35.3019V33.5579H241.369V35.3019H231.033ZM232.809 37.8619L234.201 26.6619H235.993L234.601 37.8619H232.809ZM231.577 30.9659V29.2219H241.897L241.913 30.9659H231.577ZM246.616 37.8619L251.608 26.6619H254.168L259.176 37.8619H256.456L252.36 27.9739H253.384L249.272 37.8619H246.616ZM249.112 35.4619L249.8 33.4939H255.56L256.264 35.4619H249.112ZM260.338 37.8619V26.6619H265.186C266.189 26.6619 267.053 26.8273 267.778 27.1579C268.504 27.4779 269.064 27.9419 269.458 28.5499C269.853 29.1579 270.05 29.8833 270.05 30.7259C270.05 31.5579 269.853 32.2779 269.458 32.8859C269.064 33.4939 268.504 33.9633 267.778 34.2939C267.053 34.6139 266.189 34.7739 265.186 34.7739H261.778L262.93 33.6059V37.8619H260.338ZM262.93 33.8939L261.778 32.6619H265.042C265.842 32.6619 266.44 32.4913 266.834 32.1499C267.229 31.8086 267.426 31.3339 267.426 30.7259C267.426 30.1073 267.229 29.6273 266.834 29.2859C266.44 28.9446 265.842 28.7739 265.042 28.7739H261.778L262.93 27.5419V33.8939ZM271.901 37.8619V26.6619H274.493V37.8619H271.901ZM281.682 37.8619V26.6619H286.77C287.986 26.6619 289.058 26.8966 289.986 27.3659C290.914 27.8246 291.639 28.4699 292.162 29.3019C292.685 30.1339 292.946 31.1206 292.946 32.2619C292.946 33.3926 292.685 34.3793 292.162 35.2219C291.639 36.0539 290.914 36.7046 289.986 37.1739C289.058 37.6326 287.986 37.8619 286.77 37.8619H281.682ZM284.274 35.7339H286.642C287.389 35.7339 288.034 35.5953 288.578 35.3179C289.133 35.0299 289.559 34.6246 289.858 34.1019C290.167 33.5793 290.322 32.9659 290.322 32.2619C290.322 31.5473 290.167 30.9339 289.858 30.4219C289.559 29.8993 289.133 29.4993 288.578 29.2219C288.034 28.9339 287.389 28.7899 286.642 28.7899H284.274V35.7339ZM298.821 37.9899C297.903 37.9899 297.087 37.7979 296.373 37.4139C295.669 37.0299 295.109 36.5073 294.693 35.8459C294.287 35.1739 294.085 34.4113 294.085 33.5579C294.085 32.6939 294.287 31.9313 294.693 31.2699C295.109 30.5979 295.669 30.0753 296.373 29.7019C297.087 29.3179 297.903 29.1259 298.821 29.1259C299.727 29.1259 300.538 29.3179 301.253 29.7019C301.967 30.0753 302.527 30.5926 302.933 31.2539C303.338 31.9153 303.541 32.6833 303.541 33.5579C303.541 34.4113 303.338 35.1739 302.933 35.8459C302.527 36.5073 301.967 37.0299 301.253 37.4139C300.538 37.7979 299.727 37.9899 298.821 37.9899ZM298.821 35.9419C299.237 35.9419 299.61 35.8459 299.941 35.6539C300.271 35.4619 300.533 35.1899 300.725 34.8379C300.917 34.4753 301.013 34.0486 301.013 33.5579C301.013 33.0566 300.917 32.6299 300.725 32.2779C300.533 31.9259 300.271 31.6539 299.941 31.4619C299.61 31.2699 299.237 31.1739 298.821 31.1739C298.405 31.1739 298.031 31.2699 297.701 31.4619C297.37 31.6539 297.103 31.9259 296.901 32.2779C296.709 32.6299 296.613 33.0566 296.613 33.5579C296.613 34.0486 296.709 34.4753 296.901 34.8379C297.103 35.1899 297.37 35.4619 297.701 35.6539C298.031 35.8459 298.405 35.9419 298.821 35.9419ZM309.369 37.9899C308.441 37.9899 307.614 37.8033 306.889 37.4299C306.164 37.0459 305.593 36.5179 305.177 35.8459C304.772 35.1739 304.569 34.4113 304.569 33.5579C304.569 32.6939 304.772 31.9313 305.177 31.2699C305.593 30.5979 306.164 30.0753 306.889 29.7019C307.614 29.3179 308.441 29.1259 309.369 29.1259C310.276 29.1259 311.065 29.3179 311.737 29.7019C312.409 30.0753 312.905 30.6139 313.225 31.3179L311.289 32.3579C311.065 31.9526 310.782 31.6539 310.441 31.4619C310.11 31.2699 309.748 31.1739 309.353 31.1739C308.926 31.1739 308.542 31.2699 308.201 31.4619C307.86 31.6539 307.588 31.9259 307.385 32.2779C307.193 32.6299 307.097 33.0566 307.097 33.5579C307.097 34.0593 307.193 34.4859 307.385 34.8379C307.588 35.1899 307.86 35.4619 308.201 35.6539C308.542 35.8459 308.926 35.9419 309.353 35.9419C309.748 35.9419 310.11 35.8513 310.441 35.6699C310.782 35.4779 311.065 35.1739 311.289 34.7579L313.225 35.8139C312.905 36.5073 312.409 37.0459 311.737 37.4299C311.065 37.8033 310.276 37.9899 309.369 37.9899ZM317.558 37.9899C316.822 37.9899 316.113 37.9046 315.43 37.7339C314.758 37.5526 314.225 37.3286 313.83 37.0619L314.662 35.2699C315.057 35.5153 315.521 35.7179 316.054 35.8779C316.598 36.0273 317.132 36.1019 317.654 36.1019C318.23 36.1019 318.636 36.0326 318.87 35.8939C319.116 35.7553 319.238 35.5633 319.238 35.3179C319.238 35.1153 319.142 34.9659 318.95 34.8699C318.769 34.7633 318.524 34.6833 318.214 34.6299C317.905 34.5766 317.564 34.5233 317.19 34.4699C316.828 34.4166 316.46 34.3473 316.086 34.2619C315.713 34.1659 315.372 34.0273 315.062 33.8459C314.753 33.6646 314.502 33.4193 314.31 33.1099C314.129 32.8006 314.038 32.4006 314.038 31.9099C314.038 31.3659 314.193 30.8859 314.502 30.4699C314.822 30.0539 315.281 29.7286 315.878 29.4939C316.476 29.2486 317.19 29.1259 318.022 29.1259C318.609 29.1259 319.206 29.1899 319.814 29.3179C320.422 29.4459 320.929 29.6326 321.334 29.8779L320.502 31.6539C320.086 31.4086 319.665 31.2433 319.238 31.1579C318.822 31.0619 318.417 31.0139 318.022 31.0139C317.468 31.0139 317.062 31.0886 316.806 31.2379C316.55 31.3873 316.422 31.5793 316.422 31.8139C316.422 32.0273 316.513 32.1873 316.694 32.2939C316.886 32.4006 317.137 32.4859 317.446 32.5499C317.756 32.6139 318.092 32.6726 318.454 32.7259C318.828 32.7686 319.201 32.8379 319.574 32.9339C319.948 33.0299 320.284 33.1686 320.582 33.3499C320.892 33.5206 321.142 33.7606 321.334 34.0699C321.526 34.3686 321.622 34.7633 321.622 35.2539C321.622 35.7873 321.462 36.2619 321.142 36.6779C320.822 37.0833 320.358 37.4033 319.75 37.6379C319.153 37.8726 318.422 37.9899 317.558 37.9899Z" fill="white" fill-opacity="0.7"/>
                            <rect x="231" y="53" width="311.672" height="15.1507" rx="5" fill="#D9D9D9" fill-opacity="0.04"/>
                            <rect x="231" y="76.8083" width="203.452" height="15.1507" rx="5" fill="#D9D9D9" fill-opacity="0.04"/>
                            <rect x="231" y="100.617" width="246.74" height="15.1507" rx="5" fill="#D9D9D9" fill-opacity="0.04"/>
                            <rect x="231" y="124" width="123" height="15" rx="5" fill="#D9D9D9" fill-opacity="0.04"/>
                        </svg>
                    </Card>
                </div>
                <div className="col-span-12 md:col-span-5">
                    <Card>
                        <svg className="-translate-x-[5%]" width="110%" viewBox="0 0 442 143" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="195" width="52" height="143" rx="5" fill="#1B1D31"/>
                            <rect x="260" width="52" height="143" rx="5" fill="#1B1D31" fill-opacity="0.65"/>
                            <rect x="325" width="52" height="143" rx="5" fill="#1B1D31" fill-opacity="0.35"/>
                            <rect x="390" width="52" height="143" rx="5" fill="#1B1D31" fill-opacity="0.1"/>
                            <rect x="130" width="52" height="143" rx="5" fill="#1B1D31" fill-opacity="0.65"/>
                            <rect x="65" width="52" height="143" rx="5" fill="#1B1D31" fill-opacity="0.35"/>
                            <rect width="52" height="143" rx="5" fill="#1B1D31" fill-opacity="0.1"/>
                        </svg>
                        <h2 className="text-3xl mt-5">Theme</h2>
                        <p>Customize using built-in themes.</p>
                    </Card>
                </div>
                <div className="col-span-12 md:col-span-5">
                    <Card>
                    <svg width="80%" className="mx-auto" viewBox="0 0 344 249" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="21.3168" y1="10.6132" x2="148.317" y2="114.613" stroke="#33375C" stroke-opacity="0.8"/>
                            <line x1="289.217" y1="46.4504" x2="148.217" y2="114.45" stroke="#33375C" stroke-opacity="0.8"/>
                            <line x1="21.0647" y1="10.5042" x2="289.065" y2="45.5042" stroke="#33375C" stroke-opacity="0.8"/>
                            <line x1="21.4976" y1="11.0491" x2="5.49758" y2="173.049" stroke="#33375C" stroke-opacity="0.8"/>
                            <line x1="5.22932" y1="172.556" x2="129.229" y2="236.556" stroke="#33375C" stroke-opacity="0.8"/>
                            <line x1="128.839" y1="236.527" x2="331.839" y2="167.527" stroke="#33375C" stroke-opacity="0.8"/>
                            <line x1="331.859" y1="168.48" x2="147.859" y2="114.48" stroke="#33375C" stroke-opacity="0.8"/>
                            <line x1="289.472" y1="45.8338" x2="332.472" y2="167.834" stroke="#33375C" stroke-opacity="0.8"/>
                            <line x1="4.81207" y1="172.537" x2="147.812" y2="114.537" stroke="#33375C" stroke-opacity="0.8"/>
                            <line x1="128.506" y1="236.924" x2="147.506" y2="113.924" stroke="#33375C" stroke-opacity="0.8"/>
                            <circle cx="21.5" cy="11.5" r="11.5" fill="#33375C"/>
                            <circle cx="5" cy="173" r="5" fill="#33375C"/>
                            <circle cx="289" cy="46" r="9" fill="#33375C"/>
                            <circle cx="148.5" cy="114.5" r="7.5" fill="#33375C"/>
                            <circle cx="129.5" cy="237.5" r="11.5" fill="#33375C"/>
                            <circle cx="332.5" cy="168.5" r="11.5" fill="#33375C"/>
                        </svg>
                        <h2 className="text-3xl mt-7">On-Chain</h2>
                        <p>All projects are stored on-chain using Solana cNFTs & Arweave.</p>
                    </Card>
                </div>
                <div className="col-span-12 md:col-span-7">
                    <Card>
                        <h2 className="text-3xl">Publish</h2>
                        <p>Generate and deploy as a static website.</p>
                        <svg width="90%" className="mt-5 -mb-5 mx-auto" viewBox="0 0 583 329" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="583" height="46" rx="10" fill="#1B1D31"/>
                            <rect y="66" width="583" height="263" rx="10" fill="#1B1D31"/>
                            <path d="M172 33C177.523 33 182 28.5228 182 23C182 17.4772 177.523 13 172 13C166.477 13 162 17.4772 162 23C162 28.5228 166.477 33 172 33Z" stroke="white" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M172 13C169.432 15.6962 168 19.2767 168 23C168 26.7233 169.432 30.3038 172 33C174.568 30.3038 176 26.7233 176 23C176 19.2767 174.568 15.6962 172 13Z" stroke="white" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M162 23H182" stroke="white" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M203.366 29.096C202.545 29.096 201.809 28.9147 201.158 28.552C200.518 28.1893 200.012 27.6827 199.638 27.032C199.265 26.3813 199.078 25.624 199.078 24.76C199.078 23.896 199.265 23.144 199.638 22.504C200.012 21.8533 200.518 21.3467 201.158 20.984C201.809 20.6213 202.545 20.44 203.366 20.44C204.081 20.44 204.726 20.6 205.302 20.92C205.878 21.24 206.337 21.72 206.678 22.36C207.03 23 207.206 23.8 207.206 24.76C207.206 25.72 207.036 26.52 206.694 27.16C206.364 27.8 205.91 28.2853 205.334 28.616C204.758 28.936 204.102 29.096 203.366 29.096ZM203.494 27.752C204.028 27.752 204.508 27.6293 204.934 27.384C205.372 27.1387 205.713 26.792 205.958 26.344C206.214 25.8853 206.342 25.3573 206.342 24.76C206.342 24.152 206.214 23.6293 205.958 23.192C205.713 22.744 205.372 22.3973 204.934 22.152C204.508 21.9067 204.028 21.784 203.494 21.784C202.95 21.784 202.465 21.9067 202.038 22.152C201.612 22.3973 201.27 22.744 201.014 23.192C200.758 23.6293 200.63 24.152 200.63 24.76C200.63 25.3573 200.758 25.8853 201.014 26.344C201.27 26.792 201.612 27.1387 202.038 27.384C202.465 27.6293 202.95 27.752 203.494 27.752ZM206.39 29V26.712L206.486 24.744L206.326 22.776V17.128H207.862V29H206.39ZM214.545 29.096C213.638 29.096 212.838 28.9093 212.145 28.536C211.462 28.1627 210.929 27.6507 210.545 27C210.171 26.3493 209.985 25.6027 209.985 24.76C209.985 23.9173 210.166 23.1707 210.529 22.52C210.902 21.8693 211.409 21.3627 212.049 21C212.699 20.6267 213.43 20.44 214.241 20.44C215.062 20.44 215.787 20.6213 216.417 20.984C217.046 21.3467 217.537 21.8587 217.889 22.52C218.251 23.1707 218.433 23.9333 218.433 24.808C218.433 24.872 218.427 24.9467 218.417 25.032C218.417 25.1173 218.411 25.1973 218.401 25.272H211.185V24.168H217.601L216.977 24.552C216.987 24.008 216.875 23.5227 216.641 23.096C216.406 22.6693 216.081 22.3387 215.665 22.104C215.259 21.8587 214.785 21.736 214.241 21.736C213.707 21.736 213.233 21.8587 212.817 22.104C212.401 22.3387 212.075 22.6747 211.841 23.112C211.606 23.5387 211.489 24.0293 211.489 24.584V24.84C211.489 25.4053 211.617 25.912 211.873 26.36C212.139 26.7973 212.507 27.1387 212.977 27.384C213.446 27.6293 213.985 27.752 214.593 27.752C215.094 27.752 215.547 27.6667 215.953 27.496C216.369 27.3253 216.731 27.0693 217.041 26.728L217.889 27.72C217.505 28.168 217.025 28.5093 216.449 28.744C215.883 28.9787 215.249 29.096 214.545 29.096ZM224.069 29.096C223.248 29.096 222.512 28.9147 221.861 28.552C221.221 28.1893 220.715 27.6827 220.341 27.032C219.968 26.3813 219.781 25.624 219.781 24.76C219.781 23.896 219.968 23.144 220.341 22.504C220.715 21.8533 221.221 21.3467 221.861 20.984C222.512 20.6213 223.248 20.44 224.069 20.44C224.784 20.44 225.429 20.6 226.005 20.92C226.581 21.24 227.04 21.72 227.381 22.36C227.733 23 227.909 23.8 227.909 24.76C227.909 25.72 227.739 26.52 227.397 27.16C227.067 27.8 226.613 28.2853 226.037 28.616C225.461 28.936 224.805 29.096 224.069 29.096ZM224.197 27.752C224.731 27.752 225.211 27.6293 225.637 27.384C226.075 27.1387 226.416 26.792 226.661 26.344C226.917 25.8853 227.045 25.3573 227.045 24.76C227.045 24.152 226.917 23.6293 226.661 23.192C226.416 22.744 226.075 22.3973 225.637 22.152C225.211 21.9067 224.731 21.784 224.197 21.784C223.653 21.784 223.168 21.9067 222.741 22.152C222.315 22.3973 221.973 22.744 221.717 23.192C221.461 23.6293 221.333 24.152 221.333 24.76C221.333 25.3573 221.461 25.8853 221.717 26.344C221.973 26.792 222.315 27.1387 222.741 27.384C223.168 27.6293 223.653 27.752 224.197 27.752ZM227.093 29V26.712L227.189 24.744L227.029 22.776V17.128H228.565V29H227.093ZM235.104 29.096C234.25 29.096 233.493 28.9093 232.832 28.536C232.17 28.1627 231.648 27.6507 231.264 27C230.88 26.3387 230.688 25.592 230.688 24.76C230.688 23.9173 230.88 23.1707 231.264 22.52C231.648 21.8693 232.17 21.3627 232.832 21C233.493 20.6267 234.25 20.44 235.104 20.44C235.946 20.44 236.698 20.6267 237.36 21C238.032 21.3627 238.554 21.8693 238.928 22.52C239.312 23.16 239.504 23.9067 239.504 24.76C239.504 25.6027 239.312 26.3493 238.928 27C238.554 27.6507 238.032 28.1627 237.36 28.536C236.698 28.9093 235.946 29.096 235.104 29.096ZM235.104 27.752C235.648 27.752 236.133 27.6293 236.56 27.384C236.997 27.1387 237.338 26.792 237.584 26.344C237.829 25.8853 237.952 25.3573 237.952 24.76C237.952 24.152 237.829 23.6293 237.584 23.192C237.338 22.744 236.997 22.3973 236.56 22.152C236.133 21.9067 235.648 21.784 235.104 21.784C234.56 21.784 234.074 21.9067 233.648 22.152C233.221 22.3973 232.88 22.744 232.624 23.192C232.368 23.6293 232.24 24.152 232.24 24.76C232.24 25.3573 232.368 25.8853 232.624 26.344C232.88 26.792 233.221 27.1387 233.648 27.384C234.074 27.6293 234.56 27.752 235.104 27.752ZM245.324 29.096C244.46 29.096 243.687 28.9093 243.004 28.536C242.332 28.1627 241.804 27.6507 241.42 27C241.036 26.3493 240.844 25.6027 240.844 24.76C240.844 23.9173 241.036 23.1707 241.42 22.52C241.804 21.8693 242.332 21.3627 243.004 21C243.687 20.6267 244.46 20.44 245.324 20.44C246.092 20.44 246.775 20.5947 247.372 20.904C247.98 21.2027 248.449 21.6507 248.78 22.248L247.612 23C247.335 22.584 246.993 22.28 246.588 22.088C246.193 21.8853 245.767 21.784 245.308 21.784C244.753 21.784 244.257 21.9067 243.82 22.152C243.383 22.3973 243.036 22.744 242.78 23.192C242.524 23.6293 242.396 24.152 242.396 24.76C242.396 25.368 242.524 25.896 242.78 26.344C243.036 26.792 243.383 27.1387 243.82 27.384C244.257 27.6293 244.753 27.752 245.308 27.752C245.767 27.752 246.193 27.656 246.588 27.464C246.993 27.2613 247.335 26.952 247.612 26.536L248.78 27.272C248.449 27.8587 247.98 28.312 247.372 28.632C246.775 28.9413 246.092 29.096 245.324 29.096ZM251.449 29.096C251.15 29.096 250.894 28.9947 250.681 28.792C250.468 28.5787 250.361 28.312 250.361 27.992C250.361 27.672 250.468 27.4107 250.681 27.208C250.894 27.0053 251.15 26.904 251.449 26.904C251.737 26.904 251.982 27.0053 252.185 27.208C252.398 27.4107 252.505 27.672 252.505 27.992C252.505 28.312 252.398 28.5787 252.185 28.792C251.982 28.9947 251.737 29.096 251.449 29.096ZM260.126 29V27.208L260.046 26.872V23.816C260.046 23.1653 259.854 22.664 259.47 22.312C259.097 21.9493 258.532 21.768 257.774 21.768C257.273 21.768 256.782 21.8533 256.302 22.024C255.822 22.184 255.417 22.4027 255.086 22.68L254.446 21.528C254.884 21.176 255.406 20.9093 256.014 20.728C256.633 20.536 257.278 20.44 257.95 20.44C259.113 20.44 260.009 20.7227 260.638 21.288C261.268 21.8533 261.582 22.7173 261.582 23.88V29H260.126ZM257.342 29.096C256.713 29.096 256.158 28.9893 255.678 28.776C255.209 28.5627 254.846 28.2693 254.59 27.896C254.334 27.512 254.206 27.08 254.206 26.6C254.206 26.1413 254.313 25.7253 254.526 25.352C254.75 24.9787 255.108 24.68 255.598 24.456C256.1 24.232 256.772 24.12 257.614 24.12H260.302V25.224H257.678C256.91 25.224 256.393 25.352 256.126 25.608C255.86 25.864 255.726 26.1733 255.726 26.536C255.726 26.952 255.892 27.288 256.222 27.544C256.553 27.7893 257.012 27.912 257.598 27.912C258.174 27.912 258.676 27.784 259.102 27.528C259.54 27.272 259.854 26.8987 260.046 26.408L260.35 27.464C260.148 27.9653 259.79 28.3653 259.278 28.664C258.766 28.952 258.121 29.096 257.342 29.096ZM268.921 29.096C268.217 29.096 267.571 28.936 266.985 28.616C266.409 28.2853 265.945 27.8 265.593 27.16C265.251 26.52 265.081 25.72 265.081 24.76C265.081 23.8 265.246 23 265.577 22.36C265.918 21.72 266.377 21.24 266.953 20.92C267.539 20.6 268.195 20.44 268.921 20.44C269.753 20.44 270.489 20.6213 271.129 20.984C271.769 21.3467 272.275 21.8533 272.649 22.504C273.022 23.144 273.209 23.896 273.209 24.76C273.209 25.624 273.022 26.3813 272.649 27.032C272.275 27.6827 271.769 28.1893 271.129 28.552C270.489 28.9147 269.753 29.096 268.921 29.096ZM264.425 32.104V20.52H265.897V22.808L265.801 24.776L265.961 26.744V32.104H264.425ZM268.793 27.752C269.337 27.752 269.822 27.6293 270.249 27.384C270.686 27.1387 271.027 26.792 271.273 26.344C271.529 25.8853 271.657 25.3573 271.657 24.76C271.657 24.152 271.529 23.6293 271.273 23.192C271.027 22.744 270.686 22.3973 270.249 22.152C269.822 21.9067 269.337 21.784 268.793 21.784C268.259 21.784 267.774 21.9067 267.337 22.152C266.91 22.3973 266.569 22.744 266.313 23.192C266.067 23.6293 265.945 24.152 265.945 24.76C265.945 25.3573 266.067 25.8853 266.313 26.344C266.569 26.792 266.91 27.1387 267.337 27.384C267.774 27.6293 268.259 27.752 268.793 27.752ZM279.827 29.096C279.123 29.096 278.478 28.936 277.891 28.616C277.315 28.2853 276.851 27.8 276.499 27.16C276.158 26.52 275.987 25.72 275.987 24.76C275.987 23.8 276.152 23 276.483 22.36C276.824 21.72 277.283 21.24 277.859 20.92C278.446 20.6 279.102 20.44 279.827 20.44C280.659 20.44 281.395 20.6213 282.035 20.984C282.675 21.3467 283.182 21.8533 283.555 22.504C283.928 23.144 284.115 23.896 284.115 24.76C284.115 25.624 283.928 26.3813 283.555 27.032C283.182 27.6827 282.675 28.1893 282.035 28.552C281.395 28.9147 280.659 29.096 279.827 29.096ZM275.331 32.104V20.52H276.803V22.808L276.707 24.776L276.867 26.744V32.104H275.331ZM279.699 27.752C280.243 27.752 280.728 27.6293 281.155 27.384C281.592 27.1387 281.934 26.792 282.179 26.344C282.435 25.8853 282.563 25.3573 282.563 24.76C282.563 24.152 282.435 23.6293 282.179 23.192C281.934 22.744 281.592 22.3973 281.155 22.152C280.728 21.9067 280.243 21.784 279.699 21.784C279.166 21.784 278.68 21.9067 278.243 22.152C277.816 22.3973 277.475 22.744 277.219 23.192C276.974 23.6293 276.851 24.152 276.851 24.76C276.851 25.3573 276.974 25.8853 277.219 26.344C277.475 26.792 277.816 27.1387 278.243 27.384C278.68 27.6293 279.166 27.752 279.699 27.752ZM284.333 30.6L289.613 15.528H291.005L285.725 30.6H284.333ZM301.392 20.44C302.075 20.44 302.677 20.5733 303.2 20.84C303.723 21.1067 304.128 21.512 304.416 22.056C304.715 22.6 304.864 23.288 304.864 24.12V29H303.328V24.296C303.328 23.4747 303.136 22.856 302.752 22.44C302.368 22.024 301.829 21.816 301.136 21.816C300.624 21.816 300.176 21.9227 299.792 22.136C299.408 22.3493 299.109 22.664 298.896 23.08C298.693 23.496 298.592 24.0133 298.592 24.632V29H297.056V24.296C297.056 23.4747 296.864 22.856 296.48 22.44C296.107 22.024 295.568 21.816 294.864 21.816C294.363 21.816 293.92 21.9227 293.536 22.136C293.152 22.3493 292.853 22.664 292.64 23.08C292.427 23.496 292.32 24.0133 292.32 24.632V29H290.784V20.52H292.256V22.776L292.016 22.2C292.283 21.6453 292.693 21.2133 293.248 20.904C293.803 20.5947 294.448 20.44 295.184 20.44C295.995 20.44 296.693 20.6427 297.28 21.048C297.867 21.4427 298.251 22.0453 298.432 22.856L297.808 22.6C298.064 21.9493 298.512 21.4267 299.152 21.032C299.792 20.6373 300.539 20.44 301.392 20.44ZM307.902 32.2C307.497 32.2 307.102 32.1307 306.718 31.992C306.334 31.864 306.003 31.672 305.726 31.416L306.382 30.264C306.595 30.4667 306.83 30.6213 307.086 30.728C307.342 30.8347 307.614 30.888 307.902 30.888C308.275 30.888 308.585 30.792 308.83 30.6C309.075 30.408 309.305 30.0667 309.518 29.576L310.046 28.408L310.206 28.216L313.534 20.52H315.038L310.926 29.848C310.681 30.4453 310.403 30.9147 310.094 31.256C309.795 31.5973 309.465 31.8373 309.102 31.976C308.739 32.1253 308.339 32.2 307.902 32.2ZM309.918 29.272L306.046 20.52H307.646L310.942 28.072L309.918 29.272ZM315.725 25.272V23.944H320.029V25.272H315.725ZM326.89 29.096C326.186 29.096 325.54 28.936 324.954 28.616C324.378 28.2853 323.914 27.8 323.562 27.16C323.22 26.52 323.049 25.72 323.049 24.76C323.049 23.8 323.215 23 323.546 22.36C323.887 21.72 324.346 21.24 324.922 20.92C325.508 20.6 326.164 20.44 326.89 20.44C327.722 20.44 328.458 20.6213 329.098 20.984C329.738 21.3467 330.244 21.8533 330.618 22.504C330.991 23.144 331.178 23.896 331.178 24.76C331.178 25.624 330.991 26.3813 330.618 27.032C330.244 27.6827 329.738 28.1893 329.098 28.552C328.458 28.9147 327.722 29.096 326.89 29.096ZM322.394 32.104V20.52H323.866V22.808L323.77 24.776L323.93 26.744V32.104H322.394ZM326.762 27.752C327.306 27.752 327.791 27.6293 328.218 27.384C328.655 27.1387 328.996 26.792 329.242 26.344C329.498 25.8853 329.626 25.3573 329.626 24.76C329.626 24.152 329.498 23.6293 329.242 23.192C328.996 22.744 328.655 22.3973 328.218 22.152C327.791 21.9067 327.306 21.784 326.762 21.784C326.228 21.784 325.743 21.9067 325.306 22.152C324.879 22.3973 324.538 22.744 324.282 23.192C324.036 23.6293 323.914 24.152 323.914 24.76C323.914 25.3573 324.036 25.8853 324.282 26.344C324.538 26.792 324.879 27.1387 325.306 27.384C325.743 27.6293 326.228 27.752 326.762 27.752ZM333.3 29V20.52H334.772V22.824L334.628 22.248C334.862 21.6613 335.257 21.2133 335.812 20.904C336.366 20.5947 337.049 20.44 337.86 20.44V21.928C337.796 21.9173 337.732 21.912 337.668 21.912C337.614 21.912 337.561 21.912 337.508 21.912C336.686 21.912 336.036 22.1573 335.556 22.648C335.076 23.1387 334.836 23.848 334.836 24.776V29H333.3ZM343.307 29.096C342.453 29.096 341.696 28.9093 341.035 28.536C340.373 28.1627 339.851 27.6507 339.467 27C339.083 26.3387 338.891 25.592 338.891 24.76C338.891 23.9173 339.083 23.1707 339.467 22.52C339.851 21.8693 340.373 21.3627 341.035 21C341.696 20.6267 342.453 20.44 343.307 20.44C344.149 20.44 344.901 20.6267 345.563 21C346.235 21.3627 346.757 21.8693 347.131 22.52C347.515 23.16 347.707 23.9067 347.707 24.76C347.707 25.6027 347.515 26.3493 347.131 27C346.757 27.6507 346.235 28.1627 345.563 28.536C344.901 28.9093 344.149 29.096 343.307 29.096ZM343.307 27.752C343.851 27.752 344.336 27.6293 344.763 27.384C345.2 27.1387 345.541 26.792 345.787 26.344C346.032 25.8853 346.155 25.3573 346.155 24.76C346.155 24.152 346.032 23.6293 345.787 23.192C345.541 22.744 345.2 22.3973 344.763 22.152C344.336 21.9067 343.851 21.784 343.307 21.784C342.763 21.784 342.277 21.9067 341.851 22.152C341.424 22.3973 341.083 22.744 340.827 23.192C340.571 23.6293 340.443 24.152 340.443 24.76C340.443 25.3573 340.571 25.8853 340.827 26.344C341.083 26.792 341.424 27.1387 341.851 27.384C342.277 27.6293 342.763 27.752 343.307 27.752ZM348.743 32.2C348.391 32.2 348.055 32.1573 347.735 32.072C347.404 31.9867 347.127 31.8587 346.903 31.688L347.399 30.504C347.719 30.7707 348.135 30.904 348.647 30.904C349.052 30.904 349.362 30.776 349.575 30.52C349.799 30.2747 349.911 29.9067 349.911 29.416V20.52H351.447V29.384C351.447 30.248 351.212 30.9307 350.743 31.432C350.284 31.944 349.618 32.2 348.743 32.2ZM350.679 18.888C350.38 18.888 350.13 18.792 349.927 18.6C349.735 18.408 349.639 18.1733 349.639 17.896C349.639 17.608 349.735 17.368 349.927 17.176C350.13 16.984 350.38 16.888 350.679 16.888C350.978 16.888 351.223 16.984 351.415 17.176C351.618 17.3573 351.719 17.5867 351.719 17.864C351.719 18.152 351.623 18.3973 351.431 18.6C351.239 18.792 350.988 18.888 350.679 18.888ZM358.154 29.096C357.247 29.096 356.447 28.9093 355.754 28.536C355.071 28.1627 354.538 27.6507 354.154 27C353.781 26.3493 353.594 25.6027 353.594 24.76C353.594 23.9173 353.775 23.1707 354.138 22.52C354.511 21.8693 355.018 21.3627 355.658 21C356.309 20.6267 357.039 20.44 357.85 20.44C358.671 20.44 359.397 20.6213 360.026 20.984C360.655 21.3467 361.146 21.8587 361.498 22.52C361.861 23.1707 362.042 23.9333 362.042 24.808C362.042 24.872 362.037 24.9467 362.026 25.032C362.026 25.1173 362.021 25.1973 362.01 25.272H354.794V24.168H361.21L360.586 24.552C360.597 24.008 360.485 23.5227 360.25 23.096C360.015 22.6693 359.69 22.3387 359.274 22.104C358.869 21.8587 358.394 21.736 357.85 21.736C357.317 21.736 356.842 21.8587 356.426 22.104C356.01 22.3387 355.685 22.6747 355.45 23.112C355.215 23.5387 355.098 24.0293 355.098 24.584V24.84C355.098 25.4053 355.226 25.912 355.482 26.36C355.749 26.7973 356.117 27.1387 356.586 27.384C357.055 27.6293 357.594 27.752 358.202 27.752C358.703 27.752 359.157 27.6667 359.562 27.496C359.978 27.3253 360.341 27.0693 360.65 26.728L361.498 27.72C361.114 28.168 360.634 28.5093 360.058 28.744C359.493 28.9787 358.858 29.096 358.154 29.096ZM367.871 29.096C367.007 29.096 366.233 28.9093 365.551 28.536C364.879 28.1627 364.351 27.6507 363.967 27C363.583 26.3493 363.391 25.6027 363.391 24.76C363.391 23.9173 363.583 23.1707 363.967 22.52C364.351 21.8693 364.879 21.3627 365.551 21C366.233 20.6267 367.007 20.44 367.871 20.44C368.639 20.44 369.321 20.5947 369.919 20.904C370.527 21.2027 370.996 21.6507 371.327 22.248L370.159 23C369.881 22.584 369.54 22.28 369.135 22.088C368.74 21.8853 368.313 21.784 367.855 21.784C367.3 21.784 366.804 21.9067 366.367 22.152C365.929 22.3973 365.583 22.744 365.327 23.192C365.071 23.6293 364.943 24.152 364.943 24.76C364.943 25.368 365.071 25.896 365.327 26.344C365.583 26.792 365.929 27.1387 366.367 27.384C366.804 27.6293 367.3 27.752 367.855 27.752C368.313 27.752 368.74 27.656 369.135 27.464C369.54 27.2613 369.881 26.952 370.159 26.536L371.327 27.272C370.996 27.8587 370.527 28.312 369.919 28.632C369.321 28.9413 368.639 29.096 367.871 29.096ZM376.337 29.096C375.483 29.096 374.822 28.8667 374.353 28.408C373.883 27.9493 373.649 27.2933 373.649 26.44V18.664H375.185V26.376C375.185 26.8347 375.297 27.1867 375.521 27.432C375.755 27.6773 376.086 27.8 376.513 27.8C376.993 27.8 377.393 27.6667 377.713 27.4L378.193 28.504C377.958 28.7067 377.675 28.856 377.345 28.952C377.025 29.048 376.689 29.096 376.337 29.096ZM372.209 21.784V20.52H377.617V21.784H372.209Z" fill="white" fill-opacity="0.6"/>
                            <rect x="31" y="165" width="509" height="20" rx="5" fill="#D9D9D9" fill-opacity="0.04"/>
                            <rect x="31" y="197" width="332" height="21" rx="5" fill="#D9D9D9" fill-opacity="0.04"/>
                            <rect x="31" y="131" width="169" height="21" rx="5" fill="#D9D9D9" fill-opacity="0.04"/>
                            <rect x="31" y="98" width="359" height="21" rx="5" fill="#D9D9D9" fill-opacity="0.04"/>
                            <rect x="31" y="229" width="403" height="21" rx="5" fill="#D9D9D9" fill-opacity="0.04"/>
                            <rect x="31" y="261" width="201" height="20" rx="5" fill="#D9D9D9" fill-opacity="0.04"/>
                            <rect x="31" y="292" width="256" height="20" rx="5" fill="#D9D9D9" fill-opacity="0.04"/>
                        </svg>
                    </Card>
                </div>
                <div className="col-span-12">
                    <Card>
                        <div className="flex justify-between items-center text-left flex-wrap">
                            <div className="mb-3">
                                <h2 className="text-3xl mb-3">Getting Started</h2>
                                <p>Connect a Solana wallet to create a project.</p>
                            </div>
                            <div>
                                {/* <button disabled className="btn btn-primary">
                                    Connect Wallet
                                </button> */}
                                <i>Coming Soon</i>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            <footer className="mt-[10rem] text-center text-xs">
                
            </footer>
        </>
    );
}