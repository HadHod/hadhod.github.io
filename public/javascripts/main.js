document.addEventListener('DOMContentLoaded', () => {
  // Clipboard copy for cryptocurrency addresses
  const copyButtons = document.querySelectorAll('.copy-btn');

  copyButtons.forEach(button => {
    button.addEventListener('click', async () => {
      const address = button.getAttribute('data-address');
      if (!address) return;

      try {
        await navigator.clipboard.writeText(address);
        const originalText = button.innerHTML;
        button.classList.add('copied');
        button.innerHTML = '<span>COPIED ✓</span>';

        setTimeout(() => {
          button.classList.remove('copied');
          button.innerHTML = originalText;
        }, 2000);
      } catch (err) {
        // Fallback for older browsers or restricted clipboard contexts
        const textarea = document.createElement('textarea');
        textarea.value = address;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
          document.execCommand('copy');
          const originalText = button.innerHTML;
          button.classList.add('copied');
          button.innerHTML = '<span>COPIED ✓</span>';
          setTimeout(() => {
            button.classList.remove('copied');
            button.innerHTML = originalText;
          }, 2000);
        } catch (e) {
          console.error('Failed to copy', e);
        }
        document.body.removeChild(textarea);
      }
    });
  });

  // Dynamic subtle glow tracking on bento cards
  const cards = document.querySelectorAll('.section');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
});
