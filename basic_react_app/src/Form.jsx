function handleOnSubmit(event){
    event.preventDefault();
    console.log("Form is submitted succesfully!");
}

export default function Form(){
    return(
        <form action="">
            <input type="text" placeholder="Type smth here..."/>
            <input type="submit" onClick={handleOnSubmit} />
        </form>
    );
}