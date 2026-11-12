import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.zenvio.smarttools',
  appName: 'ZENVIO',
  webDir: 'dist',
  bundledWebRuntime: false,
  plugins: {
    AdMob: {
      appId: 'ca-app-pub-3685144280766770~6985134103',
      initializeForTesting: true
    }
  }
};

export default config;
