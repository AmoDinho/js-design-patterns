const Solider = (rank,battles,divison)=>{
  
  const toString = () => `This Solider has fought in ${battles} at ${rank} in ${divison}`

  return toString()
}

const private = Solider("Private", 30,"1st Airborn")

console.log(private.toString())