import fs from 'fs'


function getChapterContent() {
    return new Promise((resolve, reject) => {
      fs.readFile('Chapter 9.txt', 'utf-8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
  
  // Пример использования функции
  getChapterContent()
    .then(content => {
      console.log(str_chunk(content,4000));
    })
    .catch(error => {
      console.error(error);
    });
let str_chunk = (str,cs = 4000)=>{
    let chunk_size = cs;
    let res = []
    res.push(str.slice(0,chunk_size))
    while(chunk_size<str.length){
        res.push(str.slice(chunk_size,chunk_size+chunk_size))
        chunk_size = chunk_size + chunk_size
    }
    return res
}



