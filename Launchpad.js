class Launchpad {

    grid;
    soundsFolder = 'sounds';

    constructor(launchset) {
        this.launchset = launchset;
        this.createGrid();
        this.createButtons();
        this.pressButtons();
        document.getElementById('launchpad').append(this.grid);
    }

    createGrid() {
        this.grid = document.createElement('div');
        this.grid.classList.add('grid');
    }

    createButtons() {
        this.launchset.forEach((set, i) => {
            let button = document.createElement('button');
            button.innerText = set.key;
            this.grid.append(button);

            let audio = new Audio(this.soundsFolder + '/' + set.name + '.wav');

            button.addEventListener('click', () => {
                audio.pause();
                audio.currentTime = 0;
                audio.play();
                button.classList.add('active');
                setTimeout(() => {
                    button.classList.remove('active');
                }, 100);
            });

            this.launchset[i].button = button;

        })
    }

    pressButtons() {
        document.addEventListener('keydown', (e) => {
            this.launchset.forEach(set => {
                if (e.key === set.key) {
                    set.button.click();
                }
            })
        })
    }

}

let launchpad = new Launchpad(launchset);