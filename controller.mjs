import users from "./data.mjs";

const index = () => {
    console.log("=== DATA USERS ===");

    users.map((user, index) => {
        console.log(
            `${index + 1}. ${user.nama} | ${user.umur} tahun | ${user.alamat} | ${user.email}`
        );
    });
};


const store = (user) => {
    users.push(user);

    console.log("Data berhasil ditambahkan.");
};


const destroy = () => {
    users.pop();

    console.log("Data terakhir berhasil dihapus.");
};


export { index, store, destroy };