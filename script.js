const todo = document.getElementById('todo');

        // Fitur TODO:
        // 1. Menambahkan data
        // 2. Mencoret kalau sudah selesai
        // 3. Menghapus


        function add(){
            //1. ambil nilai dari textnya
            let newText = document.getElementById('new_text');
            console.info(newText.value);

            //2. tambahkan list baru ke dalam ul
            let newTodo = "<li> <span onclick='toggle(this)'>" + newText.value +
                                "</span>" + "<span onclick='removeItem(this)'> [x] </span>" +
                          "</li>";

            todo.insertAdjacentHTML('afterbegin', newTodo);

            //kosongkan fieldnya
            newText.value = "";
        }

        function toggle(el){
            el.classList.toggle('done');
        }

        function removeItem(el){
            el.parentElement.remove();
        }