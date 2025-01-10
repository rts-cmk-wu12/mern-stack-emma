export default function NewPage() {

    function submitHandler(event) {
        event.preventDefault();
        
        const form = event.target;
        const formData = new FormData(form);
        const formDataObject = Object.fromEntries(formData.entries());

        const fetchOptions = {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formDataObject)
        }

        //console.log(formDataObject);
        const response = fetch('/api/posts', fetchOptions);
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <input type="text" name="title" placeholder="Title..." />
                <input type="date" name='published' />
                <textarea name="text" placeholder="Message...">

                </textarea>
                <input type="submit" value="Send" />
            </form>
        </>
    )
}