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
var btn21 = document.getElementById('btn21')
var btn22 = document.getElementById('btn22')
var btn23 = document.getElementById('btn23')
var para = document.getElementById('para2')
var heading4 = document.getElementById('heading4')
var head = document.getElementById('head')

var img4 = document.getElementById('img4')
var img5 = document.getElementById('img5')
var p4 = document.getElementById('p4')

btn13.addEventListener('click',()=>{
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
btn14.addEventListener('click',()=>{
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
btn15.addEventListener('click',()=>{
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
btn16.addEventListener('click',()=>{
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
btn17.addEventListener('click',()=>{
    btn13.classList.remove('active')
    btn14.classList.remove('active')
    btn15.classList.remove('active')
    btn16.classList.remove('active')
    btn17.classList.add('active')
    btn18.classList.remove('active')
    btn19.classList.remove('active')
    btn20.classList.remove('active')
    heading4.innerHTML = "Personal Locker"
    img4.src = "image/icons/Icons17.png"
    p4.innerHTML = "Personal locker is also available at every RIYO Point to ensure the best safety to every docs and personal item of driver."
})
btn18.addEventListener('click',()=>{
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
btn19.addEventListener('click',()=>{
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
btn20.addEventListener('click',()=>{
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
mobbtn13.addEventListener('click',()=>{
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
mobbtn14.addEventListener('click',()=>{
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
mobbtn15.addEventListener('click',()=>{
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
mobbtn16.addEventListener('click',()=>{
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
mobbtn17.addEventListener('click',()=>{
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
mobbtn18.addEventListener('click',()=>{
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
mobbtn19.addEventListener('click',()=>{
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
mobbtn20.addEventListener('click',()=>{
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
btn21.addEventListener('click',()=>{
    btn21.classList.add('active1')
    btn22.classList.remove('active1')
    btn23.classList.remove('active1')
    img5.src = "image/riostep1.gif"
    head.innerHTML = "Select the RIYO POINT"
    para.innerHTML = "From a range of 50 km the RIYO POINT will appear on your mobile application Select the  RIYO POINT, and the Food type."
})
btn22.addEventListener('click',()=>{
    btn21.classList.remove('active1')
    btn22.classList.add('active1')
    btn23.classList.remove('active1')
    img5.src = "image/riostep2.gif"
    head.innerHTML = "Visit RIYO POINT"
    para.innerHTML = "Reach the RIYO POINT and meet IPFOAD Agent, He will assist you with all the Services."
})
btn23.addEventListener('click',()=>{
    btn21.classList.remove('active1')
    btn22.classList.remove('active1')
    btn23.classList.add('active1')
    img5.src = "image/riostep3.gif"
    head.innerHTML = "Receive and Chill"
    para.innerHTML = ""
})