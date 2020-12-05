class Person {
    
    name = "Ashwani Kumar"
    names = ['Ashwani','Ashish','Rakesh'];
    
    getUserName(){
       return this.name
    }

    getAddress(){
        return personAddress.address
    }
// return an array with modification using spread & rest operator
    getAllUser(){
        let updatedNames = [...this.names,'Vishal','Kannu'] 
        let finalArray = updatedNames.map((name) => {
            return  'Mr.sdfs'+ name 
        });
        return finalArray
    }

}

const userAddress = {
    address : 'Noida'   
};

//copy object in mutable way
// const personAddress = userAddress; 

// copy object in immutable way
const personAddress = { 
    ...userAddress 
}

userAddress.address = 'Delhi1'

export default Person