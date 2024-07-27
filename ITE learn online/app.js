const firstinput = document.getElementById('first');
const secondinput = document.getElementById('second');
const clear = document.getElementById('AC');
const plusminus = document.getElementById('plusminus');
const divide = document.getElementById('divide');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const multiply = document.getElementById('multiply');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const minus = document.getElementById('minus');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const plus = document.getElementById('plus');
const zero = document.getElementById('zero');
const nth = document.getElementById('nthundred');
const point = document.getElementById('point');
const equals = document.getElementById('equals');
const firstinputp = document.getElementById('firstp');
const clearp = document.getElementById('ACp');
const plusminusp = document.getElementById('plusminusp');
const dividep = document.getElementById('dividep');
const sevenp = document.getElementById('sevenp');
const eightp = document.getElementById('eightp');
const ninep = document.getElementById('ninep');
const multiplyp = document.getElementById('multiplyp');
const fourp = document.getElementById('fourp');
const fivep = document.getElementById('fivep');
const sixp = document.getElementById('sixp');
const minusp = document.getElementById('minusp');
const onep = document.getElementById('onep');
const twop = document.getElementById('twop');
const threep = document.getElementById('threep');
const plusp = document.getElementById('plusp');
const zerop = document.getElementById('zerop');
const nthp = document.getElementById('nthundredp');
const pointp = document.getElementById('pointp');
const equalsp = document.getElementById('equalsp');
const firstinputt = document.getElementById('firstt');
const cleart = document.getElementById('ACt');
const plusminust = document.getElementById('plusminust');
const dividet = document.getElementById('dividet');
const sevent = document.getElementById('sevent');
const eightt = document.getElementById('eightt');
const ninet = document.getElementById('ninet');
const multiplyt = document.getElementById('multiplyt');
const fourt = document.getElementById('fourt');
const fivet = document.getElementById('fivet');
const sixt = document.getElementById('sixt');
const minust = document.getElementById('minust');
const onet = document.getElementById('onet');
const twot = document.getElementById('twot');
const threet = document.getElementById('threet');
const plust = document.getElementById('plust');
const zerot = document.getElementById('zerot');
const ntht = document.getElementById('nthundredt');
const pointt = document.getElementById('pointt');
const equalst = document.getElementById('equalst');
const firstinputd = document.getElementById('firstd');
const cleard = document.getElementById('ACd');
const plusminusd = document.getElementById('plusminusd');
const divided = document.getElementById('divided');
const sevend = document.getElementById('sevend');
const eightd = document.getElementById('eightd');
const nined = document.getElementById('nined');
const multiplyd = document.getElementById('multiplyd');
const fourd = document.getElementById('fourd');
const fived = document.getElementById('fived');
const sixd = document.getElementById('sixd');
const minusd = document.getElementById('minusd');
const oned = document.getElementById('oned');
const twod = document.getElementById('twod');
const threed = document.getElementById('threed');
const plusd = document.getElementById('plusd');
const zerod = document.getElementById('zerod');
const nthd = document.getElementById('nthundredd');
const pointd = document.getElementById('pointd');
const equalsd = document.getElementById('equalsd');
const firstinputm = document.getElementById('firstm');
const secondinputm = document.getElementById('secondm');
const clearm = document.getElementById('ACm');
const plusminusm = document.getElementById('plusminusm');
const dividem = document.getElementById('dividem');
const sevenm = document.getElementById('sevenm');
const eightm = document.getElementById('eightm');
const ninem = document.getElementById('ninem');
const multiplym = document.getElementById('multiplym');
const fourm = document.getElementById('fourm');
const fivem = document.getElementById('fivem');
const sixm = document.getElementById('sixm');
const minusm = document.getElementById('minusm');
const onem = document.getElementById('onem');
const twom = document.getElementById('twom');
const threem = document.getElementById('threem');
const plusm = document.getElementById('plusm');
const zerom = document.getElementById('zerom');
const nthm = document.getElementById('nthundredm');
const pointm = document.getElementById('pointm');
const equalsm = document.getElementById('equalsm');
const aqueried = document.querySelector('.a');
const bqueried = document.querySelector('.b');
const cqueried = document.querySelector('.c');
const dqueried = document.querySelector('.d');
const equeried = document.querySelector('.e');
clear.addEventListener('click' ,()=>{
    firstinput.value = ''
    firstinputp.value =''
    firstinputd.value = ''
    firstinputt.value =''
    firstinputm.value = ''
    aqueried.style.display = 'block'
    bqueried.style.display = 'none'
    cqueried.style.display = 'none'
    dqueried.style.display = 'none'
    equeried.style.display = 'none'
});
clearp.addEventListener('click' ,()=>{
    firstinput.value = ''
    firstinputp.value =''
    firstinputd.value = ''
    firstinputt.value =''
    firstinputm.value = ''
    aqueried.style.display = 'block'
    bqueried.style.display = 'none'
    cqueried.style.display = 'none'
    dqueried.style.display = 'none'
    equeried.style.display = 'none'
});
one.addEventListener('click', () => {
    firstinput.value += one.innerText
})
onep.addEventListener('click', () => {
    firstinputp.value += onep.innerText
})
onem.addEventListener('click', () => {
    firstinputm.value += onem.innerText
})
two.addEventListener('click', () => {
    firstinput.value += two.innerText
})
twop.addEventListener('click', () => {
    firstinputp.value += twop.innerText
})
twom.addEventListener('click', () => {
    firstinputm.value += twom.innerText
})
three.addEventListener('click', () => {
    firstinput.value += three.innerText
})
threem.addEventListener('click', () => {
    firstinputm.value += threem.innerText
})
threep.addEventListener('click', () => {
    firstinputp.value += threep.innerText
})
four.addEventListener('click', () => {
    firstinput.value += four.innerText
})
fourm.addEventListener('click', () => {
    firstinputm.value += fourm.innerText
})
fourp.addEventListener('click', () => {
    firstinputp.value += fourp.innerText
})
five.addEventListener('click', () => {
    firstinput.value += five.innerText
})
fivem.addEventListener('click', () => {
    firstinputm.value += fivem.innerText
})
fivep.addEventListener('click', () => {
    firstinputp.value += fivep.innerText
})
six.addEventListener('click', () => {
    firstinput.value += six.innerText
})
sixm.addEventListener('click', () => {
    firstinputm.value += sixm.innerText
})
sixp.addEventListener('click', () => {
    firstinputp.value += sixp.innerText
})
seven.addEventListener('click', () => {
    firstinput.value += seven.innerText
})
sevenm.addEventListener('click', () => {
    firstinputm.value += sevenm.innerText
})
sevenp.addEventListener('click', () => {
    firstinputp.value += sevenp.innerText
})
eight.addEventListener('click', () => {
    firstinput.value += eight.innerText
})
eightm.addEventListener('click', () => {
    firstinputm.value += eightm.innerText
})
eightp.addEventListener('click', () => {
    firstinputp.value += eightp.innerText
})
nine.addEventListener('click', () => {
    firstinput.value += nine.innerText
})
ninem.addEventListener('click', () => {
    firstinputm.value += ninem.innerText
})
ninep.addEventListener('click', () => {
    firstinputp.value += ninep.innerText
})
zero.addEventListener('click', () => {
    firstinput.value += zero.innerText
})
zerom.addEventListener('click', () => {
    firstinputm.value += zerom.innerText
})
zerop.addEventListener('click', () => {
    firstinputp.value += zerop.innerText
})
plus.addEventListener('click', () => {
    aqueried.style.display = 'none'
    bqueried.style.display = 'block'
})
minus.addEventListener('click', () =>{
    aqueried.style.display = 'none'
    equeried.style.display = 'block'
})
multiply.addEventListener('click', () =>{
    aqueried.style.display = 'none'
    cqueried.style.display = 'block'
})
divide.addEventListener('click', () =>{
    aqueried.style.display = 'none'
    dqueried.style.display = 'block'
})
equalsp.addEventListener('click', () => {
    const input1 = parseFloat(firstinput.value);
    const input2 = parseFloat(firstinputp.value);
    let addup = input1 + input2;
    firstinput.value = addup;
    aqueried.style.display = 'block'
    bqueried.style.display = 'none'
    firstinputd.value = ''
    firstinputm.value = ''
    firstinputp.value = ''
    firstinputt.value = ''
})
equals.addEventListener('click', () => {
    firstinputd.value = ''
    firstinputm.value = ''
    firstinputp.value = ''
    firstinputt.value = ''
})

