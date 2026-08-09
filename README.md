# Proyecto Nativo: WhatsOut

Este es el paquete completo listo para compilar tu aplicación nativa Android (**APK**) conservando exactamente tu ícono, pantalla de carga (splash screen) y la barra de estado dinámica.

---

## 🌐 Opciones Recomendadas para Generar tu APK Gratis

### 1. PWABuilder (Recomendado por Microsoft - 100% Gratis sin marcas)
PWABuilder es una herramienta gratuita desarrollada por Microsoft que convierte tu web/PWA en un APK de Android directo sin modificar tus logos ni forzar firmas.
1. Ingresa a [pwabuilder.com](https://www.pwabuilder.com/).
2. Escribe la URL de tu sitio web (https://wsout.edgeone.dev/).
3. Presiona **Start** y selecciona **Build Android App**.
4. Descarga el paquete Android APK/AAB directamente a tu dispositivo.

---

### 2. WebIntoApp (webintoapp.com)
1. Ve a [webintoapp.com](https://www.webintoapp.com/).
2. Ingresa el nombre de tu app ("WhatsOut") y la URL (https://wsout.edgeone.dev/).
3. Sube tu ícono (`icon.png`) y pantalla de splash (`splash.png`).
4. Descarga el APK listo para instalar.

---

### 3. Compilación 100% Automática y Gratis con GitHub Actions
Este ZIP ya incluye la compilación automática de Android SDK mediante GitHub Actions:
1. Crea un repositorio en [GitHub.com](https://github.com/).
2. Sube los archivos de este ZIP a tu repositorio.
3. Asegúrate de incluir el archivo `.github/workflows/build-apk.yml`.
4. Ve a la pestaña **Actions** en GitHub, se compilará automáticamente en ~2 minutos y te entregará el archivo **app-debug.apk** listo para descargar.

---

### 4. VoltBuilder (Con config.xml y assets actualizados)
Hemos añadido un archivo `config.xml` completo y duplicado las imágenes en `resources/`, `assets/` y `www/` para que VoltBuilder detecte correctamente el ícono, el splash screen y los colores de la barra de estado en su plan gratuito.
1. Ve a [voltbuilder.com](https://voltbuilder.com/).
2. Sube este archivo **ZIP completo**.
3. Haz clic en **Build** para descargar el APK.

---

## 📱 SOLUCIÓN AL ERROR "NO SE INSTALÓ LA APLICACIÓN" EN ANDROID

Si al presionar **Instalar** en tu celular aparece el aviso **"No se instaló la aplicación"**, se debe a una de estas razones:

1. **⚠️ Tienes instalada una versión anterior (Causa #1)**:
   Si ya habías instalado una versión previa de la app hecha con VoltBuilder, WebIntoApp, PWA o un APK previo, **Android rechazará la instalación** porque la firma digital no coincide.
   👉 **Solución**: Busca la aplicación en tu celular y **DESINSTÁLALA completamente**. Luego reintenta instalar el nuevo APK.

2. **📦 Extraer el archivo .ZIP descargado de GitHub**:
   GitHub descarga un archivo comprimido llamado `app-debug.zip`. Android no puede instalar archivos `.zip` directamente.
   👉 **Solución**: Abre el archivo `.zip` en tu Administrador de Archivos (Files de Google, Mis Archivos o ZArchiver) y **extrae el archivo `app-debug.apk`**. Toca solo el archivo `.apk` para instalar.

3. **🛡️ Google Play Protect**:
   Como es un APK de desarrollo no firmado por la Google Play Store oficial, Play Protect mostrará una alerta.
   👉 **Solución**: Toca en **"Más detalles"** y luego selecciona **"Instalar de todos modos"**.

4. **🔓 Permitir Instalación de Fuentes Desconocidas**:
   En la configuración de tu teléfono (Ajustes > Seguridad > Instalar aplicaciones desconocidas), asegúrate de dar permiso a Chrome, Drive o al Administrador de Archivos desde donde estás abriendo el APK.

---

## 🎨 INTEGRA LA BARRA DE ESTADO DINÁMICA
Envía un postMessage desde tu web cuando el usuario cambie el tema (claro/oscuro):

```javascript
// Cambiar a Tema Oscuro:
window.parent.postMessage({ type: 'THEME_COLOR_CHANGED', themeColor: '#111b21' }, '*');

// Cambiar a Tema Claro:
window.parent.postMessage({ type: 'THEME_COLOR_CHANGED', themeColor: '#008069' }, '*');
```
