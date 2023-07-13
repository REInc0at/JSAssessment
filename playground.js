/* 
Crafter - Marielle D. Lapeña

Metacrafters - Beginning Javascript

Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const varNFTs = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, eyeColor, hairColor, gender, shirtType, bling) {
    const objNFT = {
        "name": name,
        "eyeColor": eyeColor,
        "hairColor": hairColor,
        "gender": gender,
        "shirtType": shirtType,
        "bling": bling
    }

    varNFTs.push(objNFT);
    console.log("Minted: " + name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i = 0; i < varNFTs.length; i++){
        console.log("\nID: \t\t\t\t" + (i + 1)); //\n = new line ; \t = tab
        console.log("Name: \t\t\t" + varNFTs[i].name);
        console.log("Eye Color: \t" + varNFTs[i].eyeColor);
        console.log("Hair Color: " + varNFTs[i].hairColor);
        console.log("Gender: \t\t" + varNFTs[i].gender);
        console.log("Shirt Type: " + varNFTs[i].shirtType);
        console.log("Bling: \t\t\t" + varNFTs[i].bling);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal Supply: " + varNFTs.length);
}

// call your functions below this line
mintNFT("Adrian", "Blue", "Blonde", "Male", "Hoodie", "Gold Chain");
mintNFT("Jiselle", "Dark Brown", "Brown", "Female", "Blouse", "Silver Earrings");
mintNFT("Ace", "Green", "Light Brown", "Male", "Polo Shirt", "None");
mintNFT("Lucia", "Brown", "Black", "Female", "Longsleeve Shirt", "Rose gold Necklace");
listNFTs(); 
getTotalSupply();