cleart.addEventListener('click' ,()=>{
    firstinput.value = ''
    firstinputp.value =''
    firstinputd.value = ''
    firstinputt.value =''
    firstinputm.value = ''
    aqueried.style.display = 'block'
    bqueried.style.display = 'none'
    cqueried.style.display = 'none'
    dqueried.style.display = 'none'
    equeried.style.display = 'none'
});
cleard.addEventListener('click' ,()=>{
    firstinput.value = ''
    firstinputp.value =''
    firstinputd.value = ''
    firstinputt.value =''
    firstinputm.value = ''
    aqueried.style.display = 'block'
    bqueried.style.display = 'none'
    cqueried.style.display = 'none'
    dqueried.style.display = 'none'
    equeried.style.display = 'none'
});
onet.addEventListener('click', () => {
    firstinputt.value += onet.innerText
})
oned.addEventListener('click', () => {
    firstinputd.value += oned.innerText
})
twot.addEventListener('click', () => {
    firstinputt.value += twot.innerText
})
twod.addEventListener('click', () => {
    firstinputd.value += twod.innerText
})
threet.addEventListener('click', () => {
    firstinputt.value += threet.innerText
})
threed.addEventListener('click', () => {
    firstinputd.value += threed.innerText
})
fourt.addEventListener('click', () => {
    firstinputt.value += fourt.innerText
})
fourd.addEventListener('click', () => {
    firstinputd.value += fourd.innerText
})
fivet.addEventListener('click', () => {
    firstinputt.value += fivet.innerText
})
fived.addEventListener('click', () => {
    firstinputd.value += fived.innerText
})
sixt.addEventListener('click', () => {
    firstinputt.value += sixt.innerText
})
sixd.addEventListener('click', () => {
    firstinputd.value += sixd.innerText
})
sevent.addEventListener('click', () => {
    firstinputt.value += sevent.innerText
})
sevend.addEventListener('click', () => {
    firstinputd.value += sevend.innerText
})
eightt.addEventListener('click', () => {
    firstinputt.value += eight.innerText
})
eightd.addEventListener('click', () => {
    firstinputd.value += eightd.innerText
})
ninet.addEventListener('click', () => {
    firstinputt.value += ninet.innerText
})
nined.addEventListener('click', () => {
    firstinputd.value += nined.innerText
})
zerot.addEventListener('click', () => {
    firstinputt.value += zerot.innerText
})
zerod.addEventListener('click', () => {
    firstinputd.value += zerod.innerText
})
equalst.addEventListener('click', () => {
    const input1 = parseFloat(firstinput.value);
    const input2 = parseFloat(firstinputt.value);
    let timesup = input1 * input2;
    firstinput.value = timesup;
    aqueried.style.display = 'block'
    cqueried.style.display = 'none'
    firstinputd.value = ''
    firstinputm.value = ''
    firstinputp.value = ''
    firstinputt.value = ''
})
equalsd.addEventListener('click', () => {
    const input1 = parseFloat(firstinput.value);
    const input2 = parseFloat(firstinputd.value);
    let divideup = input1 / input2;
    firstinput.value = divideup;
    aqueried.style.display = 'block'
    dqueried.style.display = 'none'
    firstinputd.value = ''
    firstinputm.value = ''
    firstinputp.value = ''
    firstinputt.value = ''
})
equalsm.addEventListener('click', () => {
    const input1 = parseFloat(firstinput.value);
    const input2 = parseFloat(firstinputm.value);
    let minusup = input1 - input2;
    firstinput.value = minusup;
    aqueried.style.display = 'block'
    equeried.style.display = 'none'
    firstinputd.value = ''
    firstinputm.value = ''
    firstinputp.value = ''
    firstinputt.value = ''
})
clearm.addEventListener('click', () => {
    firstinput.value = ''
    firstinputp.value =''
    firstinputd.value = ''
    firstinputt.value =''
    firstinputm.value = ''
    aqueried.style.display = 'block'
    bqueried.style.display = 'none'
    cqueried.style.display = 'none'
    dqueried.style.display = 'none'
    equeried.style.display = 'none'
})
point.addEventListener('click', () => {
    firstinput.value += point.innerText;
})
pointt.addEventListener('click', () => {
    firstinputt.value += point.innerText;
})
pointm.addEventListener('click', () => {
    firstinputm.value += point.innerText;
})
pointp.addEventListener('click', () => {
    firstinputp.value += point.innerText;
})
pointd.addEventListener('click', () => {
    firstinputd.value += point.innerText;
})
nth.addEventListener('click', () => {
    firstinput.value += nth.innerText;
})
ntht.addEventListener('click', () => {
    firstinputt.value += nth.innerText;
})
nthm.addEventListener('click', () => {
    firstinputm.value += nth.innerText;
})
nthp.addEventListener('click', () => {
    firstinputp.value += nth.innerText;
})
nthd.addEventListener('click', () => {
    firstinputd.value += nth.innerText;
})
