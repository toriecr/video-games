games = Game.create([
    {
        name: "Dota 2",
        image_url: "https://i.imgur.com/FZu5Uxz.jpg"
    },
    {
        name: "The Elder Scrolls V: Skyrim",
        image_url: "https://i.redd.it/ssamtptivcjy.png"
    },
    {
        name: "Counter Strike: Global Offensive",
        image_url: "https://www.cswarzone.com/wp-content/uploads/2020/05/CSGO-Banner.png"
    },
    {
        name: "Warframe",
        image_url: "https://content.invisioncic.com/Mwarframe/monthly_2017_12/5a217983e4941_poekeyartBANNER.png.2606a5594ebc251e32553ac1e98f3e7c.png"
    },
    {
        name: "Destiny 2",
        image_url: "https://www.thesixthaxis.com/wp-content/uploads/2020/02/Destiny2-Worthy-Hero500.jpg"
    },
    {
        name: "Team Fortress 2",
        image_url: "https://www.f-covers.com/cover/team-fortress-2-facebook-cover-timeline-banner-for-fb.jpg"
    }
])

reviews = Review.create([
    {
        title: 'Amazing game',
        description: 'Amazing graphics, amazing sound. Complicated game.',
        score: 5,
        game: games.first
    },
    {
        title: 'Absolute garbage',
        description: 'Not that fun to play in 2020.',
        score: 1,
        game: games.first
    },
    {
        title: 'Good times, definitely',
        description: 'Happy to play this in quarantine.',
        score: 5,
        game: games.first
    },
    {
        title: 'Runs too slow on my PC',
        description: 'I know my graphics card is not the best, but it should not be at 100% GPU.',
        score: 4,
        game: games.second
    },
    {
        title: 'Cannot get enough of this game',
        description: 'I literally spend all night playing.',
        score: 5,
        game: games.third
    },
    {
        title: 'Meh',
        description: 'Not too bad, but not too good either.',
        score: 3,
        game: games.first
    },
    {
        title: 'Amazing game',
        description: 'Amazing graphics, amazing sound. Complicated game.',
        score: 5,
        game: games.fifth
    },
    {
        title: 'Garbage',
        description: 'Do NOT buy this game.',
        score: 1,
        game: games.fourth
    },
    {
        title: 'Not a bad game.',
        description: 'My 5/5 goes to Skyrim though.',
        score: 4,
        game: games.third
    },
    {
        title: 'Not worth your money.',
        description: 'Test review.',
        score: 2,
        game: games.second
    }
])