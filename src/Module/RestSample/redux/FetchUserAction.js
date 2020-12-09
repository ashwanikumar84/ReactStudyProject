export const getUsers = (props) =>{
    const apiUrl = 'http://jsonplaceholder.typicode.com/users'
    // console.log(props)
    // alert(props)

    return(

        fetch(apiUrl)
        .then((res) => res.json())
        .then(data =>  
            data =({
                isLoading : false,
                message : "Loading Completed",
                reponse: data
            })
        
            // console.log('Error'+payload)
            //  this.state({
            //     isLoading : false,
            //     message : "Loading Completed",
            //     reponse: data
            // })
        )//.catch(console.log('Error'))
    )
}