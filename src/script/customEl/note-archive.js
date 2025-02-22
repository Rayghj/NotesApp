import main from '../main';
import Swal from 'sweetalert2';

class NoteArchive extends HTMLElement {
    noteAcv = [];

    _note = {
        title: null,
        body: null,
    };

    constructor() {
        super();

        this._style = document.createElement('style');
    }

    connectedCallback() {
        this.render();
    }

    updateStyle() {
        this._style.textContent = `
          note-archive {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            gap: 2rem;
            padding: 42px;
          }

          .note-archive {
                display: block;
                padding: 0.8rem;
                border-radius: 4px;
                background-color:rgba(250, 172, 141, 0.15);
                border: 2px solid #000;
                box-shadow: 15px 15px 1px #ffa580, 15px 15px 1px 2px #000;
                transition: 0.2s all ease-in-out;
                overflow-x: hidden;
            }

            .note-archive:hover {
                box-shadow: none;
            }

            .note__title {
                margin-block-start: 0;
                margin-block-end: 1rem;
                font-size: 1.3rem;
                font-weight: bold;
                font-family: 'Dekko', serif;
            }

            p {
                margin-block-start: 0;
            }

            .button-unarchive {
              box-sizing: border-box;
              font-size: 1rem;
              padding: 0.25rem 0.75rem;
              margin: 20px 0 0 0;
              font-weight: 900;
              font-family: 'Dekko', serif;
              color: #000;
              cursor: pointer;
              border: 2px solid #000000;
              border-bottom: 5px solid #000000;
              border-radius: 0.75rem;
              background: #FCE7C8;
              transition: transform 0.1s ease;
            }

            .button-unarchive:hover {
              transform: translateY(-0.33rem);
            }

            .button-unarchive:active {
              transform: translateY(0);
            }

          @media only screen and (max-width: 772px) {
            note-archive {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            }
          }

          @media only screen and (max-width: 692px) {
            note-archive {
                grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            }
          }
        `;
    }

    render() {
        this.updateStyle();

        this.innerHTML = `
        ${this._style.outerHTML}
            ${this.noteAcv
                .map(
                    (note) => `
                <div id='noteArchive' class='note-archive'>
                    <h5 class='note__title'>${note.title}</h5>
                    <div class='note__body'>
                        <p>${note.body}</p>
                    </div>
                    <button type='button' class='button-delete' id='${note.id}'>Hapus</button>
                    <button type='button' class='button-unarchive' id='${note.id}'>Kembalikan</button>
                </div>
            `
                )
                .join('')}
        `;

        const buttonDel = document.querySelectorAll('.button-delete');
        buttonDel.forEach((buttonD) => {
            buttonD.addEventListener('click', (event) => {
                const noteId = event.target.id;
                Swal.fire({
                    title: 'Apakah kamu yakin?',
                    text: 'Kamu tidak akan bisa mengembalikannya setelah dihapus',
                    icon: 'warning',
                    showCancelButton: true,
                    cancelButtonText: 'Tidak jadi !',
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yakin !',
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            title: 'Terhapus !',
                            text: 'File berhasil dihapus.',
                            icon: 'success',
                            confirmButtonText: 'Sip',
                        });
                        main.removeNote(noteId);
                    }
                });
            });
        });

        const buttonUnArchive = document.querySelectorAll('.button-unarchive');

        buttonUnArchive.forEach((buttonU) => {
            buttonU.addEventListener('click', (event) => {
                const noteId = event.target.id;
                main.unArchiveNote(noteId);
            });
        });
    }
}

customElements.define('note-archive', NoteArchive);
