let pakistan = {
  mountains: ['Everest', 'K2', 'Karaquram'],
  printWithDash: function(){
    console.log(this.mountains.join(' - '));
  }
}

//pakistan.mountains;
pakistan.printWithDash();

/////////// OR //////////


let pakistan = {
  mountains: ['Everest', 'K2', 'Karaquram'],
  printWithDash: function(){
    setTimeout(()=> console.log(this.mountains.join(' - ')), 100);
  }
}
pakistan.printWithDash();