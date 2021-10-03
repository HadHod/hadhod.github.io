window.addEventListener('load', () => {
  let isOn = false;

  window.addEventListener('click', evt => {
    if (evt.detail === 3) {
      document.querySelectorAll(isOn ? '.alert' : '.section').forEach(section =>
        isOn ? section.classList.remove('alert') : section.classList.add('alert')
      );
      isOn = !isOn;
    }
  });
});
