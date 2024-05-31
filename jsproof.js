/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/



// create a variable to hold your NFT's
const nfts = [];

// Function mintNFT() to store data into nfts;
function mintNft(name,age, height,country, weight){

    // Here we create object to get data
    const data = {
        user_name: name,
        user_age: age,
        user_height: height,
        user_country: country,
        user_weight: weight
        
    };

    // push data in nfts
    nfts.push(data);
}

// Function listNFTs() to display data present in nfts
function listNfts(){
    
    // Using for loop to iterate through array
    for(let i=0;i<nfts.length;i++){
        console.log("User:", i+1);
        console.log("User name:", nfts[i].user_name);
        console.log("User age:", nfts[i].user_age, "years");
        console.log("User height:", nfts[i].user_height, "cm");
        console.log("User country:", nfts[i].user_country);
        console.log("User weight:", nfts[i].user_weight, "kg");
        console.log();
    }
}

// Function getTotalSupply() to calculate total no of user created in nfts
function getTotalSupply(){
    return nfts.length;
}

// Calling mintNft function
mintNft("Armaan", 20, 190, "India", 75);
mintNft("Chirag", 22, 178, "UK", 70);
mintNft("Kanak",  20, 180, "America", 50);
mintNft("Jashan", 23, 195, "USA", 90);
mintNft("Kashish", 21, 135,"China", 45);
mintNft("Itika", 21, 170, "Australia",65)

// Calling listNfts function to display the data
listNfts();

// Calling getTotalSupply() function to get the number of total suppies i.e. total number of users created
console.log("Total number of user created in nfts:", getTotalSupply());
