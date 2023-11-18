document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll('.nav-item');
    const content = document.querySelector('.content');

    const pages = {
        Profile: {
            pageUrl: '/Dashboard/profile.html',
            cssUrl: '/Dashboard/profile.css'
        },
        Home: {
            pageUrl: '/Homepage/Homepage.html',
            cssUrl: '/Homepage/Homepage.css'
        },
        MyAds: {
            pageUrl: '/MyAds/MyAds.html',
            cssUrl: '.css'
        },
        Proposals: {
            pageUrl: '../Proposals/proposals.html',
            cssUrl: '../Proposals/proposals.css'
        },
        CompletedDeals: {
            pageUrl: '/swapit-hackathon-project/ui/CompletedDeals/completedDeals.html',
            cssUrl: '/swapit-hackathon-project/ui/CompletedDeals/completedDeals.css'
        },
        Community: {
            pageUrl: '/JoinCommunity/JoinCommunity.html',
            cssUrl: '/JoinCommunity/JoinCommunity.css'
        },
    };

    function updateContent(pageName) {
        content.classList.remove('show');
        setTimeout(() => {
            const page = pages[pageName];
            if (page) {
                Promise.all([
                    fetch(page.pageUrl).then((response) => response.text()),
                    fetch(page.cssUrl).then((response) => response.text())
                ])
                    .then(([html, css]) => {
                        content.innerHTML = html;
                        const style = document.createElement('style');
                        style.innerHTML = css;
                        content.appendChild(style);
                        content.classList.add('show');
                    })
                    .then(() => {
                        content.style.height = content.scrollHeight + 'px';
                    });
            }
        }, 500);
    }

   
    content.classList.add('show');
    content.style.height = content.scrollHeight + 'px';

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const pageName = item.textContent;
            updateContent(pageName);
        });
    });
});
