

const Home = () => {
    return (
        <div className="container">
            <div>
                <i className="fs-5 fw-bold text-white d-inline-block mb-5">
                    If you are looking for a dope horror movies with an interesting plot, here are some good positions that you will like.<br/>Just trust me, okay?
                </i>
                <h1 className="bg-white text-danger p-2 mb-4">Movies of 2025 that are already out:</h1>
                <ul className="text-white mb-5 pb-5 border-bottom border-danger fs-5">
                    <li>Nosferatu - <span className="text-success">available online</span></li>
                    <li>Companion - in cinemas</li>
                    <li>Presence - in cinemas</li>
                    <li>Wolf Man - in cinemas</li>
                </ul>
            </div>

            <div className="mt-4">
                <h2 className="bg-white p-2 mb-4">Most anticipated movies of the 2025:</h2>
                <ul className="text-white mb-5 pb-5 border-bottom border-danger fs-5">
                    <li>The Monkey - 27 February (in Bishkek)</li>
                    <li>Sinners - 18 April</li>
                    <li>Final Destination: Bloodlines - 16 May</li>
                    <li>Death of a Unicorn - Spring 2025</li>
                    <li>28 Years Later - 20 June</li>
                    <li>M3gan 2.0 - 27 June</li>
                    <li>The Conjuring: Last Rites - 5 September</li>
                    <li>Saw XI - 26 September</li>
                    <li>Five Nights at Freddy’s 2 - 5 December</li>
                </ul>
            </div>

            <div className="mt-4">
                <h3 className="bg-white p-2 mb-4">My personal recommendations:</h3>
                <ul className="text-white mb-5 fs-5">
                    <li>The Medium - 2021 Thailand</li>
                    <li>The Wailing - 2016 South Korea</li>
                    <li>Incantation - 2022 Taiwan</li>
                    <li>Evil Dead Rise - 2023 USA</li>
                    <li>Barbarian - 2022 USA</li>
                    <li>Longlegs - 2024 Canada</li>
                    <li>Sinister - 2012 USA</li>
                    <li>Lights Out - 2016 USA</li>
                    <li>As above, so below - 2014 France</li>
                    <li>The Conjuring 1, 2 - 2013, 2016 USA</li>
                    <li>It Follows - 2014 USA</li>
                    <li>Ghostland - 2018 France</li>
                    <li>Gretel and Hansel - 2020 USA</li>
                    <li>The Taking of Deborah Logan - 2014 USA</li>
                    <li>Haunting of the Queen Mary / The Queen Mary - 2023 UK, USA</li>
                    <li>Deliver Us from Evil - 2014 USA</li>
                </ul>
            </div>
        </div>
    );
};

export default Home;