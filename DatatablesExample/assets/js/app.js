class Tabela {

    table;

    constructor(elementName) {
        fetch('/assets/data/data.json').then(res => res.json()).then(data => {
            this.table = $('#table1').DataTable({
                data,
                columns: [
                    { title: "NUMER_WPISU", data: "NUMER_WPISU" },
                    { title: "IMIONA", data: "IMIONA" },
                    { title: "NAZWISKO", data: "NAZWISKO" },
                    { title: "DATA_WPISU", data: "DATA_WPISU" },
                    { title: "WUP_WPISU", data: "WUP_WPISU" },
                    { title: "DATA_SKRESLENIA", data: "DATA_SKRESLENIA" },
                    { title: "WUP_SKRESLENIA", data: "WUP_SKRESLENIA" }
                ]
            });
        });
    }

    filterBy(colIndex, value) {
        this.table.column(colIndex).search(value).draw();
    }
    
}

const tabelka1 = new Tabela('#tabela1');
