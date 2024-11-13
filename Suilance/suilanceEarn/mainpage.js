const gigsData = [
    {
        title: "Write a Twitter Thread on ZK logins",
        organization: "Mysten Labs",
        amount: 4000,
        currency: "USDC",
        dueIn: "11d",
        logo: "Mystenlabs.png",
        verified: false,
        type: "bounty"
    },
    {
        title: "Use the Walrus Testnet Phase",
        organization: "Walrus",
        amount: 800,
        currency: "USDC",
        dueIn: "4h",
        logo: "walrus.png",
        verified: true,
        type: "Task"
    },
    {
        title: "Scallop sCoin Integration - Cetus Aggregator",
        organization: "Scallop",
        amount: 300,
        currency: "USDC",
        dueIn: "3d",
        logo: "scallop.png",
        verified: true,
        type: "bounty"
    },
    {
        title: "Swap $500 Worth of USDC",
        organization: "Cetus",
        amount: 1500,
        currency: "USDC",
        dueIn: "2d",
        logo: "cetus.png",
        verified: true,
        type: "task"
    },
    {
        title: "Meme Contest: Create a Meme with FUD",
        organization: "FUD",
        amount: 250,
        currency: "USDC",
        dueIn: "10d",
        logo: "fud.png",
        verified: false,
        type: "bounty"
    },
    {
        title: "Write a thread on Hop.fun Launch",
        organization: "Hop Aggregator",
        amount: 2000,
        currency: "USDC",
        dueIn: "3d",
        logo: "hop.png",
        verified: true,
        type: "bounty"
    },
    {
        title: "Hackfest: Build Financial solutions On The Sui Blockchain",
        organization: "Sui On Campus",
        amount: 6000,
        currency: "USDC",
        dueIn: "7d",
        logo: "suiOnCampus.png",
        verified: true,
        type: "hackathon"
    },
    {
        title: "MOVE Developer: 2-3 Years Experience",
        organization: "Mysten Labs",
        amount: 9000,
        currency: "USDC",
        dueIn: "14d",
        logo: "mysten-labs-white.png",
        verified: true,
        type: "Jobs"
    },
    {
        title: "Job: 3D Artist",
        organization: "Studio Mirai DAO",
        amount: 2000,
        currency: "USDC",
        dueIn: "4d",
        logo: "studioMirai.png",
        verified: false,
        type: "job"
    },
    {
        title: "Zero-Knowledge Proof Implementation",
        organization: "Sui Foundation",
        amount: 7000,
        currency: "USDC",
        dueIn: "8d",
        logo: "sui.png",
        verified: true,
        type: "bounty"
    }
];

function renderGigs(gigs) {
    const gigsListElement = document.getElementById('gigsList');
    gigsListElement.innerHTML = gigs.map(gig => `
        <div class="gig-card">
            <img src="${gig.logo}" alt="${gig.organization}" class="gig-logo">
            <div class="gig-info">
                <h3>${gig.title}</h3>
                <div class="gig-org">
                    ${gig.organization} ${gig.verified ? '<span class="verified-badge">✓</span>' : ''}
                </div>
                <div class="gig-meta">
                    <span class="usdc-amount">
                        ⓾ ${gig.amount.toLocaleString()} ${gig.currency}
                        <i class="fas fa-bolt bolt-icon"></i>
                    </span>
                    <span class="due-date">
                        ${gig.dueIn}
                        <span class="online-status"></span>
                    </span>
                </div>
            </div>
        </div>
    `).join('');
}

document.getElementById('gigType').addEventListener('change', function(e) {
    const selectedType = e.target.value.toLowerCase();
    const filteredGigs = selectedType === 'all' 
        ? gigsData 
        : gigsData.filter(gig => gig.type === selectedType);
    renderGigs(filteredGigs);
});

// Initial render
renderGigs(gigsData);


