function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if (tabContent.length && tabMenu.length) {
    tabContent[0].classList.add('ativo');

    function activeTab(index) {
      tabContent.forEach((content) => {
        content.classList.remove('ativo');
      });
      tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}

initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'ativo';

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}

initAccordion();

function initScrollSuave() {
  const internalLinks = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    // Forma alternativa
    // const top = section.offsetTop;
    // window.scrollTo({
    //   top: top,
    //   behavior: 'smooth',
    // });
  }
  internalLinks.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}

initScrollSuave();


function initAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');

  if (sections.length) {
    const TRIGGER_THRESHOLD = 0.6;
    const windowTriggerHeight = window.innerHeight * TRIGGER_THRESHOLD;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowTriggerHeight) < 0;
        if (isSectionVisible)
          section.classList.add('ativo');
      });
    }
  }

  animaScroll();

  window.addEventListener('scroll', animaScroll);
}

initAnimacaoScroll();