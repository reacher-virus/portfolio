/*===========Menu============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle')

    /*Menu Show -hidden*/
navToggle.addEventListener('click', () =>{
    navMenu.classList.toggle('show-menu');
    navToggle.classList.toggle('animate-toggle');
});

/*================remove menu mobile*/
const navLink=document.querySelectorAll('.nav-link');
const LinkAction=()=>{
    const navMenu=document.getElementById('nav-menu');
   
   
    
    navToggle.classList.remove('animate-toggle');
    navMenu.classList.remove('show-menu');
};
navLink.forEach((n)=> n.addEventListener('click',LinkAction)
);

/*==================cahnge backgorund header============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')

    this.scrollY >=20? header.classList.add('bg-header'): header.classList.remove('bg-header');


};

window.addEventListener('scroll', scrollHeader);

/*=============scroll section active link============*/
const sections = document.querySelectorAll('section[id]');
const scrollActive = () =>{
    const scrollY = window.pageYOffset;
    sections.forEach((current)=>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId=current.getAttribute('id'),
        sectionsClass=document.querySelector('.nav-menu a[href*='+sectionId+']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link');
        }else{
            sectionsClass.classList.remove('active-link');

        }


    });
};
window.addEventListener('scroll', scrollActive);


        

/*===========service Swiper============*/
var ServicesSwiper = new Swiper('.services-swiper' , {
    spaceBetween: 32,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        
        768: {
          slidesPerView: 2,
          
        },
        1208: {
          slidesPerView: 3,
          
        },
    },
});



/*=============MIXITUP FILTER PORTFOLIO=================*/
var mixer = mixitup('.work-container', {
    selectors: {
        target: '.mix'
    },
    animation:{
        duration: 300
    },
});

/*Active work item*/
const linkWork=document.querySelectorAll('.work-item');
function activeWork(){
    linkWork.forEach((a)=>{
        a.classList.remove('active-work');
        
    });
    this.classList.add('active-work');
}

linkWork.forEach((a)=> a.addEventListener('click',activeWork)
);



linkWork.forEach((a)=> a.addEventListener('click',activeWork)
);


/*=================Resume=================*/

const accordionItems=document.querySelectorAll('.resume-item');

accordionItems.forEach((item)=>{
    const header=item.querySelector('.resume-header');
    const content=item.querySelector('.resume-content');

    const icon=item.querySelector('.resume-icon i');
    if(!header||!content||!icon) return;
    header.addEventListener('click',()=>{
        const isOpen=item.classList.toggle('accordion-open');
        content.style.height=isOpen ? content.scrollHeight + 'px':'0';

        icon.className=isOpen ? 'ri-subtract-line' : 'ri-add-line';
        accordionItems.forEach((otherItem)=>{
            if(otherItem!==item && otherItem.classList.contains('accordion-open')){
                otherItem.querySelector('.resume-content').style.height='0';
                otherItem.classList.remove('accordion-open');
                otherItem.querySelector('.resume-icon i').classList='ri-add-line';
                otherItem.classList.remove('accordion-open');
            };
        });
    });

});
/*================email==============*/
const contactForm = document.getElementById('contact-form');
const contactName = document.getElementById('contact-name');
const contactEmail = document.getElementById('contact-email');
const contactSubject = document.getElementById('contact-subject');
const contactMessage = document.getElementById('contact-message');
const message = document.getElementById('message');

const sendEmail = (e) => {
  e.preventDefault();

  // hard validation
  if (
    !contactName.value.trim() ||
    !contactEmail.value.trim() ||
    !contactSubject.value.trim() ||
    !contactMessage.value.trim()
  ) {
    message.className = 'message color-red';
    message.textContent = 'All fields are required';

    setTimeout(() => {
      message.textContent = '';
    }, 3000);

    return;
  }

  emailjs.sendForm(
    'service_txnout1',
    'template_jpbcm2o',
    contactForm
  )
  .then(() => {
    message.className = 'message color-first';
    message.textContent = 'Message sent successfully';

    contactForm.reset();

    setTimeout(() => {
      message.textContent = '';
    }, 5000);
  })
  .catch((error) => {
    console.error(error);
    message.className = 'message color-red';
    message.textContent = 'Failed to send message';
  });
};

contactForm.addEventListener('submit', sendEmail);


/*=============Style switcher=================*/

const styleSwitcher = document.getElementById('style-switcher'),
switcherToggler = document.getElementById('switcher-toggler'),
switcherClose = document.getElementById('switcher-close');

switcherToggler.addEventListener('click', () =>{
    styleSwitcher.classList.add('show-switcher');
});


switcherClose.addEventListener('click', () =>{
    styleSwitcher.classList.remove('show-switcher');
});

const colors=document.querySelectorAll('.style-switcher-color');
colors.forEach(color =>{
    color.onclick=() =>{
        const activeColor=color.style.getPropertyValue('--hue');

        colors.forEach((c) => c.classList.remove('active-color'));
        color.classList.add('active-color');

        document.documentElement.style.setProperty('--hue', activeColor);
    };
});

let currentTheme = 'light';
document.body.className = currentTheme;

document.querySelectorAll('input[name="body-theme"]').forEach((input)  =>{
    input.addEventListener('change', () =>{
      currentTheme = input.value;  
      document.body.className=currentTheme;
    });
});
