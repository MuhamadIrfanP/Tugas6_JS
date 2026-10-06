import { index, store, destroy } from "./controller.mjs";

const main = () => {

    // Tambah minimal 2 data
    store({
        nama: "Data 11",
        umur: 30,
        alamat: "Jl. Data 11",
        email: "data11@gmail.com"
    });

    store({
        nama: "Data 12",
        umur: 31,
        alamat: "Jl. Data 12",
        email: "data12@gmail.com"
    });


    // Melihat data
    index();


    // Menghapus data
    destroy();


    // Melihat data setelah dihapus
    index();
};

main();