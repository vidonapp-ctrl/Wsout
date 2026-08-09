const fs = require('fs');
const path = require('path');

const manifestPath = path.join(__dirname, 'android', 'app', 'src', 'main', 'AndroidManifest.xml');

if (fs.existsSync(manifestPath)) {
  let manifest = fs.readFileSync(manifestPath, 'utf8');
  
  // Enable cleartext traffic if not explicitly set
  if (!manifest.includes('android:usesCleartextTraffic')) {
    manifest = manifest.replace('<application', '<application android:usesCleartextTraffic="true"');
  }

  const permsToInject = [
    '<uses-permission android:name="android.permission.INTERNET" />',
    '<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />',
    '<uses-permission android:name="android.permission.CAMERA" />',

    '<uses-permission android:name="android.permission.RECORD_AUDIO" />',
    '<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />',
    '<uses-permission android:name="android.permission.POST_NOTIFICATIONS" />',
  ].filter(Boolean);

  let added = false;
  permsToInject.forEach(perm => {
    if (!manifest.includes(perm.trim())) {
      manifest = manifest.replace('</manifest>', '    ' + perm + '\n</manifest>');
      added = true;
    }
  });

  fs.writeFileSync(manifestPath, manifest);
  console.log('Permisos y configuración de red actualizados en AndroidManifest.xml.');
} else {
  console.log('AndroidManifest.xml no encontrado.');
}
