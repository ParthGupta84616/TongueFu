export function fetchTwisterEnglish(level , language) {
  return new Promise(async (resolve) =>{
    
    console.log(`http://localhost:8000/TongueTwister${language}?category=${level}`)
    const response = await fetch(`http://localhost:8000/TongueTwister${language}?category=${level}`) 
    const data = await response.json()
    console.log({data})
    resolve({data})
  }
  );
}