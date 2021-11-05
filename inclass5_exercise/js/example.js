// ADD NEW ITEM TO END OF LIST
var ul = document.querySelector('ul');
var new_li = document.createElement('li');
new_li.append(document.createTextNode('cream'));
ul.append(new_li);

// ADD NEW ITEM START OF LIST

var new_top_li = document.createElement('li');
new_top_li.append(document.createTextNode('kale'));
var first_child = document.querySelector('li');
ul.insertBefore(new_top_li,first_child);


// ADD A CLASS OF COOL TO ALL LIST ITEMS
var cool = document.getElementsByTagName('li');
for(let i = 0;i<cool.length;i++){
cool[i].setAttribute('class','cool');
}
// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var li_items = document.getElementsByTagName('li');
var num_of_li = li_items.length;
var h2 = document.querySelector('h2');
h2.innerHTML+=" " + "<strong>"+num_of_li+"</strong>";