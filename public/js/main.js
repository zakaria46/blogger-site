function updateDeleteFunc(event) {
    /* Adding the show property from css using js so the input fields will appear even if they gEt hidden by the if condition */
    document.getElementById("updateDeleteFrm").children[1].setAttribute("id", "showInput");
    document.getElementById("updateDeleteFrm").children[2].setAttribute("id", "showInput");

    // setting the action attribute to update in case the script triggers a change
    document.getElementById("updateDeleteFrm").setAttribute("action", "/update")
    
    /* NOTE the update Modal for update is the same for the delete only difference we will use js to modify it for the delete feature */

    let postItem = event.target.parentElement;

    let titleToBeUpdated = postItem.children[0].textContent;//title
    let paraToBeUpdated = postItem.children[1].textContent;//paragraph
    let indexOfPost = postItem.children[2].textContent;//indexOfArray

    //////
    if (event.target.id === 'editBtn') {

        let h2 = document.getElementById('updateDeleteFrm').firstElementChild;
        h2.textContent = "Update Your Post !";

        // the form fields of the Update Modal
        let titleField = document.getElementById("updateDeleteFrm").children[1];
        let paraField = document.getElementById("updateDeleteFrm").children[2];
        let indexField = document.getElementById("updateDeleteFrm").children[3];

        titleField.value = titleToBeUpdated;
        paraField.value = paraToBeUpdated;
        indexField.value = indexOfPost;

    } else if (event.target.id === 'deleteBtn') {
        // setting the action attr to /delete
        document.getElementById("updateDeleteFrm").setAttribute("action", "/delete");

        let h2 = document.getElementById('updateDeleteFrm').firstElementChild;
        h2.textContent = "Are You Sure You Want To Delete This Post ?";

        // The form fields for the Delete Modal
        let indexField = document.getElementById("updateDeleteFrm").children[3];

        // Hide the first two fields of title and paragraph
        document.getElementById("updateDeleteFrm").children[1].setAttribute("id", "hideInput");
        document.getElementById("updateDeleteFrm").children[2].setAttribute("id", "hideInput");

        indexField.value = indexOfPost;

    }
}
