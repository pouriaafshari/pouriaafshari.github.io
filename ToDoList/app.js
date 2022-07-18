function ToDoInput()
    {
        document.getElementById('Add-Button').innerHTML +=
        '<input type="text" id="Input-Box" onkeypress="AddToList(event)">';

        document.getElementById("Add").style.animation = "Hide 0.5s 1";

        var inputbox = document.getElementById('Input-Box');
        inputbox.focus();
        inputbox.style.animation = "InputBoxAnimation 0.5s 1";
    }

    function AddToList(event) 
    {
        let AnimationID;

        if (event.keyCode === 13)
        {
            event.preventDefault();

            document.getElementById("Add").style.animation = "Show 0.5s 1";
            var inputbox = document.getElementById('Input-Box');
            inputbox.style.animation = "InputBoxHide 0.5s 1";
            inputbox.addEventListener('animationend', function() {
                inputbox.remove();
            });

            var Item = document.createElement("div");
            Item.setAttribute("class", "Element-Div");

            var DelButton = document.createElement("div");
            DelButton.setAttribute("class", "delete");
            Item.appendChild(DelButton);
            DelButton.onclick = function() 
            {
                Item.style.animation = "RemoveItemAnimation 1s 1";
                Item.addEventListener('animationend', function() {
                    Item.remove();
                });
            }

            var text = document.createElement("label");
            text.setAttribute("class", "Elements");
            text.innerText = document.getElementById('Input-Box').value;
            Item.appendChild(text);

            document.getElementById("Add-Button").before(Item);

            Item.style.animation = "NewItemAnimation 1s 1";
        }    
    }