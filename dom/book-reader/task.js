const book = document.getElementById("book");
const fontSize = book.querySelector(".book__control_font-size").classList[1];
const textColor = book.querySelector(".book__control_color").classList[1];
const bgColor = book.querySelector(".book__control_background").classList[1];

function modeControl(container, activeBlock, activeLink, activeBook, prefix, atribute) {
    book.addEventListener("click", (e) => {
        e.preventDefault();

        const eAtribute = e.target.dataset;
        const eBlock = e.target.closest(`.${activeBlock}`);
        const title = e.target.className === "color__title";

        if (eAtribute && eBlock && !title) {
            e.target.closest(`.${activeBlock}`).querySelector(`.${activeLink}`).classList.remove(activeLink);
            e.target.classList.add(activeLink);
            container.classList.remove(...activeBook);
            container.classList.add(`${prefix}-` + e.target.dataset[atribute])
        }
    })
}

modeControl(book, fontSize, "font-size_active", ["book_fs-big", "book_fs-small"], "book_fs", "size");
modeControl(book, textColor, "color_active", ["book_color-gray", "book_color-whitesmoke", "book_color-black"], "book_color", "textColor");
modeControl(book, bgColor, "color_active", ["book_bg-gray", "book_bg-black", "book_bg-white"], "book_bg", "bgColor");