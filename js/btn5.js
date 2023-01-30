
var btn8 = document.getElementById('btn8')
var btn9 = document.getElementById('btn9')
var btn10 = document.getElementById('btn10')
var btn31 = document.getElementById('btn31')
var btn34 = document.getElementById('btn34')
var btn36 = document.getElementById('btn36')
var mobbtn8 = document.getElementById('mob-btn8')
var mobbtn9 = document.getElementById('mob-btn9')
var mobbtn10 = document.getElementById('mob-btn10')
var mobbtn31 = document.getElementById('mob-btn31')
var mobbtn34 = document.getElementById('mob-btn34')
var mobbtn36 = document.getElementById('mob-btn36')
var rightbox = document.getElementById('right-box')
var heading1 = document.getElementById('heading1')
var heading2 = document.getElementById('heading2')
var heading3 = document.getElementById('heading3')
var heading4 = document.getElementById('heading4')
var img1 = document.getElementById('img1')
var img2 = document.getElementById('img2')
var img3 = document.getElementById('img3')
var img4 = document.getElementById('img4')
var p1 = document.getElementById('p1')
var p2 = document.getElementById('p2')
var p3 = document.getElementById('p3')
var p4 = document.getElementById('p4')
var sos1 = document.getElementById('sos-btn1')
var sos2 = document.getElementById('sos-btn2')
var sos3 = document.getElementById('sos-btn3')
var sosHead = document.getElementById('sos-heading')
var sosImg = document.getElementById('sos-img')
var para = document.getElementById('para2')

btn8.addEventListener('click',()=>{
    btn8.classList.add('active')
    btn9.classList.remove('active')
    btn10.classList.remove('active')
    btn31.classList.remove('active')
    btn34.classList.remove('active') 
    btn36.classList.remove('active') 
    heading2.innerHTML = "RTO Consultation "
    img2.src = "image/icons/Icons8.png"
    p2.innerHTML = "RTO consultation is available for the driver to provide every RTO facilities providing   help for licence problem, Vehicle paper and Document problem anytime on the Highway."
})
btn9.addEventListener('click',()=>{
    btn8.classList.remove('active')
    btn9.classList.add('active')
    btn10.classList.remove('active') 
    btn31.classList.remove('active')
    btn34.classList.remove('active') 
    btn36.classList.remove('active')    
    heading2.innerHTML = "Legal Consultation"
    img2.src = "image/icons/Icons9.png"
    p2.innerHTML = "Legal consultation is available to help out driver to get paper back from the police or any authority that seized the Driver's documents."
})
btn10.addEventListener('click',()=>{
    btn8.classList.remove('active')
    btn9.classList.remove('active')
    btn10.classList.add('active') 
    btn31.classList.remove('active') 
    btn34.classList.remove('active') 
    btn36.classList.remove('active') 
    heading2.innerHTML = "Ambulance facilities"
    img2.src = "image/icons/Icons10.png"
    p2.innerHTML = "The best in class ambulance facilities with a faster and secure help to avoid and prevent every highway misfortune."
})
btn31.addEventListener('click',()=>{
    btn8.classList.remove('active')
    btn9.classList.remove('active')
    btn10.classList.remove('active') 
    btn31.classList.add('active') 
    btn34.classList.remove('active') 
    btn36.classList.remove('active') 
    heading2.innerHTML = "Crane"
    img2.src = "image/icons/Icons31.png"
    p2.innerHTML = "To mantain the best safety of your vehicle. Crane service is available to help you out when the vehicle breakdowns to remove every hurdles coming your way"
})

