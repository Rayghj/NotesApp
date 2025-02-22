import Swal from 'sweetalert2';

const baseUrl = 'https://notes-api.dicoding.dev/v2';
const loading = document.querySelector('indicator-loading');

const main = {
    getNote: () => {
        fetch(`${baseUrl}/notes`)
            .then(main.sleep)
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {
                if (responseJson.error) {
                    main.showResponseMessage(responseJson.message);
                } else {
                    const noteData = document.querySelector('note-data');
                    noteData.noteItems = responseJson.data;
                    noteData.render();
                }
            })
            .catch((error) => {
                Swal.fire({
                    title: 'Error!',
                    text: `${error.message}: Cek koneksi internet kamu`,
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            });
    },

    addNote: (note) => {
        loading.showLoading();

        fetch(`${baseUrl}/notes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note),
        })
            .then(main.sleep)
            .then((response) => {
                return response.json();
            })
            .then(() => {
                Swal.fire({
                    title: 'Berhasil!',
                    icon: 'success',
                    confirmButtonText: 'SIP',
                });
                main.getNote();
            })
            .catch((error) => {
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            })
            .finally(() => {
                loading.hideLoading();
            });
    },

    removeNote: (noteId) => {
        loading.showLoading();

        fetch(`${baseUrl}/notes/${noteId}`, {
            method: 'DELETE',
            headers: {
                'X-Auth-token': '12345',
            },
        })
            .then(main.sleep)
            .then((response) => {
                return response.json();
            })
            .then(() => {
                main.getNote();
                main.getArchiveNote();
            })
            .catch((error) => {
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            })
            .finally(() => {
                loading.hideLoading();
            });
    },

    getArchiveNote: () => {
        fetch(`${baseUrl}/notes/archived`)
            .then(main.sleep)
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {
                if (responseJson.error) {
                    main.showResponseMessage(responseJson.message);
                } else {
                    const noteArchive = document.querySelector('note-archive');
                    noteArchive.noteAcv = responseJson.data;
                    noteArchive.render();
                }
            })
            .catch((error) => {
                Swal.fire({
                    title: 'Error!',
                    text: `${error.message}: Cek koneksi internet kamu`,
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            });
    },

    archiveNote: (noteId) => {
        loading.showLoading();

        fetch(`${baseUrl}/notes/${noteId}/archive`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(noteId),
        })
            .then(main.sleep)
            .then((response) => {
                return response.json();
            })
            .then(() => {
                Swal.fire({
                    title: 'Berhasil!',
                    icon: 'success',
                    confirmButtonText: 'SIP',
                });
                main.getNote();
                main.getArchiveNote();
            })
            .catch((error) => {
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            })
            .finally(() => {
                loading.hideLoading();
            });
    },

    unArchiveNote: (noteId) => {
        loading.showLoading();

        fetch(`${baseUrl}/notes/${noteId}/unarchive`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(noteId),
        })
            .then(main.sleep)
            .then((response) => {
                return response.json();
            })
            .then(() => {
                Swal.fire({
                    title: 'Berhasil!',
                    icon: 'success',
                    confirmButtonText: 'SIP',
                });
                main.getNote();
                main.getArchiveNote();
            })
            .catch((error) => {
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            })
            .finally(() => {
                loading.hideLoading();
            });
    },

    sleep: (response) => {
        return new Promise((resolve) =>
            setTimeout(() => {
                resolve(response);
            }, 400)
        );
    },
};

document.addEventListener('DOMContentLoaded', () => {
    const noteFormTitle = document.querySelector('#noteFormTitle');
    const noteFormBody = document.querySelector('#noteFormBody');
    const noteFormSubmit = document.querySelector('#noteFormSubmit');

    noteFormSubmit.addEventListener('click', function () {
        const note = {
            title: noteFormTitle.value,
            body: noteFormBody.value,
        };
        main.addNote(note);
    });

    main.getNote();
});

export default main;
