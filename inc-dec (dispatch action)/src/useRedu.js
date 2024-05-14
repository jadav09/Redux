let x = {num:1}

export let useRedu = (s=x.num,a)=>{

   switch(a.type)
   {
    case "i" : return s+1
    case "d" : return s+1
    default : return s
   }
}

