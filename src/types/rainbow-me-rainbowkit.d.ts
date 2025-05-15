declare module '@rainbow-me/rainbowkit' {
  export function getDefaultConfig(config: {
    appName: string;
    chains: any[];
    projectId: string;
    ssr?: boolean;
  }): any;
  
  export function RainbowKitProvider(props: { children: React.ReactNode }): JSX.Element;
} 