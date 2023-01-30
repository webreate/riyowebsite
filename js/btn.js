var btn1 = document.getElementById('btn1')
var btn2 = document.getElementById('btn2')
var btn3 = document.getElementById('btn3')
var btn4 = document.getElementById('btn4')
var btn5 = document.getElementById('btn5')
var btn6 = document.getElementById('btn6')
var btn7 = document.getElementById('btn7')
var mobbtn1 = document.getElementById('mob-btn1')
var mobbtn2 = document.getElementById('mob-btn2')
var mobbtn3 = document.getElementById('mob-btn3')
var mobbtn4 = document.getElementById('mob-btn4')
var mobbtn5 = document.getElementById('mob-btn5')
var mobbtn6 = document.getElementById('mob-btn6')
var mobbtn7 = document.getElementById('mob-btn7')
var btn8 = document.getElementById('btn8')
var btn9 = document.getElementById('btn9')
var btn10 = document.getElementById('btn10')
var mobbtn8 = document.getElementById('mob-btn8')
var mobbtn9 = document.getElementById('mob-btn9')
var mobbtn10 = document.getElementById('mob-btn10')
var btn11 = document.getElementById('btn11')
var btn12 = document.getElementById('btn12')
var mobbtn11 = document.getElementById('mob-btn11')
var mobbtn12 = document.getElementById('mob-btn12')
var btn13 = document.getElementById('btn13')
var btn14 = document.getElementById('btn14')
var btn15 = document.getElementById('btn15')
var btn16 = document.getElementById('btn16')
var btn17 = document.getElementById('btn17')
var btn18 = document.getElementById('btn18')
var btn19 = document.getElementById('btn19')
var btn20 = document.getElementById('btn20')
var mobbtn13 = document.getElementById('mob-btn13')
var mobbtn14 = document.getElementById('mob-btn14')
var mobbtn15 = document.getElementById('mob-btn15')
var mobbtn16 = document.getElementById('mob-btn16')
var mobbtn17 = document.getElementById('mob-btn17')
var mobbtn18 = document.getElementById('mob-btn18')
var mobbtn19 = document.getElementById('mob-btn19')
var mobbtn20 = document.getElementById('mob-btn20')
var btn31 = document.getElementById('btn31')
var btn32 = document.getElementById('btn32')
var btn33 = document.getElementById('btn33')
var btn34 = document.getElementById('btn34')
var btn35 = document.getElementById('btn35')
var sos1 = document.getElementById('sos-btn1')
var sos2 = document.getElementById('sos-btn2')
var sos3 = document.getElementById('sos-btn3')
var btn = document.getElementById('btn36')
var rightbox = document.getElementById('right-box')
var heading1 = document.getElementById('heading1')
var heading2 = document.getElementById('heading2')
var heading3 = document.getElementById('heading3')
var heading4 = document.getElementById('heading4')
var sosHead = document.getElementById('sos-heading')
var sosImg = document.getElementById('sos-img')
var para = document.getElementById('para2')
var img1 = document.getElementById('img1')
var img2 = document.getElementById('img2')
var img3 = document.getElementById('img3')
var img4 = document.getElementById('img4')
var p1 = document.getElementById('p1')
var p2 = document.getElementById('p2')
var p3 = document.getElementById('p3')
var p4 = document.getElementById('p4')
var details = document.querySelector(".show-details")

