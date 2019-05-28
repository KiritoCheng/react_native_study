# react-native
## 1.Install choco  
&emsp;powershell run  
```
Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```
;&emsp;

## 2.Installing dependencies   
### Node, Python2, JDK   
```
choco install -y nodejs.install python2 jdk8
```  
### React Native CLI  
```
npm install -g react-native-cli
```  
&emsp;

## 3.Android development environment 
**1. Install Android Studio**   
&emsp;[Download](https://developer.android.com/studio/index.html)  
&emsp;Choose a "Custom" setup when prompted to select an installation type. Make sure the boxes next to all of the following are checked:  

* <text style="background-color:#eee">&nbsp;Android SDK&nbsp;</text>
* <text style="background-color:#eee">&nbsp;Android SDK Platform&nbsp;</text>
* <text style="background-color:#eee">&nbsp;Performance (Intel ? HAXM)&nbsp;</text> [(See here for AMD)](https://android-developers.googleblog.com/2018/07/android-emulator-amd-processor-hyper-v.html)
* <text style="background-color:#eee">&nbsp;Android Virtual Device&nbsp;</text>




**2. Install the Android SDK**  
The SDK Manager can be accessed from the "Welcome to Android Studio" screen. Click on "Configure", then select "SDK Manager".  

<div style="text-align: center;">
    
![Picture](https://facebook.github.io/react-native/docs/assets/GettingStartedAndroidStudioWelcomeWindows.png)
</div>
The SDK Manager can also be found within the Android Studio "Preferences" dialog, under <text style="background-color:#eee">&nbsp;Appearance & Behavior → System Settings → Android SDK.&nbsp;</text>  

Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the Android 9 (Pie) entry, then make sure the following items are checked:
* <text style="background-color:#eee">&nbsp;Android SDK Platform 28&nbsp;</text>
* <text style="background-color:#eee">&nbsp;Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image&nbsp;</text>

**Configure the ANDROID_HOME environment variable**
The SDK is installed, by default, at the following location: 
<div style="background-color:rgba(5,165,209,.05);">
<pre>
C:\Users\YOUR_USERNAME\AppData\Local\Android\Sdk\platform-tools
C:\Users\YOUR_USERNAME\AppData\Local\Android\Sdk\tools
</pre>
</div> 

&emsp;  

## 4.Run and Init
    react-native init AwesomeProject  
    react-native run-android          
&emsp;

## 5.Package Publish
#### Generating a signing key  
```  
$ keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000  
```  
  
#### Setting up gradle variables  
1.Place the <text style="background-color:#ddd">&nbsp;my-release-key.keystore&nbsp;</text> file under the <text style="background-color:#ddd">&nbsp;android/app&nbsp;</text> directory in your project folder.  
2.Edit the file <text style="background-color:#ddd">&nbsp;~/.gradle/gradle.properties&nbsp;</text>  or 
<text style="background-color:#ddd">&nbsp;android/gradle.properties&nbsp;</text> , and add the following (replace <text style="background-color:#ddd">&nbsp;*****&nbsp;</text>  with the correct keystore password, alias and key password),
```  
MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
MYAPP_RELEASE_KEY_ALIAS=my-key-alias
MYAPP_RELEASE_STORE_PASSWORD=*****
MYAPP_RELEASE_KEY_PASSWORD=*****
```  
#### Adding signing config to your app's gradle config
Edit the file 
<text style="background-color:#ddd">&nbsp;android/app/build.gradle&nbsp;</text>
in your project folder, and add the signing config,
```
...
android {
    ...
    defaultConfig { ... }
    signingConfigs {
        release {
            if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {
                storeFile file(MYAPP_RELEASE_STORE_FILE)
                storePassword MYAPP_RELEASE_STORE_PASSWORD
                keyAlias MYAPP_RELEASE_KEY_ALIAS
                keyPassword MYAPP_RELEASE_KEY_PASSWORD
            }
        }
    }
    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
        }
    }
}
...
```
#### Simply run the following in a terminal
```  
cd android
./gradlew assembleRelease  
```  
&emsp;

---
>**remake**
&emsp;  
adb tools   
&emsp;adb devices  
&emsp;adb -s <device name> reverse tcp:8081 tcp:8081  
&ensp;  
use the eslint  
&emsp;npm run lint  
&ensp;  
use the nginx
&emsp;/etc/init.d/nginx start
&emsp;/etc/init.d/nginx stop
&emsp;/etc/init.d/nginx reload
&emsp;nginx config key 123456
&emsp;nginx -t -c /etc/nginx/nginx.conf
&emsp;systemctl status nginx.service
use the pm2
&emsp;pm2 start app.js 
&emsp;pm2 list
&emsp;pm2 stop all
&emsp;pm2 stop 0(id)
&emsp;pm2 restart all
&emsp;pm2 delete all 
[Public IP](http://47.102.121.206)
[Private IP](http://172.19.187.237)
&ensp;
use the mysql  
&emsp;mysqladmin -u root -p password(123456)
&emsp;vim /etc/mysql/mysql.conf.d/mysqld.cnf
&emsp;/etc/init.d/mysql restart 
&emsp;service mysql restart
&ensp;
linxu commond  
&emsp;netstat -ntpl |grep 3306
&emsp;shutdown -r now
&ensp;
https://developer.android.com/studio/run/emulator-commandline