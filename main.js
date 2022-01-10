for (let i = 1; i <= 3; i++) {
  let nick = prompt('ism')
  let age = prompt('yosh')
  const users = {
      'Foydalanuvchi':{
          name: nick,
          agee: age
      }
  }
  
  for (const key in users) {
     console.log((`${key}:${i} \n ismi:${users[key].name} \n yoshi:${users[key].agee}`));
  }
}

