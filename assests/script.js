const userIcon = document.querySelector('.user-icon');
    const signOut = document.querySelector('.sign-out');

    userIcon.addEventListener('click', () => {
      signOut.style.display = 'block';
    });

    // Close sign out dropdown when clicking outside
    document.addEventListener('click', (event) => {
      if (!signOut.contains(event.target) && !userIcon.contains(event.target)) {
        signOut.style.display = 'none';
      }
    });