btn1.addEventListener('click', () => {
    btn1.classList.add('active')
    btn2.classList.remove('active')
    btn3.classList.remove('active')
    btn4.classList.remove('active')
    btn5.classList.remove('active')
    btn6.classList.remove('active')
    btn7.classList.remove('active')
    btn1.classList.remove('active3')
    btn2.classList.remove('active3')
    btn3.classList.remove('active3')
    heading1.innerHTML = "Healthcare Assistance"
    img1.src = "image/icons/Icons1.png"
    p1.innerHTML = "To provide a best healthcare service to ensure the proper health of every highway asset and to enhance and provide the best highway ecosystem with no disease."
})
btn2.addEventListener('click', () => {
    btn1.classList.remove('active')
    btn2.classList.add('active')
    btn3.classList.remove('active')
    btn4.classList.remove('active')
    btn5.classList.remove('active')
    btn6.classList.remove('active')
    btn7.classList.remove('active')
    btn1.classList.remove('active3')
    btn2.classList.remove('active3')
    btn3.classList.remove('active3')
    heading1.innerHTML = "Online Doctor Assistance"
    img1.src = "image/icons/Icons2.png"
    p1.innerHTML = "Online doctor consultation is provided to provide the best healthcare facility as much as possible."
})
btn3.addEventListener('click', () => {
    btn1.classList.remove('active')
    btn2.classList.remove('active')
    btn3.classList.add('active')
    btn4.classList.remove('active')
    btn5.classList.remove('active')
    btn6.classList.remove('active')
    btn7.classList.remove('active')
    btn1.classList.remove('active3')
    btn2.classList.remove('active3')
    btn3.classList.remove('active3')
    heading1.innerHTML = "HIV Test"
    img1.src = "image/icons/Icons3.png"
    p1.innerHTML = "HIV test is available, a single test per year to ensure good health of the driver."
})
btn4.addEventListener('click', () => {
    btn1.classList.remove('active')
    btn2.classList.remove('active')
    btn3.classList.remove('active')
    btn4.classList.add('active')
    btn5.classList.remove('active')
    btn6.classList.remove('active')
    btn7.classList.remove('active')
    heading1.innerHTML = "RTPCR Test"
    img1.src = "image/icons/Icons4.png"
    p1.innerHTML = "As COVID is inactive but not vanished. RIYO provides two RTPCR test per year."
})
btn5.addEventListener('click', () => {
    btn1.classList.remove('active')
    btn2.classList.remove('active')
    btn3.classList.remove('active')
    btn4.classList.remove('active')
    btn5.classList.add('active')
    btn6.classList.remove('active')
    btn7.classList.remove('active')
    heading1.innerHTML = "Oximeter"
    img1.src = "image/icons/Icons5.png"
    p1.innerHTML = "Oximeter is available for measuring spo2 level as a checkup to enhance the driver's health."
})
btn6.addEventListener('click', () => {
    btn1.classList.remove('active')
    btn2.classList.remove('active')
    btn3.classList.remove('active')
    btn4.classList.remove('active')
    btn5.classList.remove('active')
    btn6.classList.add('active')
    btn7.classList.remove('active')
    heading1.innerHTML = "Body Temperature Kit"
    img1.src = "image/icons/Icons6.png"
    p1.innerHTML = "Body temperature kit is available at every RIYO Point to ensure the first aid service to any driver who is feeling sick."
})
btn7.addEventListener('click', () => {
    btn1.classList.remove('active')
    btn2.classList.remove('active')
    btn3.classList.remove('active')
    btn4.classList.remove('active')
    btn5.classList.remove('active')
    btn6.classList.remove('active')
    btn7.classList.add('active')
    heading1.innerHTML = "Body Pressure Kit"
    img1.src = "image/icons/Icons7.png"
    p1.innerHTML = "Body Pressure kit is also available to ensure the proper Blood Pressure and a good health of the driver."
})
mobbtn1.addEventListener('click', () => {
    mobbtn1.classList.add('active')
    mobbtn2.classList.remove('active')
    mobbtn3.classList.remove('active')
    mobbtn4.classList.remove('active')
    mobbtn5.classList.remove('active')
    mobbtn6.classList.remove('active')
    mobbtn7.classList.remove('active')
    heading1.innerHTML = "Healthcare Assistance"
    img1.src = "image/icons/Icons1.png"
    p1.innerHTML = "Food is available in both Veg/Non-veg variety, available a single time. food include a wide range on Indian cuisine roti dal paneer is available for vegetarian and fish and egg for non vegetarians."
})
mobbtn2.addEventListener('click', () => {
    mobbtn1.classList.remove('active')
    mobbtn2.classList.add('active')
    mobbtn3.classList.remove('active')
    mobbtn4.classList.remove('active')
    mobbtn5.classList.remove('active')
    mobbtn6.classList.remove('active')
    mobbtn7.classList.remove('active')
    heading1.innerHTML = "Online Doctor Assistance"
    img1.src = "image/icons/Icons2.png"
    p1.innerHTML = "Online doctor consultation is provided to provide the best healthcare facility as much as possible."
})
mobbtn3.addEventListener('click', () => {
    mobbtn1.classList.remove('active')
    mobbtn2.classList.remove('active')
    mobbtn3.classList.add('active')
    mobbtn4.classList.remove('active')
    mobbtn5.classList.remove('active')
    mobbtn6.classList.remove('active')
    mobbtn7.classList.remove('active')
    heading1.innerHTML = "HIV Test"
    img1.src = "image/icons/Icons3.png"
    p1.innerHTML = "HIV test is available, a single test per year to ensure good health of the driver."
})
mobbtn4.addEventListener('click', () => {
    mobbtn1.classList.remove('active')
    mobbtn2.classList.remove('active')
    mobbtn3.classList.remove('active')
    mobbtn4.classList.add('active')
    mobbtn5.classList.remove('active')
    mobbtn6.classList.remove('active')
    mobbtn7.classList.remove('active')
    heading1.innerHTML = "RTPCR Test"
    img1.src = "image/icons/Icons4.png"
    p1.innerHTML = "As COVID is inactive but not vanished. RIYO provides two RTPCR test per year."
})
mobbtn5.addEventListener('click', () => {
    mobbtn1.classList.remove('active')
    mobbtn2.classList.remove('active')
    mobbtn3.classList.remove('active')
    mobbtn4.classList.remove('active')
    mobbtn5.classList.add('active')
    mobbtn6.classList.remove('active')
    mobbtn7.classList.remove('active')
    heading1.innerHTML = "Oximeter"
    img1.src = "image/icons/Icons5.png"
    p1.innerHTML = "Oximeter is available for measuring spo2 level as a checkup to enhance the driver's health."
})
mobbtn6.addEventListener('click', () => {
    mobbtn1.classList.remove('active')
    mobbtn2.classList.remove('active')
    mobbtn3.classList.remove('active')
    mobbtn4.classList.remove('active')
    mobbtn5.classList.remove('active')
    mobbtn6.classList.add('active')
    mobbtn7.classList.remove('active')
    heading1.innerHTML = "Body Temperature Kit"
    img1.src = "image/icons/Icons6.png"
    p1.innerHTML = "Body temperature kit is available at every RIYO Point to ensure the first aid service to any driver who is feeling sick."
})
mobbtn7.addEventListener('click', () => {
    mobbtn1.classList.remove('active')
    mobbtn2.classList.remove('active')
    mobbtn3.classList.remove('active')
    mobbtn4.classList.remove('active')
    mobbtn5.classList.remove('active')
    mobbtn6.classList.remove('active')
    mobbtn7.classList.add('active')
    heading1.innerHTML = "Body Pressure Kit"
    img1.src = "image/icons/Icons7.png"
    p1.innerHTML = "Body Pressure kit is also available to ensure the proper Blood Pressure and a good health of the driver."
})
btn8.addEventListener('click', () => {
    btn8.classList.add('active')
    btn9.classList.remove('active')
    btn10.classList.remove('active')
    heading2.innerHTML = "RTO Consultation "
    img2.src = "image/icons/Icons8.png"
    p2.innerHTML = "RTO consultation is available for the driver to provide every RTO facilities providing   help for licence problem, Vehicle paper and Document problem anytime on the Highway."
})
btn9.addEventListener('click', () => {
    btn8.classList.remove('active')
    btn9.classList.add('active')
    btn10.classList.remove('active')
    heading2.innerHTML = "Legal Consultation"
    img2.src = "image/icons/Icons9.png"
    p2.innerHTML = "Legal consultation is available to help out driver to get paper back from the police or any authority that seized the Driver's documents."
})
btn10.addEventListener('click', () => {
    btn8.classList.remove('active')
    btn9.classList.remove('active')
    btn10.classList.add('active')
    heading2.innerHTML = "Ambulance facilities"
    img2.src = "image/icons/Icons10.png"
    p2.innerHTML = "The best in class ambulance facilities with a faster and secure help to avoid and prevent every highway misfortune."
})
mobbtn8.addEventListener('click', () => {
    mobbtn8.classList.add('active')
    mobbtn9.classList.remove('active')
    mobbtn10.classList.remove('active')
    heading2.innerHTML = "RTO Consultation "
    img2.src = "image/icons/Icons8.png"
    p2.innerHTML = "RTO consultation is available for the driver to provide every RTO facilities providing   help for licence problem, Vehicle paper and Document problem anytime on the Highway."
})
mobbtn9.addEventListener('click', () => {
    mobbtn8.classList.remove('active')
    mobbtn9.classList.add('active')
    mobbtn10.classList.remove('active')
    heading2.innerHTML = "Legal Consultation"
    img2.src = "image/icons/Icons9.png"
    p2.innerHTML = "Legal consultation is available to help out driver to get paper back from the police or any authority that seized the Driver's documents."
})
mobbtn10.addEventListener('click', () => {
    mobbtn8.classList.remove('active')
    mobbtn9.classList.remove('active')
    mobbtn10.classList.add('active')
    heading2.innerHTML = "Ambulance facilities"
    img2.src = "image/icons/Icons10.png"
    p2.innerHTML = "The best in class ambulance facilities with a faster and secure help to avoid and prevent every highway misfortune."
})
btn11.addEventListener('click', () => {
    btn11.classList.add('active')
    btn12.classList.remove('active')
    heading3.innerHTML = "JOB Consultation"
    img3.src = "image/icons/Icons11.png"
    p3.innerHTML = "Job facility is also available for the driver to provide the best consultation to the driver on how to cope up with his driving career and to never face any problem in future."
})
btn12.addEventListener('click', () => {
    btn11.classList.remove('active')
    btn12.classList.add('active')
    heading3.innerHTML = "Local Driver"
    img3.src = "image/icons/Icons12.png"
    p3.innerHTML = "Local driver is also available for the drivers facing problem in new cities to help them out from this problem and to ensure a convenient and easy drive."
})
mobbtn11.addEventListener('click', () => {
    mobbtn11.classList.add('active')
    mobbtn12.classList.remove('active')
    heading3.innerHTML = "JOB Consultation"
    img3.src = "image/icons/Icons11.png"
    p3.innerHTML = "Job facility is also available for the driver to provide the best consultation to the driver on how to cope up with his driving career and to never face any problem in future."
})
mobbtn12.addEventListener('click', () => {
    mobbtn11.classList.remove('active')
    mobbtn12.classList.add('active')
    heading3.innerHTML = "Local Driver"
    img3.src = "image/icons/Icons12.png"
    p3.innerHTML = "Local driver is also available for the drivers facing problem in new cities to help them out from this problem and to ensure a convenient and easy drive."
})
btn13.addEventListener('click', () => {
    console.log("hello");
    btn13.classList.add('active')
    btn14.classList.remove('active')
    btn15.classList.remove('active')
    btn16.classList.remove('active')
    btn17.classList.remove('active')
    btn18.classList.remove('active')
    btn19.classList.remove('active')
    btn20.classList.remove('active')
    heading4.innerHTML = "Food(Veg/non-veg)"
    img4.src = "image/icons/Icons13.png"
    p4.innerHTML = "Food is available in both Veg/ Nonveg variety, available a single time. food include a wide range on Indian cuisine roti dal paneer is available for vegetarian and fish and egg for non vegetarians."
})
btn14.addEventListener('click', () => {
    btn13.classList.remove('active')
    btn14.classList.add('active')
    btn15.classList.remove('active')
    btn16.classList.remove('active')
    btn17.classList.remove('active')
    btn18.classList.remove('active')
    btn19.classList.remove('active')
    btn20.classList.remove('active')
    heading4.innerHTML = "Bed(Air conditioned)"
    img4.src = "image/icons/Icons14.png"
    p4.innerHTML = "A bed for 5 hrs rest is available with the best hygiene and comfort to provide a power pack sleep to the driver."
})
btn15.addEventListener('click', () => {
    btn13.classList.remove('active')
    btn14.classList.remove('active')
    btn15.classList.add('active')
    btn16.classList.remove('active')
    btn17.classList.remove('active')
    btn18.classList.remove('active')
    btn19.classList.remove('active')
    btn20.classList.remove('active')
    heading4.innerHTML = "Washroom Facility"
    img4.src = "image/icons/Icons15.png"
    p4.innerHTML = "Washroom is available with all soap and shampoo facilities to provide a best in class service at RIYO Point."
})
btn16.addEventListener('click', () => {
    btn13.classList.remove('active')
    btn14.classList.remove('active')
    btn15.classList.remove('active')
    btn16.classList.add('active')
    btn17.classList.remove('active')
    btn18.classList.remove('active')
    btn19.classList.remove('active')
    btn20.classList.remove('active')
    heading4.innerHTML = "Laundry Service"
    img4.src = "image/icons/Icons16.png"
    p4.innerHTML = "Laundry service is available 24*7 to provide the clean clothes and RIYO clothes offered to driver will dry-clean for 35 wash and after than new pair of clothes will be provided to the driver."
})
btn17.addEventListener('click', () => {
    btn13.classList.remove('active')
    btn14.classList.remove('active')
    btn15.classList.remove('active')
    btn16.classList.remove('active')
    btn17.classList.add('active')
    btn18.classList.remove
        ('active')
    btn19.classList.remove('active')
    btn20.classList.remove('active')
    heading4.innerHTML = "Personal Locker"
    img4.src = "image/icons/Icons17.png"
    p4.innerHTML = "Personal locker is also available at every RIYO Point to ensure the best safety to every docs and personal item of driver."
})
btn18.addEventListener('click', () => {
    btn13.classList.remove('active')
    btn14.classList.remove('active')
    btn15.classList.remove('active')
    btn16.classList.remove('active')
    btn17.classList.remove('active')
    btn18.classList.add('active')
    btn19.classList.remove('active')
    btn20.classList.remove('active')
    heading4.innerHTML = "Wifi"
    img4.src = "image/icons/Icons18.png"
    p4.innerHTML = "24*7 Wi-Fi connection is available to provide a best experience at every RIYO Point to the driver and to enhance the driver's convenience."
})
btn19.addEventListener('click', () => {
    btn13.classList.remove('active')
    btn14.classList.remove('active')
    btn15.classList.remove('active')
    btn16.classList.remove('active')
    btn17.classList.remove('active')
    btn18.classList.remove('active')
    btn19.classList.add('active')
    btn20.classList.remove('active')
    heading4.innerHTML = "Tea"
    img4.src = "image/icons/Icons19.png"
    p4.innerHTML = "Tea is important in India. so for this one time tea is available at any time as a refreshment to the driver."
})
btn20.addEventListener('click', () => {
    btn13.classList.remove('active')
    btn14.classList.remove('active')
    btn15.classList.remove('active')
    btn16.classList.remove('active')
    btn17.classList.remove('active')
    btn18.classList.remove('active')
    btn19.classList.remove('active')
    btn20.classList.add('active')
    heading4.innerHTML = "Parking"
    img4.src = "image/icons/Icons20.png"
    p4.innerHTML = "The most critical aspect Highway parking is available at every RIYO Point to keep the vehicle safe and secure and help the driver to rest peacefully."
})
mobbtn13.addEventListener('click', () => {
    mobbtn13.classList.add('active')
    mobbtn14.lassList.remove('active')
    mobbtn15.classList.remove('active')
    mobbtn16.classList.remove('active')
    mobbtn17.classList.remove('active')
    mobbtn18.classList.remove('active')
    mobbtn19.classList.remove('active')
    mobbtn20.classList.remove('active')
    heading4.innerHTML = "Food(Veg/non-veg)"
    img4.src = "image/icons/Icons13.png"
    p4.innerHTML = "Food is available in both Veg/ Nonveg variety, available a single time. food include a wide range on Indian cuisine roti dal paneer is available for vegetarian and fish and egg for non vegetarians."
})
mobbtn14.addEventListener('click', () => {
    mobbtn13.classList.remove('active')
    mobbtn14.classList.add('active')
    mobbtn15.classList.remove('active')
    mobbtn16.classList.remove('active')
    mobbtn17.classList.remove('active')
    mobbtn18.classList.remove('active')
    mobbtn19.classList.remove('active')
    mobbtn20.classList.remove('active')
    heading4.innerHTML = "Bed(Air conditioned)"
    img4.src = "image/icons/Icons14.png"
    p4.innerHTML = "A bed for 5 hrs rest is available with the best hygiene and comfort to provide a power pack sleep to the driver."
})
mobbtn15.addEventListener('click', () => {
    mobbtn13.classList.remove('active')
    mobbtn14.classList.remove('active')
    mobbtn15.classList.add('active')
    mobbtn16.classList.remove('active')
    mobbtn17.classList.remove('active')
    mobbtn18.classList.remove('active')
    mobbtn19.classList.remove('active')
    mobbtn20.classList.remove('active')
    heading4.innerHTML = "Washroom Facility"
    img4.src = "image/icons/Icons15.png"
    p4.innerHTML = "Washroom is available with all soap and shampoo facilities to provide a best in class service at RIYO Point."
})
mobbtn16.addEventListener('click', () => {
    mobbtn13.classList.remove('active')
    mobbtn14.classList.remove('active')
    mobbtn15.classList.remove('active')
    mobbtn16.classList.add('active')
    mobbtn17.classList.remove('active')
    mobbtn18.classList.remove('active')
    mobbtn19.classList.remove('active')
    mobbtn20.classList.remove('active')
    heading4.innerHTML = "Laundry Service"
    img4.src = "image/icons/Icons16.png"
    p4.innerHTML = "Laundry service is available 24*7 to provide the clean clothes and RIYO clothes offered to driver will dry-clean for 35 wash and after than new pair of clothes will be provided to the driver."
})
mobbtn17.addEventListener('click', () => {
    mobbtn13.classList.remove('active')
    mobbtn14.classList.remove('active')
    mobbtn15.classList.remove('active')
    mobbtn16.classList.remove('active')
    mobbtn17.classList.add('active')
    mobbtn18.classList.remove('active')
    mobbtn19.classList.remove('active')
    mobbtn20.classList.remove('active')
    heading4.innerHTML = "Personal Locker"
    img4.src = "image/icons/Icons17.png"
    p4.innerHTML = "Personal locker is also available at every RIYO Point to ensure the best safety to every docs and personal item of driver."
})
mobbtn18.addEventListener('click', () => {
    mobbtn13.classList.remove('active')
    mobbtn14.classList.remove('active')
    mobbtn15.classList.remove('active')
    mobbtn16.classList.remove('active')
    mobbtn17.classList.remove('active')
    mobbtn18.classList.add('active')
    mobbtn19.classList.remove('active')
    mobbtn20.classList.remove('active')
    heading4.innerHTML = "Wifi"
    img4.src = "image/icons/Icons18.png"
    p4.innerHTML = "24*7 Wi-Fi connection is available to provide a best experience at every RIYO Point to the driver and to enhance the driver's convenience."
})
mobbtn19.addEventListener('click', () => {
    mobbtn13.classList.remove('active')
    mobbtn14.classList.remove('active')
    mobbtn15.classList.remove('active')
    mobbtn16.classList.remove('active')
    mobbtn17.classList.remove('active')
    mobbtn18.classList.remove('active')
    mobbtn19.classList.add('active')
    mobbtn20.classList.remove('active')
    heading4.innerHTML = "Tea"
    img4.src = "image/icons/Icons19.png"
    p4.innerHTML = "Tea is important in India. so for this one time tea is available at any time as a refreshment to the driver."
})
mobbtn20.addEventListener('click', () => {
    mobbtn13.classList.remove('active')
    mobbtn14.classList.remove('active')
    mobbtn15.classList.remove('active')
    mobbtn16.classList.remove('active')
    mobbtn17.classList.remove('active')
    mobbtn18.classList.remove('active')
    mobbtn19.classList.remove('active')
    mobbtn20.classList.add('active')
    heading4.innerHTML = "Parking"
    img4.src = "image/icons/Icons20.png"
    p4.innerHTML = "The most critical aspect Highway parking is available at every RIYO Point to keep the vehicle safe and secure and help the driver to rest peacefully."
})
sos1.addEventListener('click', () => {
    sos1.classList.add('active4')
    sos2.classList.remove('active4')
    sos3.classList.remove('active4')
    sosImg.src = "image/scene1.gif"
    sosHead.innerHTML = "Open RIYO App"
    para.innerHTML = "After Enabling the location on RIYO app And go to the SOS Emergency Option"
})
sos2.addEventListener('click', () => {
    sos1.classList.remove('active4')
    sos2.classList.add('active4')
    sos3.classList.remove('active4')
    sosImg.src = "image/scene2.gif"
    sosHead.innerHTML = "Click on SOS"
    para.innerHTML = "Click the SOS Button so that our Team can recognise the location."
})
sos3.addEventListener('click', () => {
    sos1.classList.remove('active4')
    sos2.classList.remove('active4')
    sos3.classList.add('active4')
    sosImg.src = "image/scene3.gif"
    sosHead.innerHTML = "Relax and Don’t Panic"
    para.innerHTML = "Help is on its way till than don’t panic And relax we have got your back"
})

