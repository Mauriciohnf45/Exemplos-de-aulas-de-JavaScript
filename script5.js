const person = {fname:"Mauricio", Iname:"Henrique", age:19};

        let txt = "";
        for (let x in person) {
            txt += person[x] + " ";
        }
            
     console.log(txt)