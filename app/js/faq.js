document.addEventListener('DOMContentLoaded', function () {
  const faqButtons = document.querySelectorAll('[data-faq-btn]');
  const faqBodies = document.querySelectorAll('.faq__body');
  const faqHeads = document.querySelectorAll('.faq__head');

  if (faqBodies.length === 0) {
    console.error("Error: The expected '.faq__body' element was not found.");
    return;
  }

  faqBodies.forEach(faqBody => {
    if (faqBody.classList.contains('faq__body--active')) {
      updateTabIndexes(faqBody, false);
      faqBody.style.maxHeight = faqBody.scrollHeight + 'px';
    } else {
      updateTabIndexes(faqBody, true);
    }
  });

  faqButtons.forEach(button => {
    button.addEventListener('click', function () {
      const faqItem = button.closest('.faq__item');
      const faqHead = button.closest('.faq__head');
      const faqBody = faqItem.querySelector('.faq__body');
      const faqBtn = faqItem.querySelector('.faq__btn');

      faqBodies.forEach((body, index) => {
        const otherButton = faqButtons[index];
        const otherHead = faqHeads[index];

        if (body !== faqBody) {
          body.style.maxHeight = '0px';
          body.classList.remove('faq__body--active');
          otherButton.classList.remove('active');
          otherHead.classList.remove('faq__head--active');
          updateTabIndexes(body, true);
        }
      });

      if (faqBody.classList.contains('faq__body--active')) {
        faqBody.style.maxHeight = '0px';
        faqBody.classList.remove('faq__body--active');
        faqHead.classList.remove('faq__head--active');
        faqBtn.classList.remove('active');
        updateTabIndexes(faqBody, true);
      } else {
        faqBody.style.maxHeight = faqBody.scrollHeight + 'px';
        faqBody.classList.add('faq__body--active');
        faqHead.classList.add('faq__head--active');
        faqBtn.classList.add('active');
        updateTabIndexes(faqBody, false);
      }
    });
  });

  function updateTabIndexes(container, isHidden) {
    const focusableElements = container.querySelectorAll('a, button, input, [tabindex]');
    focusableElements.forEach(el => {
      if (isHidden) {
        el.setAttribute('tabindex', '-1');
      } else {
        el.removeAttribute('tabindex');
      }
    });
  }
});