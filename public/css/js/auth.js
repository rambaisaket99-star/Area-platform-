// Auth state management
const authGate = document.getElementById('auth-gate');
const mainSite = document.getElementById('main-site');
const signInBtn = document.getElementById('google-signin-btn');
const signOutBtn = document.getElementById('sign-out-btn');
const userAvatar = document.getElementById('user-avatar');
const userName = document.getElementById('user-name');
const userEmail = document.getElementById('user-email');
const authError = document.getElementById('auth-error');

function showError(msg) {
  if (authError) { authError.textContent = msg; authError.style.display = 'block'; }
}

signInBtn.addEventListener('click', () => {
  auth.signInWithPopup(googleProvider).catch(err => {
    showError('Sign-in failed. Please try again.');
    console.error(err);
  });
});

if (signOutBtn) {
  signOutBtn.addEventListener('click', () => {
    auth.signOut();
  });
}

auth.onAuthStateChanged(user => {
  if (user) {
    // Logged in
    if (authGate) authGate.style.display = 'none';
    if (mainSite) mainSite.style.display = 'block';
    if (userAvatar) userAvatar.src = user.photoURL || 'assets/default-avatar.png';
    if (userName) userName.textContent = user.displayName || 'User';
    if (userEmail) userEmail.textContent = user.email || '';
    // Save to Firestore (optional)
    db.collection('users').doc(user.uid).set({
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      lastLogin: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
  } else {
    // Logged out
    if (authGate) authGate.style.display = 'flex';
    if (mainSite) mainSite.style.display = 'none';
  }
});
