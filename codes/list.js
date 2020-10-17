var box = document.createElement('div');
box.setAttribute('class', 'outer-box');
document.body.appendChild(box);
var heading = document.createElement('div');
heading.setAttribute('class', 'list-title');
heading.innerHTML = 'My to-do-list'; 
var listDay = document.createElement('input');
listDay.setAttribute('placeholder', 'Day');
listDay.setAttribute('class', 'date');
var listMonth = document.createElement('input');
listMonth.setAttribute('placeholder', 'month');
listMonth.setAttribute('class', 'date');
var listYear = document.createElement('input');
listYear.setAttribute('placeholder', 'year');
listYear.setAttribute('class', 'date');
var listBody = document.createElement('div');
listBody.setAttribute('class', 'list-body');
heading.appendChild(listDay);
heading.appendChild(listMonth);
heading.appendChild(listYear);
box.appendChild(heading);
box.appendChild(listBody);

function Mylist(){
  this.content = document.createElement('span');
  this.content.setAttribute('class', 'content-box');
  this.arrange = document.createElement('ol');
  this.arrange.setAttribute('type', 'number');
  this.item = document.createElement('textarea');
  this.item.setAttribute('class', 'text-list');
  this.listHour = document.createElement('input');
  this.listHour.setAttribute('placeholder', 'hour');
  this.listHour.setAttribute('class', 'time');
  this.listMin = document.createElement('input');
  this.listMin.setAttribute('placeholder', 'min');
  this.listMin.setAttribute('class', 'time');
  this.setButton = document.createElement('button');
  this.setButton.setAttribute('class', 'set-button');
  this.setButton.innerHTML = 'Create';
  this.content.appendChild(this.arrange);
  this.arrange.appendChild(this.item);
  this.content.appendChild(this.item);
  this.content.appendChild(this.listHour);
  this.content.appendChild(this.listMin);
  this.content.appendChild(this.setButton);
  listBody.appendChild(this.content);
  
  var actual = this;
  this.setButton.addEventListener('click', () => {
    actual.present = new Date();
    var year = listYear.value;
    var month = listMonth.value;
    var day = listDay.value;
    var hour = actual.listHour.value;
    var min = actual.listMin.value;
    actual.listTime = new Date(year, month, day, hour, min);
    actual.convertTime = actual.present.getTime();
    actual.convertList = actual.listTime.getTime();
    actual.timeLeft = actual.convertList- actual.convertTime;
    if (actual.timeLeft > 1){
        another = new Mylist();
        actual.setButton.style.display = 'none';
        actual.check = document.createElement('input');
        actual.check.setAttribute('type', 'checkbox');
        actual.check.setAttribute('class', 'check');
        actual.content.appendChild(actual.check);
    } else{
      alert('Create one before another');
    }
    console.log(actual.listTime);
  });
}
start = new Mylist();