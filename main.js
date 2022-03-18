function myFunction(){
    var inputValue, input, li, i, a, ul;

     input = document.getElementById('search');
    inputValue = input.value.toUpperCase();

    ul = document.getElementById('menu');
    li = ul.getElementsByTagName('li');

    for(i = 0; i < li.length; i++){
        a = li[i].getElementsByTagName('a')[0];
        if(a.innerHTML.toUpperCase().indexOf(inputValue) > -1){
            li[i].style.display = '';
        }
        else{
            li[i].style.display = 'none';
        }

    }
}

























