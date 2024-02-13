
class ComingSoonPage extends HTMLElement {
    constructor() {
        super()

        this.innerHTML = `
        <div class="coming-soon-container flex flex-column align-items-center">
            <h1 class="mb-5 comingSoonTitle">MaReLand</h1>
            <div class="col-12 flex justify-content-center">
            <img src="./mareland/images/icon/whiteRoundLogo.png" class="logoComingSoon" alt="mareland">
            </div>
            <div class="flex col-12 align-items-end justify-content-center mt-5">
                <h1 class="mb-0 text-bold">Coming Soon</h1>
                <div class="dots-loading ml-2 mb-1">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        
        
        </div>
        `
    }
}

customElements.define('coming-soon-page', ComingSoonPage);

  