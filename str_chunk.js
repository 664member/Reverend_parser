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
        for(let chunk of str_chunk(content,4000)){
            console.log(chunk.replace(/\n/g, ''));
            console.log('\n')
        }
      
    })
    .catch(error => {
      console.error(error);
    });


let str_chunk = (str,cs = 4000, beautyText = false)=>{
        let chunk_size = cs;
        let res = []
        if(str.length < cs){return [str]}
        if(!beautyText){
                res.push(str.slice(0,chunk_size))
                while(chunk_size<str.length){
                    res.push(str.slice(chunk_size,chunk_size+chunk_size))
                    chunk_size = chunk_size + chunk_size
                }
                return res
        }


        
        let find_index = (str , start, symbol = '.') => {
            let index;
            for(let i = start; i < str.length ; i++){
                    if(str[i] != symbol){
                            continue
                    }
                    index = start + i
                    break
            }
            return index
        }
     

}



