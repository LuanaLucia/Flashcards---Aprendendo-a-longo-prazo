class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    
    type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];
        if (this.isDeleting){
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }            

        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
        let typeSpeed = 300;
        const typingElement = document.querySelector('.fas');

        if (this.isDeleting){
            typeSpeed /= 4;        
        }

        if(!this.isDeleting && this.txt === fullTxt){
            typeSpeed = this.wait;
            this.isDeleting = true;

        } else if (this.isDeleting && this.txt === ''){
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 1000;

        }

        setTimeout(() => this.type(), typeSpeed)
    }
}


document.addEventListener('DOMContentLoaded', init);

function init() {
const txtElement = document.querySelector('.txt-type');
const words = ['Aprender sem esquecer','Web App', 'Problem Solver?'];


const wait = 2500;

new TypeWriter(txtElement, words, wait);
}