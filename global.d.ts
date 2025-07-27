// global.d.ts
declare global {
  interface Window {
    particlesJS: any;
  }
  interface Stats {
  dom: HTMLDivElement;
  setMode: (mode: number) => void;
  begin: () => void;
  end: () => void;
}

interface Window {
  particlesJS: {
    load: (
      id: string,
      path: string,
      callback?: () => void
    ) => void;
  };
}

}



export {};
