const allbtn = document.getElementById('all-btn');
const reccomendbtn = document.getElementById('recommend-btn');
const coastalbtn = document.getElementById('coastal-btn');
const historicalbtn = document.getElementById('historical-btn');
const savaribtn = document.getElementById('savari-btn');
allbtn.onclick = function() {
    // document.querySelector('.all').style.display = 'block';
    document.getElementById('rec_h1').style.fontSize = '1.5rem';
    document.getElementById('coas_h1').style.fontSize = '1.5rem';
    document.getElementById('his_h1').style.fontSize = '1.5rem';
    document.getElementById('sav_h1').style.fontSize = '1.5rem';
    document.getElementById('recommend').style.display = 'flex';
    document.getElementById('coastal').style.display = 'flex';
    document.getElementById('historical').style.display = 'flex';
    document.getElementById('savari').style.display = 'flex';
}
reccomendbtn.onclick = function() {
    document.getElementById('rec_h1').style.fontSize = '1.5rem';
    document.getElementById('coas_h1').style.fontSize = '1rem';
    document.getElementById('his_h1').style.fontSize = '1rem';
    document.getElementById('sav_h1').style.fontSize = '1rem';
    document.getElementById('recommend').style.display = 'flex';
    document.getElementById('coastal').style.display = 'none';
    document.getElementById('historical').style.display = 'none';
    document.getElementById('savari').style.display = 'none';
}
coastalbtn.onclick = function() {
    document.getElementById('rec_h1').style.fontSize = '1rem';
    document.getElementById('coas_h1').style.fontSize = '1.5rem';
    document.getElementById('his_h1').style.fontSize = '1rem';
    document.getElementById('sav_h1').style.fontSize = '1rem';
    document.getElementById('recommend').style.display = 'none';
    document.getElementById('coastal').style.display = 'flex';
    document.getElementById('historical').style.display = 'none';
    document.getElementById('savari').style.display = 'none';
}
historicalbtn.onclick = function() {
    document.getElementById('rec_h1').style.fontSize = '1rem';
    document.getElementById('coas_h1').style.fontSize = '1rem';
    document.getElementById('his_h1').style.fontSize = '1.5rem';
    document.getElementById('sav_h1').style.fontSize = '1rem';
    document.getElementById('recommend').style.display = 'none';
    document.getElementById('coastal').style.display = 'none';
    document.getElementById('historical').style.display = 'flex';
    document.getElementById('savari').style.display = 'none';
}
savaribtn.onclick = function() {
    document.getElementById('rec_h1').style.fontSize = '1rem';
    document.getElementById('coas_h1').style.fontSize = '1rem';
    document.getElementById('his_h1').style.fontSize = '1rem';
    document.getElementById('sav_h1').style.fontSize = '1.5rem';
    document.getElementById('recommend').style.display = 'none';
    document.getElementById('coastal').style.display = 'none';
    document.getElementById('historical').style.display = 'none';
    document.getElementById('savari').style.display = 'flex';
}