class Pojistenec {
    constructor(jmeno, prijmeni, vek, telefon) {
        this.jmeno = jmeno;
        this.prijmeni = prijmeni;
        this.vek = vek;
        this.telefon = telefon;
    }

    toString() {
        return `${this.jmeno} ${this.prijmeni}`;
    }
}

class Aplikace {
    constructor() {
        this.pojistenci = [];
        this.init();
    }

    init() {
        document.getElementById('pojistenec-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.pridatPojistence();
        });
        this.aktualizovatTabulku();
    }

    pridatPojistence() {
        const jmeno = document.getElementById('jmeno').value;
        const prijmeni = document.getElementById('prijmeni').value;
        const vek = document.getElementById('vek').value;
        const telefon = document.getElementById('telefon').value;
        const pojistenec = new Pojistenec(jmeno, prijmeni, vek, telefon);
        this.pojistenci.push(pojistenec);
        this.aktualizovatTabulku();
        this.vymazatFormular();
    }

    aktualizovatTabulku() {
        const tbody = document.querySelector('#pojistenci-table tbody');
        tbody.innerHTML = '';
        this.pojistenci.forEach(pojistenec => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${pojistenec.toString()}</td>
                <td>${pojistenec.telefon}</td>
                <td>${pojistenec.vek}</td>
            `;
            tbody.appendChild(row);
        });
    }

    vymazatFormular() {
        document.getElementById('jmeno').value = '';
        document.getElementById('prijmeni').value = '';
        document.getElementById('vek').value = '';
        document.getElementById('telefon').value = '';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Aplikace();
});