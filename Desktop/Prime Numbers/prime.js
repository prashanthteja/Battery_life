function prime(n) {


if( n === 0) {

  return false ;
}
else if (n === 1){
  return false
}
else {

  for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;

}


}

prime(4);
