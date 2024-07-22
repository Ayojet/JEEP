const {zokou} =require("../framework/zokou");
const axios =require("axios");


zokou({ nomCom: "lyrics",
        reaction: "☘",
        categorie: "Search" }, async (dest, zk, commandeOptions) => {
    
    const { repondre, arg, ms } = commandeOptions;  
        
   try {

    if (!arg || arg.length === 0) return repondre("Where is the name of musique");

    let  result  = await axios.get(`https://vihangayt.me/search/lyrics?q=${arg.join(' ')}`);

    let lyrics = result.data.data;

    if (lyrics.error) return repondre("no lyrics found");

    let msg = `---------𝑩𝒖𝒈𝒂𝒕𝒕𝒊 𝒊𝒔 𝒇𝒊𝒏𝒅𝒊𝒏𝒈 𝒕𝒉𝒆 𝒍𝒚𝒓𝒊𝒄𝒔--------

* *Artist :* ${lyrics.artist}


* *Title :* ${lyrics.title}


${lyrics.lyrics}`

    zk.sendMessage(dest,{image : { url : './media/lyrics-img.jpg'} , caption : msg}, { quoted : ms });
    
   } catch (err) {
       repondre('Error')
   }
        })