btn34.addEventListener('click',()=>{
    btn8.classList.remove('active')
    btn9.classList.remove('active')
    btn10.classList.remove('active') 
    btn31.classList.remove('active') 
    btn34.classList.add('active') 
    btn36.classList.remove('active') 
    heading2.innerHTML = "Spare Parts"
    img2.src = "image/icons/Icons34.png"
    p2.innerHTML = "To prevent and avoid any hurdles we are available to provide you a good spare part service to ensure a smooth and better journey."
})
btn36.addEventListener('click',()=>{
    btn8.classList.remove('active')
    btn9.classList.remove('active')
    btn10.classList.remove('active') 
    btn31.classList.remove('active')
    btn34.classList.remove('active') 
    btn36.classList.add('active') 
    heading2.innerHTML = "Insurance Survey Support"
    img2.src = "image/icons/Icons36.png"
    p2.innerHTML = "Insurance survey support: Providing you the  insurance support to ensure the best safety of the vehicle and the User and to prevent every misfortune faced in Indian Highways."
})
mobbtn8.addEventListener('click',()=>{
    mobbtn8.classList.add('active')
    mobbtn9.classList.remove('active')
    mobbtn10.classList.remove('active')
    mobbtn31.classList.remove('active')
    mobbtn34.classList.remove('active') 
    mobbtn36.classList.remove('active') 
    heading2.innerHTML = "RTO Consultation "
    img2.src = "image/icons/Icons8.png"
    p2.innerHTML = "RTO consultation is available for the driver to provide every RTO facilities providing   help for licence problem, Vehicle paper and Document problem anytime on the Highway."
})
mobbtn9.addEventListener('click',()=>{
    mobbtn8.classList.remove('active')
    mobbtn9.classList.add('active')
    mobbtn10.classList.remove('active') 
    mobbtn31.classList.remove('active')
    mobbtn34.classList.remove('active') 
    mobbtn36.classList.remove('active')    
    heading2.innerHTML = "Legal Consultation"
    img2.src = "image/icons/Icons9.png"
    p2.innerHTML = "Legal consultation is available to help out driver to get paper back from the police or any authority that seized the Driver's documents."
})
mobbtn10.addEventListener('click',()=>{
    mobbtn8.classList.remove('active')
    mobbtn9.classList.remove('active')
    mobbtn10.classList.add('active') 
    mobbtn31.classList.remove('active') 
    mobbtn34.classList.remove('active') 
    mobbtn36.classList.remove('active') 
    heading2.innerHTML = "Ambulance facilities"
    img2.src = "image/icons/Icons10.png"
    p2.innerHTML = "The best in class ambulance facilities with a faster and secure help to avoid and prevent every highway misfortune."
})
mobbtn31.addEventListener('click',()=>{
    mobbtn8.classList.remove('active')
    mobbtn9.classList.remove('active')
    mobbtn10.classList.remove('active') 
    mobbtn31.classList.add('active') 
    mobbtn34.classList.remove('active') 
    mobbtn36.classList.remove('active') 
    heading2.innerHTML = "Crane"
    img2.src = "image/icons/Icons31.png"
    p2.innerHTML = "To mantain the best safety of your vehicle. Crane service is available to help you out when the vehicle breakdowns to remove every hurdles coming your way"
})

mobbtn34.addEventListener('click',()=>{
    mobbtn8.classList.remove('active')
    mobbtn9.classList.remove('active')
    mobbtn10.classList.remove('active') 
    mobbtn31.classList.remove('active') 
    mobbtn34.classList.add('active') 
    mobbtn36.classList.remove('active') 
    heading2.innerHTML = "Spare Parts"
    img2.src = "image/icons/Icons34.png"
    p2.innerHTML = "To prevent and avoid any hurdles we are available to provide you a good spare part service to ensure a smooth and better journey."
})
mobbtn36.addEventListener('click',()=>{
    mobbtn8.classList.remove('active')
    mobbtn9.classList.remove('active')
    mobbtn10.classList.remove('active') 
    mobbtn31.classList.remove('active')
    mobbtn34.classList.remove('active') 
    mobbtn36.classList.add('active') 
    heading2.innerHTML = "Insurance Survey Support"
    img2.src = "image/icons/Icons36.png"
    p2.innerHTML = "Insurance survey support: Providing you the  insurance support to ensure the best safety of the vehicle and the User and to prevent every misfortune faced in Indian Highways."
})
sos1.addEventListener('click',()=>{
    sos1.classList.add('active4')
    sos2.classList.remove('active4')
    sos3.classList.remove('active4')
    sosImg.src = "image/scene1.gif"
    sosHead.innerHTML = "Open RIYO App"
    para.innerHTML = "After Enabling the location on RIYO app And go to the SOS Emergency Option"
})
sos2.addEventListener('click',()=>{
    sos1.classList.remove('active4')
    sos2.classList.add('active4')
    sos3.classList.remove('active4')
    sosImg.src = "image/scene2.gif"
    sosHead.innerHTML = "Click on SOS"
    para.innerHTML = "Click the SOS Button so that our Team can recognise the location."
})
sos3.addEventListener('click',()=>{
    sos1.classList.remove('active4')
    sos2.classList.remove('active4')
    sos3.classList.add('active4')
    sosImg.src = "image/scene3.gif"
    sosHead.innerHTML = "Relax and Don’t Panic"
    para.innerHTML = "Help is on its way till than don’t panic And relax we have got your back"
})